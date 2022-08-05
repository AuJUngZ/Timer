const TimeCounter = document.querySelector("#time-counter");
const Timer = document.querySelector("#timer");
const divTimeCounter = document.querySelector("#Ctn-Time-counter");
const divTimer = document.querySelector("#Ctn-timer");
const Cancel = document.querySelector("#Refactor");
const InputTime = document.querySelector("#input-Time-Counter");
const StartTimeCounter = document.querySelector("#Strat-Time-Counter");
const StartTimer = document.querySelector("#Strat-Timer");
const time = document.querySelector("#time-number");
const stopwatch = document.querySelector("#cancel");
const inputTimer = document.querySelector("#input");

divTimeCounter.style.display = "none";
divTimer.style.display = "none";

TimeCounter.onclick = () => {
  divTimer.style.display = "none";
  divTimeCounter.style.display = "";
};

Timer.onclick = () => {
  divTimeCounter.style.display = "none";
  divTimer.style.display = "";
};

Cancel.onclick = () => {
  divTimeCounter.style.display = "none";
  divTimer.style.display = "none";
};

StartTimeCounter.onclick = () => {
  let inputTime = InputTime.value;
  let seconds = inputTime * 60;
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let remainingSeconds = seconds % 60;
  let remainingMinutes = minutes % 60;
  let remainingHours = hours % 60;
  time.innerHTML =
    remainingHours + " : " + remainingMinutes + " : " + remainingSeconds;
  //start timer
  let interval = setInterval(() => {
    seconds--;
    minutes = Math.floor(seconds / 60);
    hours = Math.floor(minutes / 60);
    remainingSeconds = seconds % 60;
    remainingMinutes = minutes % 60;
    remainingHours = hours % 60;
    time.innerHTML =
      remainingHours + " : " + remainingMinutes + " : " + remainingSeconds;
    if (seconds <= 0) {
      clearInterval(interval);
      time.innerHTML = "00 : 00 : 00";
    }
  }, 1000);
  stopwatch.onclick = () => {
    clearInterval(interval);
    time.innerHTML = "00:00:00";
    InputTime.value = "";
    inputTimer.value = "";
  };
};
