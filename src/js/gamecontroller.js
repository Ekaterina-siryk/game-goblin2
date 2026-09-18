export default class GameController {
  constructor(gameboard, goblin) {
    this.gameboard = gameboard;
    this.goblin = goblin;
    this.holes = [];
    this.score = 0;
    this.misses = 0;
    this.maxMisses = 5;
    this.currentHoleIndex = -1;
    this.isHitInCurrentTurn = false;
    this.intervalId = null;

    this.scoreEl = document.getElementById('score-counter');
    this.missEl = document.getElementById('miss-counter');
  }

  init() {
    this.holes = this.gameboard.generate();
    this.addEventListeners();
    this.nextTurn();
    this.startLoop();
  }

  addEventListeners() {
    this.gameboard.container.addEventListener('click', (event) => {
      if (event.target.classList.contains('goblin-img')) {
        this.handleHit();
      }
    });
  }

  startLoop() {
    this.intervalId = setInterval(() => {
      if (!this.isHitInCurrentTurn && this.currentHoleIndex !== -1) {
        this.handleMiss();
      }
      if (this.misses < this.maxMisses) {
        this.nextTurn();
      }
    }, 1000);
  }

  nextTurn() {
    this.isHitInCurrentTurn = false;
    let newIndex = Math.floor(Math.random() * this.holes.length);
    while (newIndex === this.currentHoleIndex) {
      newIndex = Math.floor(Math.random() * this.holes.length);
    }
    this.currentHoleIndex = newIndex;
    this.goblin.moveTo(this.holes[this.currentHoleIndex]);
  }

  handleHit() {
    if (this.isHitInCurrentTurn) return;
    this.isHitInCurrentTurn = true;
    this.score += 1;
    this.scoreEl.textContent = this.score;
    this.goblin.removeFromDOM();
  }

  handleMiss() {
    this.misses += 1;
    this.missEl.textContent = this.misses;
    if (this.misses >= this.maxMisses) {
      this.endGame();
    }
  }

  endGame() {
    clearInterval(this.intervalId);
    this.goblin.removeFromDOM();
    console.log(`Игра окончена! Ваши очки: ${this.score}`);
    this.resetGame();
  }

  resetGame() {
    this.score = 0;
    this.misses = 0;
    this.currentHoleIndex = -1;
    this.scoreEl.textContent = '0';
    this.missEl.textContent = '0';
    this.init();
  }
}
