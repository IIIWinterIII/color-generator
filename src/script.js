const displayElement = document.querySelector(
  ".container__color-generator__display"
);
const titleColorElement = document.querySelector(
  ".container__color-generator__title-color"
);
const buttonGenerateColor = document.querySelector(
  ".container__color-generator__button"
);

titleColorElement.textContent = "...";

const historyContainer = document.querySelector(".container__history-color");

let randomColorGeneration = () => {
  const randomColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;

  return randomColor;
};

buttonGenerateColor.addEventListener("click", () => {
  let generationColor = randomColorGeneration();

  displayElement.style.border = "none";
  displayElement.style.backgroundColor = generationColor;
  titleColorElement.textContent = generationColor;
  buttonGenerateColor.style.borderColor = generationColor;

  const newItemColor = document.createElement("div");
  newItemColor.className = "container__history-color__color-item";
  newItemColor.style.backgroundColor = generationColor;
  newItemColor.textContent = generationColor;
  historyContainer.prepend(newItemColor);

  setTimeout(() => {
    newItemColor.classList.add("container__history-color__color-item--opacity");
  }, 5);
});

historyContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("container__history-color__color-item")) {
    navigator.clipboard
      .writeText(e.target.textContent)
      .then(() => {
        console.log("Скопировано:", e.target.textContent);
      })
      .catch((err) => {
        console.error("Ошибка копирования:", err);
      });
  }
});
