const body = document.body;
const themeButtons = document.querySelectorAll("[data-theme-choice]");
themeButtons.forEach(button => button.addEventListener("click", () => {
  body.dataset.theme = button.dataset.themeChoice;
  themeButtons.forEach(item => item.classList.toggle("active", item === button));
}));

const photoModal = document.getElementById("photoModal");
const modalImage = document.getElementById("modalImage");
document.querySelectorAll(".memory").forEach(card => card.addEventListener("click", () => {
  modalImage.src = card.dataset.full;
  photoModal.classList.add("open");
  photoModal.setAttribute("aria-hidden", "false");
}));
function closePhoto() {
  photoModal.classList.remove("open");
  photoModal.setAttribute("aria-hidden", "true");
  modalImage.src = "";
}
document.getElementById("modalClose").addEventListener("click", closePhoto);
photoModal.addEventListener("click", event => { if (event.target === photoModal) closePhoto(); });

const surprise = document.getElementById("surpriseOverlay");
function openSurprise() {
  surprise.classList.add("open");
  surprise.setAttribute("aria-hidden", "false");
  launchHearts(16);
}
function closeSurprise() {
  surprise.classList.remove("open");
  surprise.setAttribute("aria-hidden", "true");
}
document.getElementById("surpriseBtn").addEventListener("click", openSurprise);
document.getElementById("surpriseClose").addEventListener("click", closeSurprise);
document.getElementById("closeSurprise").addEventListener("click", closeSurprise);
surprise.addEventListener("click", event => { if (event.target === surprise) closeSurprise(); });

document.getElementById("wishBtn").addEventListener("click", () => {
  const reveal = document.getElementById("wishReveal");
  reveal.hidden = !reveal.hidden;
  if (!reveal.hidden) launchHearts(10);
});

function launchHearts(count) {
  const container = document.querySelector(".floating-hearts");
  for (let i = 0; i < count; i++) {
    const heart = document.createElement("span");
    heart.textContent = ["♡", "♥", "✦", "✧"][Math.floor(Math.random() * 4)];
    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = (12 + Math.random() * 22) + "px";
    heart.style.animationDelay = (Math.random() * 1.5) + "s";
    heart.style.animationDuration = (5 + Math.random() * 5) + "s";
    container.appendChild(heart);
    setTimeout(() => heart.remove(), 11000);
  }
}
document.addEventListener("keydown", event => {
  if (event.key === "Escape") { closePhoto(); closeSurprise(); }
});
