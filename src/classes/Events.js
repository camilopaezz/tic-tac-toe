import Cases from './Cases.js';
import addSymbol from '../utils/addSymbol.js';
import TurnHandler from './Turn.js';
import initial from '../components/initial';
import TicTacToe from './TicTacToe.js';

class EventsHandler {
  static addListeners(...elements) {
    console.log('im here');
    console.log(this);
    elements.forEach((value) => {
      value.element.addEventListener(value.type, this.handler.bind(TicTacToe.getInstance()));
    });
  }

  static removeListeners(...elements) {
    elements.forEach((value) => {
      value.element.removeEventListener(value.type, this.handler.bind(TicTacToe.getInstance()));
    });
  }

  static handler(event) {
    if (event.type === 'click' || event.key === 'Enter') {
      addSymbol(event.target, this);
      TurnHandler.addTurn(this);
      if (this.turn === 9) Cases.draw(initial(), this);
    }
  }
}

export default EventsHandler;
