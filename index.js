

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const body = document.querySelector('body');
const buttonStart = document.querySelector('[data-action="start"]');
const buttonStop = document.querySelector('[data-action="stop"]');

let timer = null;

buttonStart.onclick = function() {
  buttonStart.disabled = true;
  buttonStart.classList.remove('button_1');
  buttonStart.classList.add('button');
  timer = setInterval(() => {
    document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)]}, 1000); 
}

buttonStop.onclick = function() {
  buttonStart.disabled = false;
  buttonStart.classList.add('button_1');
  clearInterval(timer);
}


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};



