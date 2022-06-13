setInterval(() => {
  let hours = document.getElementById("hours");
  let seconds = document.getElementById("seconds");
  let ampm = document.getElementById("ampm");
  let minutes = document.getElementById("minutes");

  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let h = new Date().getHours();

  let am = h >= 12 ? "PM" : "AM";

  // convert 24hr clock to 12hr clock
  if (h > 12) {
    h = h - 12;
  }
  // Add zero before single digit
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
  ampm.innerHTML = am;
});
