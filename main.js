import './style.css';

function injectContent() {
  const header = document.querySelector('header');
  const main = document.querySelector('main');

  // Crear elementos y establecer sus atributos y contenido
  const h1 = document.createElement('h1');
  h1.classList.add('banner');
  const img = document.createElement('img');
  img.src = 'public/images/banner.png';
  img.alt = 'banner image';
  h1.appendChild(img);
  header.appendChild(h1);

  const audio = document.createElement('audio');
  audio.id = 'background-music';
  audio.src = 'public/music/OSTAlexKidd.mp3';
  header.appendChild(audio);

  const musicToggleBtn = document.createElement('button');
  musicToggleBtn.id = 'music-toggle';
  const musicToggleImg = document.createElement('img');
  musicToggleImg.src = 'public/icons/musicOff.png';
  musicToggleImg.alt = 'Music on/off';
  musicToggleBtn.appendChild(musicToggleImg);
  header.appendChild(musicToggleBtn);

  const scoreDiv = document.createElement('div');
  scoreDiv.classList.add('score');
  header.appendChild(scoreDiv);

  const playerScoreH3 = document.createElement('h3');
  playerScoreH3.classList.add('playerscore');
  playerScoreH3.textContent = 'Alex: ';
  const playerScoreSpan = document.createElement('span');
  playerScoreSpan.id = 'player-score';
  playerScoreSpan.textContent = '0';
  playerScoreH3.appendChild(playerScoreSpan);
  header.appendChild(playerScoreH3);

  const opponentScoreH3 = document.createElement('h3');
  opponentScoreH3.classList.add('opponentscore');
  opponentScoreH3.textContent = 'Gooseka: ';
  const opponentScoreSpan = document.createElement('span');
  opponentScoreSpan.id = 'opponent-score';
  opponentScoreSpan.textContent = '0';
  opponentScoreH3.appendChild(opponentScoreSpan);
  header.appendChild(opponentScoreH3);

  const h2 = document.createElement('h2');
  h2.textContent = 'Elige piedra, papel o tijera';
  main.appendChild(h2);

  const gameContainerDiv = document.createElement('div');
  gameContainerDiv.id = 'game-container';
  main.appendChild(gameContainerDiv);

  const playerChoiceDiv = document.createElement('div');
  playerChoiceDiv.id = 'player-choice';
  gameContainerDiv.appendChild(playerChoiceDiv);

  const rockBtn = document.createElement('button');
  rockBtn.id = 'rock-btn';
  const rockImg = document.createElement('img');
  rockImg.src = 'public/icons/rock.png';
  rockImg.alt = 'Piedra';
  rockBtn.appendChild(rockImg);
  playerChoiceDiv.appendChild(rockBtn);

  const paperBtn = document.createElement('button');
  paperBtn.id = 'paper-btn';
  const paperImg = document.createElement('img');
  paperImg.src = 'public/icons/paper.png';
  paperImg.alt = 'Papel';
  paperBtn.appendChild(paperImg);
  playerChoiceDiv.appendChild(paperBtn);

  const scissorsBtn = document.createElement('button');
  scissorsBtn.id = 'scissors-btn';
  const scissorsImg = document.createElement('img');
  scissorsImg.src = 'public/icons/scissors.png';
  scissorsImg.alt = 'Tijera';
  scissorsBtn.appendChild(scissorsImg);
  playerChoiceDiv.appendChild(scissorsBtn);

  const charactersDiv = document.createElement('div');
  charactersDiv.classList.add('characters');
  main.appendChild(charactersDiv);

  const alexKiddImg = document.createElement('img');
  alexKiddImg.id = 'Alex-Kidd';
  alexKiddImg.src = 'public/images/Alex.png';
  alexKiddImg.alt = 'Alex image';
  charactersDiv.appendChild(alexKiddImg);

  const resultDiv = document.createElement('div');
  resultDiv.id = 'result';
  charactersDiv.appendChild(resultDiv);

  const goosekaImg = document.createElement('img');
  goosekaImg.id = 'Gooseka';
  goosekaImg.src = 'public/images/Gooseka.png';
  goosekaImg.alt = 'Gooseka image';
  charactersDiv.appendChild(goosekaImg);
}

function getRandomChoice() {
  const choices = ['Piedra.', 'Papel.', 'Tijera.'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playGame(playerChoice) {
  const opponentChoice = getRandomChoice();

  const resultDiv = document.getElementById('result');
  const playerScoreSpan = document.getElementById('player-score');
  const opponentScoreSpan = document.getElementById('opponent-score');
  const alexKiddImg = document.getElementById('Alex-Kidd');
  const goosekaImg = document.getElementById('Gooseka');

  resultDiv.innerHTML = `
    Elegiste: ${playerChoice}<br>
    Gooseka eligió: ${opponentChoice}
  `;

  if (playerChoice === opponentChoice) {
    resultDiv.innerHTML += "<br>¡Empate!";
  } else if (
    (playerChoice === "Piedra." && opponentChoice === "Tijera.") ||
    (playerChoice === "Papel." && opponentChoice === "Piedra.") ||
    (playerChoice === "Tijera." && opponentChoice === "Papel.")
  ) {
    resultDiv.innerHTML += "<br>¡Ganaste!";
    playerScoreSpan.textContent = String(Number(playerScoreSpan.textContent) + 1);
  } else {
    resultDiv.innerHTML += "<br>¡Perdiste!";
    opponentScoreSpan.textContent = String(Number(opponentScoreSpan.textContent) + 1);
  }

  if (playerChoice === "Piedra.") {
    alexKiddImg.src = "public/images/Alex-rock.png";
  } else if (playerChoice === "Papel.") {
    alexKiddImg.src = "public/images/Alex-paper.png";
  } else if (playerChoice === "Tijera.") {
    alexKiddImg.src = "public/images/Alex-scissors.png";
  }

  if (opponentChoice === "Piedra.") {
    goosekaImg.src = "public/images/Gooseka-rock.png";
  } else if (opponentChoice === "Papel.") {
    goosekaImg.src = "public/images/Gooseka-paper.png";
  } else if (opponentChoice === "Tijera.") {
    goosekaImg.src = "public/images/Gooseka-scissors.png";
  }
}

function setupGame() {
  const rockBtn = document.getElementById('rock-btn');
  const paperBtn = document.getElementById('paper-btn');
  const scissorsBtn = document.getElementById('scissors-btn');

  rockBtn.addEventListener('click', () => playGame('Piedra.'));
  paperBtn.addEventListener('click', () => playGame('Papel.'));
  scissorsBtn.addEventListener('click', () => playGame('Tijera.'));
}

function setupMusic() {
  const musicToggleBtn = document.getElementById('music-toggle');
  const backgroundMusic = document.getElementById('background-music');

  musicToggleBtn.addEventListener('click', () => {
    if (backgroundMusic.paused) {
      backgroundMusic.play();
      musicToggleBtn.innerHTML = '<img src="public/icons/musicOn.png" alt="Music on" />';
    } else {
      backgroundMusic.pause();
      musicToggleBtn.innerHTML = '<img src="public/icons/musicOff.png" alt="Music off" />';
    }
  });

  backgroundMusic.addEventListener('ended', () => {
    backgroundMusic.play();
  });
}

injectContent();
setupGame();
setupMusic();