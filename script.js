function updateTime() {
  const now = new Date();
  let sec = now.getSeconds();
  let hour = now.getHours();
  let min = now.getMinutes();
  const hours = document.querySelector(".text1");
  const seconds = document.querySelector(".text3");
  const minutes = document.querySelector(".text2");
  let unit = document.querySelector(".unit");

  let temp;
  if (hour >= 12 && hour <= 24) {
    temp = "P.M.";
  } else {
    temp = "A.M.";
  }

  hour %= 12;
  if (hour == 0) {
    hour = 12;
  }
  let pad = (num) => num.toString().padStart(2, "0");

  hours.textContent = pad(hour);
  minutes.textContent = pad(min);
  seconds.textContent = pad(sec);

  unit.textContent = temp;
}

setInterval(updateTime, 1000);
updateTime();
