import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  dateTimePicker: document.querySelector('#datetime-picker'),
  startBtnEl: document.querySelector('[data-start]'),
  daysValue: document.querySelector('[data-days]'),
  hoursValue: document.querySelector('[data-hours]'),
  minutesValue: document.querySelector('[data-minutes]'),
  secondsValue: document.querySelector('[data-seconds]'),
};

let intervalId;
let targetDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    targetDate = selectedDates[0];

    if (targetDate.getTime() <= new Date().getTime()) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      Notiflix.Notify.success('The date has been successfully selected');
      refs.startBtnEl = false;
    }
  },
};

flatpickr(refs.dateTimePicker, options);

function updateTimer() {
  const now = new Date();
  const timeLeft = targetDate.getTime() - now.getTime();

  if (timeLeft <= 0) {
    clearInterval(intervalId);
    refs.daysValue.textContent = '00';
    refs.hoursValue.textContent = '00';
    refs.minutesValue.textContent = '00';
    refs.secondsValue.textContent = '00';

    refs.startBtnEl.disabled = true;
    return;
  }

  const { days, hours, minutes, seconds } = convertMs(timeLeft);
  refs.daysValue.textContent = addLeadingZero(days);
  refs.hoursValue.textContent = addLeadingZero(hours);
  refs.minutesValue.textContent = addLeadingZero(minutes);
  refs.secondsValue.textContent = addLeadingZero(seconds);
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

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

refs.startBtnEl.addEventListener(
  'click',
  () => (intervalId = setInterval(updateTimer, 1000))
);
