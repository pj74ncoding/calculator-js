const resultside = document.createElement("li");
const totalNumberAdd = document.createElement("p");
const totalNumberSubtract = document.createElement("p");
const totalNumberDivide = document.createElement("p");
const totalNumberMultiply = document.createElement("p");

//equals button =======================================================
function equal() {
  if (!input.innerHTML || !inputtwo.innerHTML || !inputthree.innerHTML) {
    alert("Can not calculate Input field is empty!!!!!!");
  } else {
    const inputThree = parseFloat(
      document.getElementById("inputfieldthree").innerHTML,
    );
    calArray.push(inputThree);
    const rside = document.createElement("li");
    rside.innerText = `${inputThree}`;
    rside.style.listStyleType = "none";
    rside.classList.add("number");
    sidecontainer.appendChild(rside);
    input.innerText = "";
    inputtwo.innerText = "";
    inputthree.innerText = "";

    switch (symbol) {
      case "add":
        let total = calArray[0] + calArray[1];
        input.innerText = `${total}`;
        input.style.display = "none";

        totalNumberAdd.innerHTML = `${total}`;
        totalNumberAdd.classList.add("total-style");

        resultsContainer.appendChild(totalNumberAdd);

        break;

      case "subtract":
        let totals = calArray[0] - calArray[1];
        input.innerText = `${totals}`;
        input.style.display = "none";

        totalNumberSubtract.innerHTML = `${totals}`;
        totalNumberSubtract.classList.add("total-style");

        resultsContainer.appendChild(totalNumberSubtract);

        break;

      case "divide":
        let totald = calArray[0] / calArray[1];
        input.innerText = `${totald}`;
        input.style.display = "none";

        totalNumberDivide.innerHTML = `${totald}`;

        totalNumberDivide.classList.add("total-style");
        resultsContainer.appendChild(totalNumberDivide);

        break;

      case "multiply":
        let totalm = calArray[0] * calArray[1];
        input.innerText = `${totalm}`;
        input.style.display = "none";

        totalNumberMultiply.innerHTML = `${totalm}`;

        totalNumberMultiply.classList.add("total-style");
        resultsContainer.appendChild(totalNumberMultiply);

        break;

      default:
        input.innerText = `Error`;
    }

    resultsContainer.classList.remove("hide-result");
    resultsContainer.classList.add("show-result");

    setTimeout(() => {
      resultsContainer.classList.remove("show-result");
      resultsContainer.classList.add("hide-result");
      resultsContainer.innerHTML = "";
      input.style.display = "block";
    }, 3000);
    addSelected = true;
    minusSelected = true;
    divideSelected = true;
    multiplySelected = true;
    deleteCreatedElementDiv = false;
    isEmpty = true;
    isResult = true;
    calArray = [];

    const result = parseFloat(
      document.getElementById("inputfieldone").innerHTML,
    );
    calArray.push(result);
    //  resultside is created at the top of the page so can access it to toggle a class
    resultside.innerText = ` = ${result}`;
    resultside.style.listStyleType = "none";
    resultside.style.textAlign = "center";
    resultside.classList.add("resultcolor");
    sidecontainer.appendChild(resultside);
    removebutton.innerText = "Remove Results";
    removebutton.classList.add("remove-button");
    sidecontainer.appendChild(removebutton);
    // Remove button ================================================================
    removebutton.addEventListener("click", function () {
      sidecontainer.innerText = "";
      input.innerHTML = "";
      inputtwo.innerHTML = "";
      inputthree.innerHTML = "";
      addSelected = true;
      minusSelected = true;
      divideSelected = true;
      multiplySelected = true;
      isEmpty = true;
      isResult = false;
      calArray = [];
      deleteCreatedElementDiv = true;
    });
  }
}
