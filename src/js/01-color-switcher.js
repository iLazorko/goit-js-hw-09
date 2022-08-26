/**
 * 
 * Напиши скрипт, который после нажатия кнопки «Start», раз в секунду меняет цвет фона 
 * <body> на случайное значение используя инлайн стиль. При нажатии на кнопку «Stop», 
 * изменение цвета фона должно останавливаться.

ВНИМАНИЕ
Учти, на кнопку «Start» можно нажать бесконечное количество раз. 
Сделай так, чтобы пока изменение темы запушено, кнопка «Start» была не активна (disabled).
}
 */

const refs = {
  btnStart: document.querySelector('[data-start]'),
  btnStop: document.querySelector('[data-stop]'),
  bodyEl: document.querySelector('body'),
};

refs.btnStart.addEventListener('click', startChangeBodyColor);
refs.btnStop.addEventListener('click', stopChangeBodyColor);
refs.btnStop.setAttribute('disabled', true);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function startChangeBodyColor() {
  return (idTimer = setInterval(() => {
    refs.bodyEl.style.backgroundColor = getRandomHexColor();
    refs.btnStart.setAttribute('disabled', true);
    refs.btnStop.removeAttribute('disabled');
  }, 1000));
}

function stopChangeBodyColor() {
  clearInterval(idTimer);
  refs.btnStart.removeAttribute('disabled');
  refs.btnStop.setAttribute('disabled', true);
}
