export default class Gameboard {
  constructor(containerId, size = 16) {
    this.container = document.getElementById(containerId);
    this.size = size;
    this.holes = [];
  }

  generate() {
    this.container.innerHTML = '';
    this.holes = [];
    for (let i = 0; i < this.size; i += 1) {
      const hole = document.createElement('div');
      hole.classList.add('hole');
      this.container.appendChild(hole);
      this.holes.push(hole);
    }
    return this.holes;
  }
}
