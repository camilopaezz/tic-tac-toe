import addSymbol from '../utils/addSymbol.js';
import initial from '../components/initial';
import TicTacToe from './TicTacToe.js';
import Check from './Check.js';

class EventsHandler {
  static addListeners(...elements) {
    elements.forEach((value) => {
      value.element.addEventListener(value.type, this.handler);
    });
  }

  static removeListeners(...elements) {
    elements.forEach((value) => {
      value.element.removeEventListener(value.type, this.handler);
    });
  }

  static handler(event) {
    const game = TicTacToe.getInstance();
    if (event.type === 'click' || event.key === 'Enter') {
      const hasImage = addSymbol(event.target, game);
      if (!hasImage) {
        Check.check(event.target, game);
      }
    }
  }
}

export default EventsHandler;
