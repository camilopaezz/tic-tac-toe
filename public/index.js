(() => {
  // src/classes/Turn.js
  var TurnHandler = class {
    static addTurn(game) {
      return game.turn++;
    }
    static defineTurn(game) {
      if (game.turn % 2 === 0) {
        return 2;
      } else if (game.turn % 2 !== 0) {
        return 1;
      }
    }
    static resetCount(game) {
      game.turn = 1;
    }
  };
  var Turn_default = TurnHandler;

  // src/utils/defineImageUrl.js
  var defineImageUrl = (player) => {
    if (player === 1) {
      return "assets/Group1.png";
    } else {
      return "assets/Ellipse1.png";
    }
  };
  var defineImageUrl_default = defineImageUrl;

  // src/utils/addSymbol.js
  var addSymbol = (target, game) => {
    const player = Turn_default.defineTurn(game);
    const route = defineImageUrl_default(player);
    if (target.classList.contains("playground__space") && !target.style["background-image"]) {
      target.style["background-image"] = `url(${route})`;
      target.style["background-repeat"] = "no-repeat";
      target.style["background-position"] = "center";
      return false;
    } else {
      return true;
    }
  };
  var addSymbol_default = addSymbol;

  // src/components/initial.js
  var initial = () => `
  <div class="row row1">
    <div class="playground__space space1" tabindex="1"></div>
    <div class="playground__space space2" tabindex="2"></div>
    <div class="playground__space space3" tabindex="3"></div>
  </div>
    <div class="row row2">
      <div class="playground__space space4" tabindex="4"></div>
      <div class="playground__space space5" tabindex="5"></div>
      <div class="playground__space space6" tabindex="6"></div>
    </div>
    <div class="row row3">
      <div class="playground__space space7" tabindex="7"></div>
      <div class="playground__space space8" tabindex="8"></div>
      <div class="playground__space space9" tabindex="9"></div>
    </div>`;
  var initial_default = initial;

  // src/classes/TicTacToe.js
  var TicTacToe = class {
    constructor() {
      this.scores = new Array(2).fill(0);
      this.turn = 1;
    }
    static getInstance() {
      if (this.instance) {
        return this.instance;
      } else {
        this.instance = new TicTacToe();
        return this.instance;
      }
    }
  };
  var TicTacToe_default = TicTacToe;

  // src/components/draw.js
  var draw = () => `
  <div class="playground__container playground__container--draw">
    <span class="draw__emoji">\u{1F615}</span>
    <p class="draw__text">Draw</p>
  </div>
`;
  var draw_default = draw;

  // src/components/win.js
  var win = (game) => {
    const player = Turn_default.defineTurn(game);
    const imageUrl = defineImageUrl_default(player);
    return `
  <div class="playground__container playground__container--win">
    <img class="win__image" src="${imageUrl}" alt="winner" />
    <p class="win__text">Player ${player} wins\u{1F3C6}!!</p>
  </div>
  `;
  };
  var win_default = win;

  // src/classes/Score.js
  var Score = class {
    static updateScore(score1, score2) {
      const score = document.querySelector(".score");
      score.innerHTML = `
      <p class='score'>
      ${score1}
        <span class='score__into'>-</span>
      ${score2}
      </p>
    `;
    }
  };
  var Score_default = Score;

  // src/classes/Cases.js
  var Cases = class {
    static draw(initialTemplate, game) {
      const container2 = document.querySelector(".playground__container");
      container2.innerHTML = draw_default();
      setTimeout(() => container2.innerHTML = initialTemplate, 2e3);
      Turn_default.resetCount(game);
    }
    static win(player, game) {
      const initialTemplate = initial_default();
      game.scores[player - 1]++;
      Score_default.updateScore(...game.scores);
      const container2 = document.querySelector(".playground__container");
      container2.innerHTML = win_default(game);
      setTimeout(() => container2.innerHTML = initialTemplate, 2e3);
      debugger;
      Turn_default.resetCount(game);
    }
  };
  var Cases_default = Cases;

  // src/classes/Check.js
  var Check = class {
    static check(target, game) {
      if (game.turn === 9) {
        const someWins = this.redirect(target);
        if (!someWins) {
          Cases_default.draw(initial_default(), game);
        }
      } else {
        this.redirect(target);
      }
    }
    static seeAWinner(node1, node2, node3) {
      const _node1 = document.querySelector(`.space${node1}`);
      const _node2 = document.querySelector(`.space${node2}`);
      const _node3 = document.querySelector(`.space${node3}`);
      if (_node1.style["background-image"] && _node2.style["background-image"] && _node3.style["background-image"]) {
        if (_node1.style["background-image"] === _node2.style["background-image"] && _node2.style["background-image"] === _node3.style["background-image"]) {
          const game = TicTacToe_default.getInstance();
          const player = Turn_default.defineTurn(game);
          Cases_default.win(player, game);
          return true;
        }
      }
    }
    static redirect(target) {
      const number = parseInt(target.classList.toString().split(" ")[1].replace("space", ""));
      if (number === 1 || number === 4 || number === 7) {
        const someWin = this.seeAWinner(number, number + 1, number + 2);
        if (someWin)
          return true;
      } else if (number === 3 || number === 6 || number === 9) {
        const someWin = this.seeAWinner(number, number - 1, number - 2);
        if (someWin)
          return true;
      }
      if (number === 1 || number === 2 || number === 3) {
        const someWin = this.seeAWinner(number, number + 3, number + 6);
        if (someWin)
          return true;
      } else if (number === 7 || number === 8 || number === 9) {
        const someWin = this.seeAWinner(number, number - 3, number - 6);
        if (someWin)
          return true;
      }
      if (number === 1) {
        const someWin = this.seeAWinner(number, number + 4, number + 8);
        if (someWin)
          return true;
      } else if (number === 5) {
        const someWin = this.seeAWinner(number, number - 4, number + 4);
        if (someWin)
          return true;
      } else if (number === 9) {
        const someWin = this.seeAWinner(number, number - 4, number - 8);
        if (someWin)
          return true;
      }
      if (number === 3) {
        const someWin = this.seeAWinner(number, number + 2, number + 4);
        if (someWin)
          return true;
      } else if (number === 5) {
        const someWin = this.seeAWinner(number, number - 2, number + 2);
        if (someWin)
          return true;
      } else if (number === 7) {
        const someWin = this.seeAWinner(number, number - 2, number - 4);
        if (someWin)
          return true;
      }
      const game = TicTacToe_default.getInstance();
      Turn_default.addTurn(game);
      return false;
    }
  };
  var Check_default = Check;

  // src/classes/Events.js
  var EventsHandler = class {
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
      const game = TicTacToe_default.getInstance();
      if (event.type === "click" || event.key === "Enter") {
        const hasImage = addSymbol_default(event.target, game);
        if (!hasImage) {
          Check_default.check(event.target, game);
        }
      }
    }
  };
  var Events_default = EventsHandler;

  // src/index.js
  var container = document.querySelector(".playground__container");
  Events_default.addListeners({element: container, type: "click"}, {element: container, type: "keydown"});
})();
