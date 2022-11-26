let getName = prompt("Isim giriniz: ");
if (!getName) {
  getName = "Patika.dev";
}

let userName = document.getElementById("user");
userName.innerHTML = getName;

let getClock = document.getElementById("get-clock");
// Gunler
const DAYS = [
  "Pazartesi",
  "Sali",
  "Carsamba",
  "Persembe",
  "Cuma",
  "Cumartesi",
  "Pazar",
];

function clock() {

  const TODAY = new Date();
  const TODAY_NAME = TODAY.getDay();
  // time
  const HOURS = twoDigits(TODAY.getHours());
  const MINUTES = twoDigits(TODAY.getMinutes());
  const SECONDS = twoDigits(TODAY.getSeconds());

  let time = `${HOURS}:${MINUTES}:${SECONDS} ${DAYS[TODAY_NAME - 1]} `;

  getClock.innerHTML = time;

  setTimeout(clock, 1000);
}

function twoDigits(date) {
  return (date < 10 ? "0" : "") + date;
}

clock();