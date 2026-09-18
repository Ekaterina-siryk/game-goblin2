import goblinImgSrc from '../assets/goblin.png';

export default class Goblin {
  constructor() {
    this.element = Goblin.createElement();
  }

  static createElement() {
    const img = document.createElement('img');
    img.src = goblinImgSrc;
    img.classList.add('goblin-img');
    img.alt = 'Goblin';
    return img;
  }

  moveTo(holeEl) {
    holeEl.appendChild(this.element);
  }

  removeFromDOM() {
    if (this.element.parentNode) {
      this.element.parentNode.removeChild(this.element);
    }
  }
}
