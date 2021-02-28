class TurnHandler {
  static addTurn(game) {
    return game.turn++;
  }

  static defineTurn(game) {
    if (game.turn % 2 === 0) {
      return 2;
    } else if (game.turn % 2 !== 0) {
      return 1;
    }
  }

  static resetCount(game) {
    game.turn = 1;
  }
}

export default TurnHandler;
