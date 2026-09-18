import '../css/style.css';
import Gameboard from './gameboard';
import Goblin from './goblin';
import GameController from './gamecontroller';

document.addEventListener('DOMContentLoaded', () => {
  const gameboard = new Gameboard('game-container');
  const goblin = new Goblin();
  const controller = new GameController(gameboard, goblin);
  
  controller.init();
});
