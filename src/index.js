import Cases from './classes/Cases.js';
import TicTacToe from './classes/TicTacToe.js';
import EventsHandler from './classes/Events.js';

const container = document.querySelector('.playground__container');
const initialTemplate = container.innerHTML;

const Game = TicTacToe.getInstance();
console.log(Game);

EventsHandler.addListeners(
  { element: container, type: 'click' },
  { element: container, type: 'keydown' },
);
