const dateNow = document.querySelector(".date span");
const timeNow = document.querySelector(".time span:first-child");
const period = document.getElementById("period");

const dayArr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const monthArr = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const today = String(date.getDate()).padStart(2, "0");
  const days = date.getDay();

  if (hours == 0) {
    hours = 12;
  }
  if (hours > 12) {
    hours -= 12;
    period = "PM";
  }

  dateNow.innerText = `${dayArr[days]}, ${
    monthArr[month - 1]
  } ${today}, ${year}`;
  timeNow.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
