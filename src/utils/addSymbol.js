import TurnHandler from '../classes/Turn';
import defineImageUrl from './defineImageUrl';

const addSymbol = (target, game) => {
  const player = TurnHandler.defineTurn(game);
  const route = defineImageUrl(player);

  if (target.classList.contains('playground__space') && !target.style['background-image']) {
    target.style['background-image'] = `url(${route})`;
    target.style['background-repeat'] = 'no-repeat';
    target.style['background-position'] = 'center';
    return false;
  } else {
    return true;
  }
};

export default addSymbol;
