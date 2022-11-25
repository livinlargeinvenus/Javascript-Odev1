let getName = prompt("Isim giriniz: ");
if (!getName) {
  getName = "Patika.dev";
}

window.addEventListener("load", () => {
  let getClock = document.getElementById("get-clock");
  // Gunler
  dayName = [
    "Pazartesi",
    "Sali",
    "Carsamba",
    "Persembe",
    "Cuma",
    "Cumartesi",
    "Pazar",
  ];

  clock();

  let userName = document.getElementById("user");
  userName.innerHTML = getName;

  function clock() {
    const TODAY = new Date();
    const TODAY_NAME = TODAY.getDay();
    // time
    const HOURS = TODAY.getHours();
    const MINUTES = TODAY.getMinutes();
    const SECONDS = TODAY.getSeconds();

    let time = `${HOURS}:${MINUTES}:${SECONDS} ${dayName[TODAY_NAME - 1]}`;

    getClock.innerHTML = time;
    setTimeout(clock, 1000);
  }
});
