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
    timestamp: today.getTime(),
  });

  results.sort((a, b) => {
    if (a.moves !== b.moves) {
      return a.moves - b.moves;
    }

    return a.timestamp - b.timestamp;
  });

  results.splice(10);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(results));
}
