import TicTacToe from './classes/TicTacToe.js';
import configs from '../config.js';

const game = new TicTacToe();
const container = document.querySelector('.playground__container');

game.addListeners({ element: container, type: 'click' }, { element: container, type: 'keydown' });
