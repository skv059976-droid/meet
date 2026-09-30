let currentScreen = 1;
const totalScreens = 5;

function nextScreen() {
  const current = document.getElementById(`screen${currentScreen}`);
  current.classList.remove("active");

  currentScreen++;
  const next = document.getElementById(`screen${currentScreen}`);
  next.classList.add("active");

  if (currentScreen === 5) {
    startHearts();
  }
}

function finalSurprise() {
  const message = document.getElementById("finalMessage");
  message.textContent = "Then it's a date... just you, me & one beautiful memory. 🫶💜";
  startHearts(true);
}

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "floating-heart";
  heart.textContent = Math.random() > 0.5 ? "💜" : "💙";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (3 + Math.random() * 3) + "s";
  heart.style.fontSize = (14 + Math.random() * 18) + "px";

  document.getElementById("hearts").appendChild(heart);

  setTimeout(() => heart.remove(), 6500);
}

function startHearts(many = false) {
  const count = many ? 35 : 12;
  for (let i = 0; i < count; i++) {
    setTimeout(createHeart, i * 120);
  }
}

setInterval(() => {
  if (currentScreen === 5) createHeart();
}, 1200);
