import './style.css'

// Obtener los elementos del DOM
const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorsBtn = document.getElementById('scissors-btn');
const resultDiv = document.getElementById('result');

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
  } else {
    resultDiv.innerHTML += "<br>¡Perdiste!";
  }
}

// Asignar eventos a los botones
rockBtn.addEventListener('click', () => playGame('Piedra.'));
paperBtn.addEventListener('click', () => playGame('Papel.'));
scissorsBtn.addEventListener('click', () => playGame('Tijera.'));

// Aplicar estilos al texto
resultDiv.style.color = 'white';