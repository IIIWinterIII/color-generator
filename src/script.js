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

// Основной экран
buttonGenerateColor.addEventListener("click", () => {
  let generationColor = randomColorGeneration();

  displayElement.style.border = "none";
  displayElement.style.backgroundColor = generationColor;
  buttonGenerateColor.style.borderColor = generationColor;

  titleColorElement.classList.add(
    "container__color-generator__title-color--hidden"
  );

  // История
  const newItemColor = document.createElement("div");
  newItemColor.className = "container__history-color__color-item";
  newItemColor.style.backgroundColor = generationColor;
  newItemColor.textContent = generationColor;

  historyContainer.prepend(newItemColor);

  setTimeout(() => {

    titleColorElement.textContent = generationColor;
    titleColorElement.classList.remove(
      "container__color-generator__title-color--hidden"
    );

    // иконка копирования
    let iconCopyElement = document.createElement("i");
    iconCopyElement.className = "fa-solid fa-copy";

    titleColorElement.append(iconCopyElement);

    newItemColor.classList.add("container__history-color__color-item--opacity");
  }, 100);

});

// Копирование текста в TITLE
titleColorElement.addEventListener("click", () => {

  if (titleColorElement.textContent !== "...") {
    navigator.clipboard
      .writeText(titleColorElement.textContent)
      .then(() => {
        titleColorElement.classList.add(
          "container__color-generator__title-color--copy"
        );

        setTimeout(() => {
          titleColorElement.classList.remove(
            "container__color-generator__title-color--copy"
          );
        }, 600);
      })
      .catch((err) => {
        console.error("Ошибка копирования:", err);
      });
  }
});

// Копирование текст текста в истории
historyContainer.addEventListener("click", (e) => {
  
  if (e.target.classList.contains("container__history-color__color-item")) {
    navigator.clipboard
      .writeText(e.target.textContent)
      .then(() => {
        e.target.classList.add("container__history-color__color-item--sucess");

        setTimeout(() => {
          e.target.classList.remove(
            "container__history-color__color-item--sucess"
          );
        }, 600);
      })

      .catch((err) => {
        console.error("Ошибка копирования:", err);
      });
  }
});
