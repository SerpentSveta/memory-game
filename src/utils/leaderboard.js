const STORAGE_KEY = 'memory-game-results';

export function getResults() {
  const results = localStorage.getItem(STORAGE_KEY);

  return results ? JSON.parse(results) : [];
}

export function saveResult(moves) {
  const results = getResults();

  const today = new Date();
  const date = `${String(today.getDate()).padStart(2, '0')}.${String(
    today.getMonth() + 1,
  ).padStart(2, '0')}.${today.getFullYear()}`;

  results.push({
    moves,
    date,
  });

  localStorage.setItem(STORAGE_KEY, JSON.stringify(results));

}
