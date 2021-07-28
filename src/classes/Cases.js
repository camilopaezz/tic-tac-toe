import draw from '../components/draw'
import initial from '../components/initial'
import win from '../components/win'
import Score from './Score'
import TurnHandler from './Turn'

class Cases {
  static draw(initialTemplate, game) {
    const container = document.querySelector('.playground')
    container.innerHTML = draw()

    setTimeout(() => (container.innerHTML = initialTemplate), 2000)
    TurnHandler.resetCount(game)
  }

  static win(player, game) {
    const initialTemplate = initial()
    game.scores[player - 1]++
    Score.updateScore(...game.scores)

    const container = document.querySelector('.playground')
    container.innerHTML = win(game)

    setTimeout(() => (container.innerHTML = initialTemplate), 2000)
    debugger
    TurnHandler.resetCount(game)
  }
}

export default Cases
