const inputtime = document.querySelector("#input-timer");
const start = document.querySelector("#Strat-Timer");
const stop = document.querySelector("#cancel-time");
const show = document.querySelector("#time-number-1");

start.onclick = () => {
  let input = inputtime.value;
  let seconds = 0;
  let remainseconds;
  let remainingMinutes;
  let remainingHours;

  let interval = setInterval(() => {
    seconds++;
    remainseconds = seconds % 60;
    remainingMinutes = Math.floor(seconds / 60);
    remainingHours = Math.floor(remainingMinutes / 60);
    show.innerHTML =
      remainingHours + " : " + remainingMinutes + " : " + remainseconds;
    if (seconds >= input * 60) {
      alert("Time is up");
      clearInterval(interval);
      show.innerHTML = "00:00:00";
    }
    stop.onclick = () => {
      clearInterval(interval);
      show.innerHTML = "00:00:00";
      inputtime.value = "";
    };
  }, 1000);
};
