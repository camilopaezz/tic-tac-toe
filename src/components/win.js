import defineImageUrl from '../utils/defineImageUrl.js';
import TurnHandler from '../classes/Turn.js';

const win = (game) => {
  const player = TurnHandler.defineTurn(game);
  const imageUrl = defineImageUrl(player);

  return `
  <div class="playground__container playground__container--win">
    <img class="win__image" src="${imageUrl}" alt="winner" />
    <p class="win__text">Player ${player} wins🏆!!</p>
  </div>
  `;
};

export default win;
