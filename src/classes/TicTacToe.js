import config from '../../config.js';

class TicTacToe {
  constructor() {
    this.spaces = this.getSpaces();
    this.score = document.querySelector('.score');

    this.toggleTurn = this.toggleTurn;

    this.scoreX = 0;
    this.scoreO = 0;
    this.turn = 0;
    this.numberOfTurn = 0;
  }

  addTurn() {
    this.numberOfTurn++;
  }

  toggleTurn() {
    switch (this.turn) {
      case 0:
        this.turn = 1;
        break;
      case 1:
        this.turn = 0;
        break;

      default:
        break;
    }
  }

  getSpaces() {
    const spaces = document.getElementsByClassName('playground__space');
    return [...spaces];
  }

  joint() {
    this.spaces.forEach((value) => {
      value.style['background-image'] = ``;
      value.style['background-repeat'] = 'initial';
      value.style['background-position'] = 'initial';
      this.numberOfTurn = 0;
      this.turn = 0;
    });
  }

  seeAWinner(node1, node2, node3) {
    const _node1 = document.querySelector(`.space${node1}`);
    const _node2 = document.querySelector(`.space${node2}`);
    const _node3 = document.querySelector(`.space${node3}`);

    if (
      _node1.style['background-image'] &&
      _node2.style['background-image'] &&
      _node3.style['background-image']
    ) {
      if (
        _node1.style['background-image'] === _node2.style['background-image'] &&
        _node2.style['background-image'] === _node3.style['background-image']
      ) {
        debugger;
        console.log('winner, no se quien pero winner');
      }
    }
  }

  checkWinner(target) {
    const number = parseInt(target.classList.toString().split(' ')[1].replace('space', ''));

    if (number === 1 || number === 4 || number === 7) {
      this.seeAWinner(number, number + 1, number + 2);
    } else if (number === 3 || number === 6 || number === 9) {
      this.seeAWinner(number, number - 1, number - 2);
    }

    if (number === 1 || number === 2 || number === 3) {
      this.seeAWinner(number, number + 3, number + 6);
    } else if (number === 7 || number === 8 || number === 9) {
      this.seeAWinner(number, number - 3, number - 6);
    }

    if (number === 1 || number === 2 || number === 3) {
      this.seeAWinner(number, number + 3, number + 6);
    } else if (number === 7 || number === 8 || number === 9) {
      this.seeAWinner(number, number - 3, number - 6);
    }

    if (number === 1) {
      this.seeAWinner(number, number + 4, number + 8);
    } else if (number === 5) {
      this.seeAWinner(number, number - 4, number + 4);
    } else if (number === 9) {
      this.seeAWinner(number, number - 4, number - 8);
    }

    if (number === 3) {
      this.seeAWinner(number, number + 2, number + 4);
    } else if (number === 5) {
      this.seeAWinner(number, number - 2, number + 2);
    } else if (number === 7) {
      this.seeAWinner(number, number - 2, number - 4);
    }
  }

  setStyles(target) {
    const route = this.turn === 0 ? config.imgRoutes.x : config.imgRoutes.o;

    if (!target.style['background-image']) {
      target.style['background-image'] = `url(${route})`;
      target.style['background-repeat'] = 'no-repeat';
      target.style['background-position'] = 'center';
      this.checkWinner(target);
      this.addTurn();
      this.toggleTurn();
    }
  }

  handler(event) {
    if (event.type === 'click' || event.key === 'Enter') {
      this.setStyles(event.target);
      if (this.numberOfTurn === 9) this.joint();
    }
  }

  addListeners(...toDo) {
    toDo.forEach((value) => {
      value.element.addEventListener(value.type, this.handler.bind(this));
    });
  }
}

export default TicTacToe;
