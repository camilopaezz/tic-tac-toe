import initial from '../components/initial';
import Cases from './Cases';
import TicTacToe from './TicTacToe';
import TurnHandler from './Turn';

class Check {
  static check(target, game) {
    if (game.turn === 9) {
      const someWins = this.redirect(target);
      if (!someWins) {
        Cases.draw(initial(), game);
      }
    } else {
      this.redirect(target);
    }
  }

  static seeAWinner(node1, node2, node3) {
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
        const game = TicTacToe.getInstance();
        const player = TurnHandler.defineTurn(game);
        Cases.win(player, game);
        return true;
      }
    }
  }

  static redirect(target) {
    const number = parseInt(target.classList.toString().split(' ')[1].replace('space', ''));

    if (number === 1 || number === 4 || number === 7) {
      const someWin = this.seeAWinner(number, number + 1, number + 2);
      if (someWin) return true;
    } else if (number === 3 || number === 6 || number === 9) {
      const someWin = this.seeAWinner(number, number - 1, number - 2);
      if (someWin) return true;
    }

    if (number === 1 || number === 2 || number === 3) {
      const someWin = this.seeAWinner(number, number + 3, number + 6);
      if (someWin) return true;
    } else if (number === 7 || number === 8 || number === 9) {
      const someWin = this.seeAWinner(number, number - 3, number - 6);
      if (someWin) return true;
    }

    if (number === 1) {
      const someWin = this.seeAWinner(number, number + 4, number + 8);
      if (someWin) return true;
    } else if (number === 5) {
      const someWin = this.seeAWinner(number, number - 4, number + 4);
      if (someWin) return true;
    } else if (number === 9) {
      const someWin = this.seeAWinner(number, number - 4, number - 8);
      if (someWin) return true;
    }

    if (number === 3) {
      const someWin = this.seeAWinner(number, number + 2, number + 4);
      if (someWin) return true;
    } else if (number === 5) {
      const someWin = this.seeAWinner(number, number - 2, number + 2);
      if (someWin) return true;
    } else if (number === 7) {
      const someWin = this.seeAWinner(number, number - 2, number - 4);
      if (someWin) return true;
    }

    const game = TicTacToe.getInstance();
    TurnHandler.addTurn(game);
    return false;
  }
}

export default Check;
