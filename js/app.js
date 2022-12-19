let lin = document.querySelectorAll(".line");
let car = document.querySelector(".car");
function keybord(e) {
  if (e.key === "ArrowRight") {
    car.classList.add("chap");
    car.classList.remove("ung");
  }
  if (e.key === "ArrowLeft") {
    car.classList.add("ung");
    car.classList.remove("chap");
  }
  if (e.key === "ArrowDown") {
    lin.forEach((div) => {
      // div.style.animationDelay  = "10s";
      div.classList.add("pas");
      div.classList.remove("tez");
    });
  }
  if (e.key === "ArrowUp") {
    lin.forEach((div) => {
      // div.style.animationDelay  = "10s";
      div.classList.add("tez");
      div.classList.remove("pas");
    });
    setInterval(() => {
      ++i;
      tablo.innerHTML = `${i}km`;
    }, 1000);
  }
  if (e.key === "Enter") {
    lin.forEach((div) => {
      div.classList.add("pas");
    });
    none.style.display = "none";
    setInterval(() => {
      ++i;
      tablo.innerHTML = `${i}km/soat`;
    }, 1000);
  }
}

let tablo = document.querySelector(".teble");
i = 0;

let but = document.querySelector(".btn");
let none = document.querySelector(".position-fixed");
but.addEventListener("click", function () {
  lin.forEach((div) => {
    div.classList.add("pas");
  });
  none.style.display = "none";
  setInterval(() => {
    ++i;
    tablo.innerHTML = `${i}km`;
  }, 3000);
});
document.addEventListener("keyup", keybord, false);
