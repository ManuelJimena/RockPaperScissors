import './style.css';

// Obtener los elementos del DOM
const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorsBtn = document.getElementById('scissors-btn');
const resultDiv = document.getElementById('result');
const alexKiddImg = document.getElementById('Alex-Kidd');
const goosekaImg = document.getElementById('Gooseka');
const playerScoreSpan = document.getElementById('player-score');
const opponentScoreSpan = document.getElementById('opponent-score');

// Variables para el contador de victorias
let playerScore = 0;
let opponentScore = 0;

// Función para generar la elección del oponente de forma aleatoria
function getRandomChoice() {
  const choices = ['Piedra.', 'Papel.', 'Tijera.'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Función para determinar el resultado del juego
function playGame(playerChoice) {
  const opponentChoice = getRandomChoice();

  // Mostrar las elecciones del jugador y del oponente
  resultDiv.innerHTML = `
    Elegiste: ${playerChoice}<br>
    Gooseka eligió: ${opponentChoice}
  `;

  // Determinar el resultado del juego
  if (playerChoice === opponentChoice) {
    resultDiv.innerHTML += "<br>¡Empate!";
  } else if (
    (playerChoice === "Piedra." && opponentChoice === "Tijera.") ||
    (playerChoice === "Papel." && opponentChoice === "Piedra.") ||
    (playerChoice === "Tijera." && opponentChoice === "Papel.")
  ) {
    resultDiv.innerHTML += "<br>¡Ganaste!";
    playerScore++; // Incrementar el contador de victorias del jugador
    playerScoreSpan.textContent = playerScore; // Actualizar el elemento HTML del contador del jugador
  } else {
    resultDiv.innerHTML += "<br>¡Perdiste!";
    opponentScore++; // Incrementar el contador de victorias del oponente
    opponentScoreSpan.textContent = opponentScore; // Actualizar el elemento HTML del contador del oponente
  }

  // Cambiar la imagen de Alex-Kidd según la opción seleccionada
  if (playerChoice === "Piedra.") {
    alexKiddImg.src = "public/images/Alex-rock.png";
  } else if (playerChoice === "Papel.") {
    alexKiddImg.src = "public/images/Alex-paper.png";
  } else if (playerChoice === "Tijera.") {
    alexKiddImg.src = "public/images/Alex-scissors.png";
  }

  // Cambiar la imagen de Gooseka según la elección del oponente
  if (opponentChoice === "Piedra.") {
    goosekaImg.src = "public/images/Gooseka-rock.png";
  } else if (opponentChoice === "Papel.") {
    goosekaImg.src = "public/images/Gooseka-paper.png";
  } else if (opponentChoice === "Tijera.") {
    goosekaImg.src = "public/images/Gooseka-scissors.png";
  }
}

// Asignar eventos a los botones
rockBtn.addEventListener('click', () => playGame('Piedra.'));
paperBtn.addEventListener('click', () => playGame('Papel.'));
scissorsBtn.addEventListener('click', () => playGame('Tijera.'));

// Aplicar estilos al texto
resultDiv.style.color = 'white';
playerScoreSpan.style.color = 'white';
opponentScoreSpan.style.color = 'white';

// Aplicar música
const musicToggleBtn = document.getElementById('music-toggle');
const backgroundMusic = document.getElementById('background-music');

musicToggleBtn.addEventListener('click', () => {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
    musicToggleBtn.innerHTML = '<img src="public/icons/musicOn.png" alt="Msic on" />';
  } else {
    backgroundMusic.pause();
    musicToggleBtn.innerHTML = '<img src="public/icons/musicOff.png" alt="Music off" />';
  }
});

 // Vuelve a reproducir la música una vez que termine
backgroundMusic.addEventListener('ended', () => {
  backgroundMusic.play();
});