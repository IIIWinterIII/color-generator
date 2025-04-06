const displayElement = document.querySelector(".container__color-generator__display");
const titleColorElement = document.querySelector(".container__color-generator__title-color");
const buttonGenerateColor = document.querySelector(".container__color-generator__button");

titleColorElement.textContent = '...'
displayElement.style.backgroundColor = 'grey'

let randomColorGeneration = () => {
  const randomColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;

  return randomColor;
};


buttonGenerateColor.addEventListener("click", () => {
    let generationColor = randomColorGeneration()
    titleColorElement.textContent = generationColor

})