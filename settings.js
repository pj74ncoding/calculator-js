let calArray = [];

//inputfield

const container = document.getElementById("inputcontainer");
const input = document.getElementById("inputfieldone");
const inputtwo = document.getElementById("inputfieldtwo");
const inputthree = document.getElementById("inputfieldthree");
const resultsContainer = document.getElementById("resultcontainer");
const sidecontainer = document.getElementById("createdElementsDiv");
const lightDarkButton = document.getElementById(
  "light-dark-button-icon-background",
);
const fontStyleButton = document.getElementById("button-font-style");
const sectionDate = document.getElementById("dateSection");
const removebutton = document.createElement("button");
const dateButton = document.getElementById("dateButton");

const pointN = ".";
const zeroN = "0";
const oneN = "1";
const twoN = "2";
const threeN = "3";
const fourN = "4";
const fiveN = "5";
const sixN = "6";
const sevenN = "7";
const eightN = "8";
const nineN = "9";

let pointkey = document.getElementById("point");
const numberPoint = (pointkey = pointN);

let zerokey = document.getElementById("zero");
const numberZero = (zerokey = zeroN);

let onekey = document.getElementById("one");
const numberOne = (onekey = oneN);

let twokey = document.getElementById("two");
const numberTwo = (twokey = twoN);

let threekey = document.getElementById("three");
const numberThree = (threekey = threeN);

let fourkey = document.getElementById("four");
const numberFour = (fourkey = fourN);

let fivekey = document.getElementById("five");
const numberFive = (fivekey = fiveN);

let sixkey = document.getElementById("six");
const numberSix = (sixkey = sixN);

let sevenkey = document.getElementById("seven");
const numberSeven = (sevenkey = sevenN);

let eightkey = document.getElementById("eight");
const numberEight = (eightkey = eightN);

let ninekey = document.getElementById("nine");
const numberNine = (ninekey = nineN);

let symbol;
let isEmpty = true;
let isResult = false;
let isButtonLit = false;
let isDateShown = false;

function showDate() {
  if (isDateShown == false) {
    const date = Date();
    const dateSection = document.getElementById("dateSection");
    const par = document.createElement("p");
    par.innerText = `${date}`;
    dateSection.appendChild(par);
    isDateShown = true;
  } else {
    sectionDate.innerHTML = "";
    isDateShown = !isDateShown;
  }
}

const buttons = document.querySelectorAll("button");
const body = document.querySelector("body");
const heading = document.getElementById("calculator-heading");
const calculaterContainer = document.getElementById("calculator");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].classList.add("buttons-font");
}

// toggle button for light and dark mode ==================================
function toggleButton() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.toggle("toggleStyle");
  }
  addedResultColor = !addedResultColor;
  body.classList.toggle("body-toggle");
  heading.classList.toggle("heading-toggle");
  calculaterContainer.classList.toggle("calculator-container-toggle");
  container.classList.toggle("input-container-toggle");
  input.classList.toggle("inputfields-toggle");
  inputtwo.classList.toggle("inputfields-toggle");
  inputthree.classList.toggle("inputfields-toggle");
  resultsContainer.classList.toggle("results-container-toggle");
  lightDarkButton.classList.toggle("light-dark-button-icons-toggle");
  resultside.classList.toggle("resultcolor-toggle");
  totalNumberAdd.classList.toggle("total-style-toggle");
  totalNumberSubtract.classList.toggle("total-style-toggle");
  totalNumberDivide.classList.toggle("total-style-toggle");
  totalNumberMultiply.classList.toggle("total-style-toggle");
  lightDarkButton.classList.toggle("light-dark-button-toggle");
  sidecontainer.classList.toggle("created-elementsDiv-toggle");
  removebutton.classList.toggle("remove-button-toggle");
  sectionDate.classList.toggle("date-section-toggle");
}

//button number class ==============================
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    buttons[i].classList.add("font-effect-neon");

    setTimeout(function () {
      buttons[i].classList.remove("font-effect-neon");
    }, 500);
  });
}

fontStyleButton.addEventListener("click", () => {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.toggle("font-style-toggle");
  }
  // fontStyleButton.classList.toggle("font-style-toggle");
});
