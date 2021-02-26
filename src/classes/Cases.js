import draw from '../components/draw';
import win from '../components/win';
import EventsHandler from './Events';
import Score from './Score';

class Cases {
  static draw(initialTemplate, game) {
    const container = document.querySelector('.playground__container');
    EventsHandler.removeListeners(
      { element: container, type: 'click' },
      { element: container, type: 'keydown' },
    );
    container.innerHTML = draw();

    setTimeout(() => (container.innerHTML = initialTemplate), 2000);
  }

  static win(player, game) {
    game.scores[player - 1]++;
  }
}

export default Cases;
