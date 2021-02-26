class TurnHandler {
  static addTurn(game) {
    return game.turn++;
  }

  static defineTurn(game) {
    if (game.turn % 2 === 0) {
      return 1;
    } else if (game.turn % 2 !== 0) {
      return 2;
    }
  }
}

export default TurnHandler;
