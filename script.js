const levelDisplay = document.getElementById("levelDisplay");
const modeBanner = document.getElementById("modeBanner");
const modeTitle = document.getElementById("modeTitle");
const modeSub = document.getElementById("modeSub");

const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const stopBtn = document.getElementById("stopBtn");

let level = 0;
const MIN_LEVEL = 0;
const MAX_LEVEL = 12;
const ARTERIAL_CUTOFF = 5;

function updateUI() {
  levelDisplay.textContent = String(level).padStart(2, "0");

  modeBanner.classList.remove("is-stopped", "is-venous", "is-arterial");

  if (level === 0) {
    modeBanner.classList.add("is-stopped");
    modeTitle.textContent = "STOPPED";
    modeSub.textContent = "Level 0";
  } else if (level >= ARTERIAL_CUTOFF) {
    modeBanner.classList.add("is-arterial");
    modeTitle.textContent = "ARTERIAL BLEED";
    modeSub.textContent = `Level ${level}`;
  } else {
    modeBanner.classList.add("is-venous");
    modeTitle.textContent = "VENOUS BLEED";
    modeSub.textContent = `Level ${level}`;
  }
}

increaseBtn.addEventListener("click", () => {
  if (level < MAX_LEVEL) {
    level += 1;
    updateUI();
  }
});

decreaseBtn.addEventListener("click", () => {
  if (level > MIN_LEVEL) {
    level -= 1;
    updateUI();
  }
});

stopBtn.addEventListener("click", () => {
  level = 0;
  updateUI();
});

updateUI();
