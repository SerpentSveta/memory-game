import { getResults } from '../utils/leaderboard';

export function createLeaderboardContent() {
  const results = getResults();

  const leaderboard = document.createElement('div');
  leaderboard.className = 'leaderboard-modal';

  if (results.length === 0) {
    leaderboard.textContent = 'No results yet';
    return leaderboard;
  }

  const leaderboardTable = document.createElement('table');

  leaderboard.append(leaderboardTable);

  const tableHead = document.createElement('thead');
  const headerRow = document.createElement('tr');
  const headers = ['Place', 'Moves', 'Date'];

  headers.forEach((text) => {
    const th = document.createElement('th');
    th.textContent = text;
    headerRow.append(th);
  });

  tableHead.append(headerRow);
  leaderboardTable.append(tableHead);

  const tableBody = document.createElement('tbody');

  results.forEach((item, index) => {
    const row = document.createElement('tr');

    const cell = document.createElement('td');
    cell.textContent = index + 1;
    row.append(cell);

    const movesCell = document.createElement('td');
    movesCell.textContent = item.moves;
    row.append(movesCell);

    const dateCell = document.createElement('td');
    dateCell.textContent = item.date;
    row.append(dateCell);

    tableBody.append(row);
  });

  leaderboardTable.append(tableBody);

  return leaderboard;
}
