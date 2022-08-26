// В HTML есть разметка формы, в поля которой пользователь будет вводить первую задержку в
// миллисекундах, шаг увеличения задержки для каждого промиса после первого и количество
// промисов которое необходимо создать.

// Напиши скрипт, который при сабмите формы вызывает функцию createPromise(position, delay)
// столько раз, сколько ввели в поле amount.При каждом вызове передай ей номер создаваемого
// промиса(position) и задержку учитывая введенную пользователем первую задержку(delay) и
// шаг(step).

// Дополни код функции createPromise так, чтобы она возвращала один промис, который
// выполянется или отклоняется через delay времени.Значением промиса должен быть объект,
// в котором будут свойства position и delay со значениями одноименных параметров.
// Используй начальный код функции для выбора того, что нужно сделать с промисом -
// выполнить или отклонить.

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form');
let promisNumber;

formEl.addEventListener('submit', onFormSubmit);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onFormSubmit(evt) {
  evt.preventDefault();
  const { delay, step, amount } = evt.currentTarget.elements;
  let delayFirst = Number(delay.value);
  const stepDelay = Number(step.value);
  const amountNumber = Number(amount.value);

  for (promisNumber = 1; promisNumber <= amountNumber; promisNumber += 1) {
    createPromise(promisNumber, delayFirst)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });

    delayFirst += stepDelay;
  }
}
