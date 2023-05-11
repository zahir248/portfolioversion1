AOS.init();

const text = "Hello! வணக்கம்! 你好!";
const words = text.split(" ");
const colors = ["darkgreen", "darkblue", "darkred"];
let index = 0;
let isDeleting = false;
let speed = 200;
const typingText = document.querySelector(".typing-text");

function type() {
  const currentWord = words[index % words.length];
  const currentColor = colors[index % colors.length];
  if (isDeleting) {
    typingText.textContent = currentWord.substring(0, typingText.textContent.length - 1);
  } else {
    typingText.textContent = currentWord.substring(0, typingText.textContent.length + 1);
  }
  typingText.style.color = currentColor;
  typingText.style.fontSize = "5em"; // Set the font size to 2em
  if (!isDeleting && typingText.textContent === currentWord) {
    isDeleting = true;
    speed = 500;
  } else if (isDeleting && typingText.textContent === "") {
    isDeleting = false;
    index++;
    speed = 200;
  }

  setTimeout(type, speed);
}

type();



