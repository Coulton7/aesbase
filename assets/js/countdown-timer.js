/*
This script is an extension to the one written
by Mateusz Rybczonec on his CSS Tricks Blog

Blog Link: https://bit.ly/3nH3AhO

OG Pen Link : https://bit.ly/3fi7xXj
*/

const FULL_DASH_ARRAY = 283;
const RESET_DASH_ARRAY = `-57 ${FULL_DASH_ARRAY}`;

//All buttons
let startBtn = document.querySelector(".start");
let stopBtn = document.querySelector(".stop");
const mediaCarousel = document.querySelectorAll(".media-carousel-block");
let timer = document.querySelector("#base-timer-path-remaining");

const TIME_LIMIT = 10;
let timePassed = -1;
let timeLeft = TIME_LIMIT;
let timerInterval = null;

function reset() {
  clearInterval(timerInterval);
  resetVars();
  timer.setAttribute("stroke-dasharray", RESET_DASH_ARRAY);
}

function start(withReset = false) {
  setDisabled(startBtn);
  removeDisabled(stopBtn);
  if (withReset) {
    resetVars();
  }
  startTimer();
}

function stop() {
  setDisabled(stopBtn);
  removeDisabled(startBtn);
  clearInterval(timerInterval);
}

function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    setCircleDasharray();

    if (timeLeft === 0) {
      timeIsUp();
    }
  }, 1000);
}

window.addEventListener("DOMContentLoaded", () => {
  setDisabled(startBtn);
  startTimer();
});

for (let i=0; i<mediaCarousel.length; i++) {
  mediaCarousel[i].addEventListener("mouseleave", function(){
    setDisabled(startBtn);
    removeDisabled(stopBtn);
    startTimer();
  });

  mediaCarousel[i].addEventListener("mouseenter", function(){
    setDisabled(stopBtn);
    removeDisabled(startBtn);
    clearInterval(timerInterval);
  });
}

//---------------------------------------------
//HELPER METHODS
//---------------------------------------------
function setDisabled(button) {
  button.setAttribute("disabled", "disabled");
}

function removeDisabled(button) {
  button.removeAttribute("disabled");
}

function timeIsUp() {
  setDisabled(startBtn);
  removeDisabled(stopBtn);
  reset();
  startTimer();
  $('#carousel-fade').carousel('next');
}

function resetVars() {
  setDisabled(startBtn);
  timePassed = -1;
  timeLeft = TIME_LIMIT;
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  timer.setAttribute("stroke-dasharray", circleDasharray);
}
