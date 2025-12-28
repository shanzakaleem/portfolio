import "./style.css";

function updateClock() {
  document.querySelector("div.clock").textContent =
    new Date().toLocaleTimeString();
}

updateClock();

setInterval(updateClock, 1000);
