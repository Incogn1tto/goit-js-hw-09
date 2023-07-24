https://incogn1tto.github.io/goit-js-hw-09/

# Completed Tasks

This project comprises a series of tasks aimed at reinforcing the material on
working with timers and promises in JavaScript. To simplify the task-solving
process, two libraries, [flatpickr](https://flatpickr.js.org/) and
[notiflix](https://github.com/notiflix/Notiflix#readme), were utilized. The
project was built using a parcel bundler.

## Installation

1. Clone the repository on your local computer:

`git clone https://github.com/your-username/goit-js-hw-08.git`

2. Navigate to the project directory: `cd goit-js-hw-08`

3. Install dependencies: `npm install`

## Task 1: Interval-Based Background Color Change

In the first task, the following functionality was implemented: after clicking
the `Start` button, the background color changes randomly every second using
inline styles. Clicking the `Stop` button halts the color change. While the
background color is changing, the `Start` button remains in a disabled state. To
implement this functionality, the `setInterval()` method was used.

## Task 2: Countdown Timer

In the second task, the JavaScript code for a countdown timer is presented. The
following methods and libraries were used:

- `flatpickr`: This library is used to work with date and time selection. It
  allows creating a visual calendar for choosing dates and times with various
  settings. In this project, `flatpickr` is used to select the target date for
  the countdown.

- `Notiflix`: This library is used to create beautiful notifications on a web
  page. In the project, `Notiflix` is used to display notifications about a
  successful date selection and a requirement to choose a future date.

- `setInterval()`: The method used to call the `updateTimer()` function every
  second to update the timer value.

- `convertMs(ms)`: A function used to convert time from milliseconds to an
  object containing days, hours, minutes, and seconds.

- `addLeadingZero(value)`: A function that adds a leading zero to a number if it
  consists of a single digit.

## Task 3: Promise Generator

In the third task, a script was implemented that, at the moment of form
submission, calls the `createPromise(position, delay)` function the number of
times equal to the value entered by the user in the "amount" field. During each
call, the function is passed the number of the created promise (`position`), the
delay (taking into account the initial delay entered by the user), and the step
(`step`).

In this task, the following methods and libraries were used:

`Notiflix`: This library is used to create notifications on a web page. In this
project, `Notiflix` is used to display success and failure messages for the
generated promises.

`createPromise(position, delay)`: A function that generates a promise with the
specified delay (`delay`) and number (`position`). The function creates a
promise that resolves or rejects randomly (70% chance to resolve). The delay is
set using `setTimeout()`.

`form.addEventListener('submit', e => {...})`: An event listener for the form
submission. This function handles the form data, including the initial delay,
step, and amount of promises to generate. It then iterates through the specified
number of promises and displays success or failure notifications using
`Notiflix`.

## Conclusion

This project presents a set of tasks aimed at reinforcing the skills of working
with timers and promises in JavaScript. The `flatpickr` and `notiflix` libraries
are used in the project, along with standard JavaScript methods and functions.
Each task has its own specific features and objectives, allowing for a better
understanding and consolidation of the material covered.
