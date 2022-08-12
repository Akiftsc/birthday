const giftbox = document.querySelector(".cont");
const section = document.querySelector(".wrap");
const konfeti1 = document.getElementById("konfeti1");
const konfeti2 = document.getElementById("konfeti2");

giftbox.addEventListener("click", () => giftopen());

function giftopen() {
  giftbox.classList.add("clicked");
  document.querySelector(".clicked").addEventListener("click", () => {
    document.querySelector(".gift").classList.add("hide");
    setTimeout(() => {
      document.querySelector(".gift").remove();
      stage2();
    }, 800);
  });
}

function stage2() {
  konfeti();
  konfeti1.style.display = "block";
  konfeti2.style.display = "block";
  konfeti1.style.opacity = "1";
  konfeti2.style.opacity = "1";
  setTimeout(() => {
    konfeti1.style.display = "none";
    konfeti2.style.display = "none";
    konfeti1.classList.add("hide");
    konfeti2.classList.add("hide");
    document.querySelector("canvas").classList.add("hide");
    setTimeout(() => {
      konfeti1.remove();
      konfeti2.remove();
      document.querySelector("canvas").remove();
    }, 3000);
  }, 12000);

  stage3();
}

function konfeti() {
  //! değiştir
  var end = Date.now() + 20 * 1000;

  var colors = ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"];

  function frame() {
    confetti({
      particleCount: 4,
      angle: 60,
      spread: 60,
      origin: { x: 0, y: 1 },
      colors: colors,
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 60,
      origin: { x: 1, y: 1 },
      colors: colors,
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  }
  frame();
}

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

function stage3() {
  const img = document.createElement("img");
  const center = document.createElement("center");
  const text = document.createElement("h1");
  img.src = "partying.png";
  img.classList = "img-fluid partying hide";
  text.classList = "text";
  text.textContent = "İyi ki doğdun!";
  section.appendChild(center);
  center.appendChild(img);
  center.appendChild(text);
  img.classList.add("fadein");
  document.querySelector(".cont").addEventListener("click", stage4);
}

function stage4() {
  const myNode = section;
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
  }
  const text = document.createElement("h1");
  text.textContent = "Akif'ten ";
  text.classList.add("anim");
  section.appendChild(text);
}
