/**
 * Выполняй это задание в файлах 02-timer.html и 02-timer.js. Напиши скрипт таймера, 
 * который ведёт обратный отсчет до определенной даты. 
 * Такой таймер может использоваться в блогах и интернет-магазинах, 
 * страницах регистрации событий, во время технического обслуживания и т. д. 
 * Посмотри демо видео работы таймера.


 */

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const startBtn = document.querySelector('[data-start]');
const inputEl = document.querySelector('#datetime-picker');
const d = document.querySelector('[data-days]');
const h = document.querySelector('[data-hours]');
const min = document.querySelector('[data-minutes]');
const sec = document.querySelector('[data-seconds]');

startBtn.setAttribute('disabled', true);
let selectDate = 0;
let timerId;

const options = {
  enableTime: true,
  time_24hr: true,
  // defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectDate = new Date(selectedDates[0]).getTime();
    checkDate(selectDate);
  },
};

flatpickr(inputEl, options);

startBtn.addEventListener('click', () => {
  startBtn.setAttribute('disabled', true);

  timerId = setInterval(() => {
    const currentDateValue = currentDate();
    let raznica = selectDate - currentDateValue;
    const { days, hours, minutes, seconds } = convertMs(raznica);
    d.textContent = pad(`${days}`);
    h.textContent = pad(`${hours}`);
    min.textContent = pad(`${minutes}`);
    sec.textContent = pad(`${seconds}`);
    if (seconds === 0 && minutes === 0 && hours === 0 && days === 0) {
      clearInterval(timerId);
    }
  }, 1000);
});

function currentDate() {
  return new Date().getTime();
}

function checkDate(valueDate) {
  const currentDateValue = currentDate();
  if (currentDateValue > valueDate) {
    Notify.failure('Please choose a date in the future');
    inputEl.style.borderColor = '#f71212';
    startBtn.setAttribute('disabled', true);
    return;
  } else {
    Notify.success('Timer can be started');
    startBtn.removeAttribute('disabled');
    inputEl.style.borderColor = '#32c682';
    return;
  }
}

function pad(param) {
  return String(param).padStart(2, 0);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
