let addSelected = true;
let minusSelected = true;
let divideSelected = true;
let multiplySelected = true;
let deleteCreatedElementDiv = true;
let noNumbersPresent = true;
let addedResultColor = false;

// sum onclick function ======================================
function sum(choice) {
  if (!input.innerHTML) {
    alert("Enter a number first!!!!!!!!!!!!!!");
  } else {
    if (choice === "plus") {
      if (addSelected) {
        if (isResult === false) {
          const inputone = parseFloat(
            document.getElementById("inputfieldone").innerHTML,
          );
          addSelected = false;
          minusSelected = false;
          divideSelected = false;
          multiplySelected = false;
          calArray.push(inputone);
          inputtwo.innerText = `+`;
          symbol = "add";
          isEmpty = false;
          const pside = document.createElement("li");
          pside.innerText = `${inputone}`;
          pside.style.listStyleType = "none";
          pside.classList.add("number");
          sidecontainer.appendChild(pside);
          const addside = document.createElement("li");
          addside.innerText = `+`;
          addside.style.listStyleType = "none";
          addside.classList.add("number");
          sidecontainer.appendChild(addside);
          isSelected = true;
        } else {
          addSelected = false;
          minusSelected = false;
          divideSelected = false;
          multiplySelected = false;
          inputtwo.innerText = `+`;
          symbol = "add";
          isEmpty = false;
          const inputone = parseFloat(
            document.getElementById("inputfieldone").innerHTML,
          );

          const resultside = document.createElement("li");
          resultside.innerText = `${inputone}`;
          resultside.style.listStyleType = "none";
          if (!addedResultColor) {
            resultside.classList.add("resultcolor");
          } else {
            resultside.classList.add("resultcolor-toggle");
          }
          sidecontainer.appendChild(resultside);
          const plusli = document.createElement("li");
          plusli.innerText = `+`;
          plusli.style.listStyleType = "none";
          sidecontainer.appendChild(plusli);
        }
      }
    } else if (choice === "minus") {
      if (minusSelected) {
        if (isResult === false) {
          const inputone = parseFloat(
            document.getElementById("inputfieldone").innerHTML,
          );
          addSelected = false;
          minusSelected = false;
          divideSelected = false;
          multiplySelected = false;
          calArray.push(inputone);
          inputtwo.innerText = `-`;
          symbol = "subtract";
          isEmpty = false;
          const side = document.createElement("li");
          side.innerText = `${inputone}`;
          side.style.listStyleType = "none";
          sidecontainer.appendChild(side);
          const addside = document.createElement("li");
          addside.innerText = `-`;
          addside.style.listStyleType = "none";
          sidecontainer.appendChild(addside);
        } else {
          addSelected = false;
          minusSelected = false;
          divideSelected = false;
          multiplySelected = false;
          inputtwo.innerText = `-`;
          symbol = "subtract";
          isEmpty = false;
          const inputone = parseFloat(
            document.getElementById("inputfieldone").innerHTML,
          );
          const resultside = document.createElement("li");
          resultside.innerText = `${inputone}`;
          resultside.style.listStyleType = "none";
          if (!addedResultColor) {
            resultside.classList.add("resultcolor");
          } else {
            resultside.classList.add("resultcolor-toggle");
          }

          sidecontainer.appendChild(resultside);
          const plusli = document.createElement("li");
          plusli.innerText = `-`;
          plusli.style.listStyleType = "none";
          sidecontainer.appendChild(plusli);
        }
      }
    } else if (choice === "divide") {
      if (divideSelected) {
        if (isResult === false) {
          const inputone = parseFloat(
            document.getElementById("inputfieldone").innerHTML,
          );
          addSelected = false;
          minusSelected = false;
          divideSelected = false;
          multiplySelected = false;
          calArray.push(inputone);
          inputtwo.innerText = `/`;
          symbol = "divide";
          isEmpty = false;
          const dside = document.createElement("li");
          dside.innerText = `${inputone}`;
          dside.style.listStyleType = "none";
          sidecontainer.appendChild(dside);
          const addside = document.createElement("li");
          addside.innerText = `/`;
          addside.style.listStyleType = "none";
          addside.style.textAlign = "center";
          sidecontainer.appendChild(addside);
        } else {
          addSelected = false;
          minusSelected = false;
          divideSelected = false;
          multiplySelected = false;

          inputtwo.innerText = `/ `;
          symbol = "divide";
          isEmpty = false;
          const inputone = parseFloat(
            document.getElementById("inputfieldone").innerHTML,
          );
          const resultside = document.createElement("li");
          resultside.innerText = `${inputone}`;
          resultside.style.listStyleType = "none";
          if (!addedResultColor) {
            resultside.classList.add("resultcolor");
          } else {
            resultside.classList.add("resultcolor-toggle");
          }
          sidecontainer.appendChild(resultside);
          const plusli = document.createElement("li");
          plusli.innerText = `/`;
          plusli.style.listStyleType = "none";
          sidecontainer.appendChild(plusli);
        }
      }
    } else if (choice === "multiply") {
      if (multiplySelected) {
        if (isResult === false) {
          const inputone = parseFloat(
            document.getElementById("inputfieldone").innerHTML,
          );
          addSelected = false;
          minusSelected = false;
          divideSelected = false;
          multiplySelected = false;
          calArray.push(inputone);
          inputtwo.innerText = `x`;
          symbol = "multiply";
          isEmpty = false;
          const mside = document.createElement("li");
          mside.innerText = `${inputone}`;
          mside.style.listStyleType = "none";
          mside.style.textAlign = "center";
          sidecontainer.appendChild(mside);
          const addside = document.createElement("li");
          addside.innerText = `*`;
          addside.style.listStyleType = "none";
          addside.style.textAlign = "center";
          sidecontainer.appendChild(addside);
        } else {
          addSelected = false;
          minusSelected = false;
          divideSelected = false;
          multiplySelected = false;
          inputtwo.innerText = `*`;
          symbol = "multiply";
          isEmpty = false;
          const inputone = parseFloat(
            document.getElementById("inputfieldone").innerHTML,
          );
          const resultside = document.createElement("li");
          resultside.innerText = `${inputone}`;
          resultside.style.listStyleType = "none";
          if (!addedResultColor) {
            resultside.classList.add("resultcolor");
          } else {
            resultside.classList.add("resultcolor-toggle");
          }
          sidecontainer.appendChild(resultside);
          const plusli = document.createElement("li");
          plusli.innerText = `*`;
          plusli.style.listStyleType = "none";
          sidecontainer.appendChild(plusli);
        }
      }
    }
  }
}

//clear button ============================================
const remove = document.getElementById("remove");
const dateSection = document.getElementById("dateSection");
remove.addEventListener("click", function () {
  input.innerText = "";
  inputtwo.innerText = "";
  inputthree.innerText = "";
  addSelected = true;
  minusSelected = true;
  divideSelected = true;
  multiplySelected = true;
  isEmpty = true;
  isResult = false;
  calArray = [];

  if (deleteCreatedElementDiv) {
    sidecontainer.innerHTML = "";
  }
});
