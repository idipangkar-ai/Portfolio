const numParticles = 50;

const galaxyContainer = document.getElementById("galaxy-container");

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function createParticle() {
  const particle = document.createElement("div");
  particle.classList.add("particle");

  const size = getRandom(1, 3);
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;

  const randomTop = getRandom(0, 100);
  const randomLeft = getRandom(0, 100);
  particle.style.top = `${randomTop}%`;
  particle.style.left = `${randomLeft}%`;

  const randomDuration = getRandom(15, 30);
  particle.style.animationDuration = `${randomDuration}s`;

  const moveX = getRandom(-200, 200);
  const moveY = getRandom(-200, 200);

  particle.style.setProperty("--move-x", `${moveX}px`);
  particle.style.setProperty("--move-y", `${moveY}px`);

  galaxyContainer.appendChild(particle);
}

for (let i = 0; i < numParticles; i++) {
  createParticle();
}
