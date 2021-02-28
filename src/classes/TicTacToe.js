class TicTacToe {
  constructor() {
    this.scores = new Array(2).fill(0);
    this.turn = 1;
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    } else {
      this.instance = new TicTacToe();
      return this.instance;
    }
  }
}

export default TicTacToe;
