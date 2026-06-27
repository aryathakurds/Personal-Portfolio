const letters = document.querySelectorAll(".animated-name span");

letters.forEach((letter) => {
  letter.addEventListener("mouseenter", () => {
    letter.style.color = "#111827";
    letter.style.transform = "translateY(-8px) scale(1.08)";
  });

  letter.addEventListener("mouseleave", () => {
    letter.style.color = "#111827";
    letter.style.transform = "translateY(0) scale(1)";
  });
});

const words = [
  "Learning",
  "Applying",
  "Exploring",
  "Building",
  "Creating"
];

const typingWord = document.getElementById("typing-word");

let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];

  if (isDeleting) {
    typingWord.textContent = currentWord.substring(0, letterIndex - 1);
    letterIndex--;
  } else {
    typingWord.textContent = currentWord.substring(0, letterIndex + 1);
    letterIndex++;
  }

  let speed = isDeleting ? 70 : 120;

  if (!isDeleting && letterIndex === currentWord.length) {
    speed = 1200;
    isDeleting = true;
  }

  if (isDeleting && letterIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    speed = 300;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();