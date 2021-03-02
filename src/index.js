import EventsHandler from './classes/Events.js';
import './styles/index.css';

const container = document.querySelector('.playground__container');

EventsHandler.addListeners(
  { element: container, type: 'click' },
  { element: container, type: 'keydown' },
);
