class TicTacToe {
  constructor() {
    this.scores = new Array(2).fill(0);
    this.turn = 0;
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    } else {
      this.instance = new TicTacToe();
      return this.instance;
    }
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
}

export default TicTacToe;
