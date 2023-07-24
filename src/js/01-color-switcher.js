const startBtnEl = document.querySelector('[data-start]');
const stopBtnEl = document.querySelector('[data-stop]');
stopBtnEl.disabled = true;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

startBtnEl.addEventListener('click', onStartBtnClick);
stopBtnEl.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
  startBtnEl.disabled = true;
  stopBtnEl.disabled = false;

  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onStopBtnClick() {
  clearInterval(intervalId);
  startBtnEl.disabled = false;
  stopBtnEl.disabled = true;
}
