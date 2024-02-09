import imgGoblin from '../img/goblin.png';

let currHoleGoblin;
let num = null;

function getRandomHole(prevNum) {
  const cell = Math.floor(Math.random() * 16).toString();
  if (prevNum === null || prevNum !== cell) {
    return cell;
  }
  return getRandomHole(cell);
}

function setGoblin() {
  if (currHoleGoblin) {
    currHoleGoblin.innerHTML = '';
  }
  const goblin = document.createElement('img');
  goblin.src = imgGoblin;

  num = getRandomHole(num);
  currHoleGoblin = document.getElementById(num);
  currHoleGoblin.appendChild(goblin);
}

function setGame() {
  for (let i = 0; i < 16; i += 1) {
    const hole = document.createElement('div');
    hole.id = i.toString();
    document.getElementById('game-board').appendChild(hole);
  }

  setInterval(setGoblin, 2000);
}

window.onload = () => {
  setGame();
};

export { getRandomHole };
