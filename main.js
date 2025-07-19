const div = document.querySelector(".container");

const wordPlaceHolder = ["Crispy", "Fresh", "Perfect"];

let careerIndex = 0;
let characterIndex = 0;

animationText();

function animationText() {
  characterIndex++;
  div.innerHTML = `
    <h1>Fries that are always ${wordPlaceHolder[careerIndex].slice(0, 1) === "I" ? "an" : "a"} ${wordPlaceHolder[
    careerIndex
  ].slice(0, characterIndex)}</h1>
    `;

  if (characterIndex === wordPlaceHolder[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }

  if (careerIndex === wordPlaceHolder.length) {
    careerIndex = 0;
  }
  setTimeout(animationText, 550);
}