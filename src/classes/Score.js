class Score {
  static updateScore(score1, score2) {
    const score = document.querySelector('.score');
    score.innerHTML = `
      <p class='score'>
      ${score1}
        <span class='score__into'>-</span>
      ${score2}
      </p>
    `;
  }
}

export default Score;
