import Gameboard from '../gameboard';

test('Gameboard generation generates 16 holes', () => {
  document.body.innerHTML = '<div id="game-container"></div>';
  const gameboard = new Gameboard('game-container');
  const holes = gameboard.generate();
  expect(holes.length).toBe(16);
});
