// todo vísa í rétta hluti með import

import question from './question';
import { empty, el } from './helpers';
import Highscore, { score } from './highscore';

// allar breytur hér eru aðeins sýnilegar innan þessa módúl

let startButton = document.querySelector('.start'); // takki sem byrjar leik
let problem = document.querySelector('.problem'); // element sem heldur utan um verkefni, sjá index.html
let result = document.querySelector('.result'); // element sem heldur utan um niðurstöðu, sjá index.html

let playTime; // hversu lengi á að spila? Sent inn gegnum init()
let total = 0; // fjöldi spurninga í núverandi leik
let correct = 0; // fjöldi réttra svara í núverandi leik
let points = 0;
let currentProblem; // spurning sem er verið að sýna

/**
 * Klárar leik. Birtir result og felur problem. Reiknar stig og birtir í result.
 */
function finish() {
  points = score(total, correct, playTime);
  const text = `Þú svaraðir ${correct} rétt af ${total} spurningum og fékkst ${points} stig fyrir. Skráðu þig á stigatöfluna!`;
  const container = document.querySelector('.result__text');
  container.appendChild(document.createTextNode(text));
  // todo útfæra
  result.classList.remove('result--hidden');
  problem.classList.add('problem--hidden');
}

/**
 * Keyrir áfram leikinn. Telur niður eftir því hve langur leikur er og þegar
 * tími er búinn kallar í finish().
 *
 * Í staðinn fyrir að nota setInterval köllum við í setTimeout á sekúndu fresti.
 * Þurfum þá ekki að halda utan um id á intervali og skilum falli sem lokar
 * yfir fjölda sekúnda sem eftir er.
 *
 * @param {number} current Sekúndur eftir
 */
function tick(current) {
  // todo uppfæra tíma á síðu
  const container = document.querySelector('.problem__timer');
  empty(container);
  container.appendChild(document.createTextNode(current));

  if (current <= 0) {
    return finish();
  }

  return () => {
    setTimeout(tick(current - 1), 1000);
  };
}

/**
 * Býr til nýja spurningu og sýnir undir .problem__question
 */
function showQuestion() {
  // todo útfæra
  currentProblem = question();
  console.log(currentProblem);
  const container = document.querySelector('.problem__question');
  container.appendChild(document.createTextNode(currentProblem.problem));
  total++;
  console.log(`total = ${total} and correct = ${correct}`);
}

const button = document.querySelector('.start');

button.addEventListener('click', start);

/**
 * Byrjar leik
 *
 * V Felur startButton og sýnir problem
 * V Núllstillir total og correct
 * V Kallar í fyrsta sinn í tick()
 * V Sýnir fyrstu spurningu
 */
function start() {
  // todo útfæra
  total = 0;
  correct = 0;
  empty(document.querySelector('.problem__question'));
  empty(document.querySelector('.result__text'));
  document.querySelector('.problem__input').value = '';
  document.querySelector('.result__input').value = '';
  startButton.classList.add('button--hidden');
  problem.classList.remove('problem--hidden');
  setTimeout(tick(playTime), 1000);
  showQuestion();
}

problem.addEventListener('submit', onSubmit);

/**
 * Event handler fyrir það þegar spurningu er svarað. Athugar hvort svar sé
 * rétt, hreinsar input og birtir nýja spurningu.
 *
 * @param {object} e Event þegar spurningu svarað
 */
function onSubmit(e) {
  e.preventDefault();

  // todo útfæra
  const container = document.querySelector('.problem__question');
  const input = document.querySelector('.problem__input').value;
  console.log(input);
  if (parseInt(input, 10) === currentProblem.answer) correct++;
  empty(container);
  showQuestion();
  document.querySelector('.problem__input').value = '';
}

result.addEventListener('submit', onSubmitScore);

/**
 * Event handler fyrir þegar stig eru skráð eftir leik.
 *
 * @param {*} e Event þegar stig eru skráð
 */
function onSubmitScore(e) {
  e.preventDefault();

  // todo útfæra
  const container = document.querySelector('.highscore__scores');
  const p = document.querySelector('.highscore__scores p');
  console.log(p);
  const name = document.querySelector('.result__input').value;
  const text = `${points} stig `;
  console.log(name);
  const ol = el('ol');
  const li = el('li');
  const span = el('span');
  span.appendChild(document.createTextNode(name));
  li.appendChild(document.createTextNode(text));
  li.appendChild(span);
  ol.appendChild(li);
  container.appendChild(ol);
  empty(p);
  console.log(ol);
  console.log(window.localStorage);

  result.classList.add('result--hidden');
  problem.classList.add('problem--hidden');
  startButton.classList.remove('button--hidden');
}

/**
 * Finnur öll element DOM og setur upp event handlers.
 *
 * @param {number} _playTime Fjöldi sekúnda sem hver leikur er
 */
export default function init(_playTime) {
  playTime = _playTime;

  // todo útfæra
}
