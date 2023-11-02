let avaibleCards = [1,2,3];
let playerCard = null;
let enemyCard = null;
let battleResult = null;

function updateCardsView() {
  const playerCardElement = document.querySelector('#field-card-player');
  const enemyCardElement = document.querySelector('#field-card-enemy');

  playerCardElement.src = `/src/assets/icons/${playerCard}.png`;
  enemyCardElement.src = `/src/assets/icons/${enemyCard}.png`;

  const battleResultElement = document.querySelector('#battle-result');

  if (battleResultElement === 'win') {
    battleResultElement.textContent = "você venceu";
  } else if (battleResultElement === 'lose') {
    battleResultElement.textContent = "você perdeu";
  } else if (battleResultElement === 'draw') {
    battleResultElement.textContent = "empate";
  } else {
    battleResultElement.textContent = '';
  }
}

function handleBattleButtonClick() {
  const randomIdex = Math.floor(Math.random() * avaibleCards.length);
  enemyCard = avaibleCards[randomIdex];

  if (playerCard === enemyCard) {
    battleResult = 'draw';
  } else if (
    (playerCard === 1 && enemyCard === 3) ||
    (playerCard === 2 && enemyCard === 1) ||
    (playerCard === 3 && enemyCard === 2)
  ) {
    battleResult = 'win';
  } else {
    battleResult = 'lose';
  }

  updateCardsView();
}

function addPlayerCardClickEvent() {
  const playerCards = document.querySelector('.cardsPlayer');
  playerCards.forEach(card => {
    card.addEventListener('click', () => {
      handlePlayerCardClick(card.textContent);
    })
  })
}


function addBattleButtonClickEvent() {
  const battleButton = document.querySelector('#battleButton');
  battleButton.addEventListener('click', handleBattleButtonClick);
}

function init () {
  updateCardsView();
  addPlayerCardClickEvent();
  addBattleButtonClickEvent();
}

init ();