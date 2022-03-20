const hours = document.querySelector("#hour");
const minutes = document.querySelector("#minute");
const seconds = document.querySelector("#second");



function getClock() {
  const date = new Date();
  hours.innerHTML = String(date.getHours()).padStart(2, "0");
  minutes.innerHTML = String(date.getMinutes()).padStart(2, "0");
  seconds.innerHTML = String(date.getSeconds()).padStart(2, "0");
}

getClock();
setInterval(getClock, 1000);
