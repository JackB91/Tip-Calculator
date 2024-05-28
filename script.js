const price = document.querySelector(".bill-amt");
const tip = document.querySelectorAll(".tip_percent");
const people = document.querySelector(".num-ppl");
const tipsum = document.querySelector(".tipsum");
const split = document.querySelector(".total-person");
const custom = document.querySelector(".custom-amt");
const reset = document.getElementById("reset");

// gets price of bill and number of people +custom
// TODO: put this in a single function so not to repeat

let bill = 0;
let numpeople = 1;
let customTip = 0;
let tipPercent = 0;

let tipAmtNum;

function workout() {
  price.addEventListener("input", function (event) {
    bill = parseFloat(event.target.value);
    calculations();
  });

  people.addEventListener("input", function (event) {
    numpeople = parseFloat(event.target.value);
    calculations();
  });

  custom.addEventListener("input", function (event) {
    customTip = parseFloat(event.target.value);
    calculations();
  });

  tip.forEach(function (item) {
    item.addEventListener("click", function () {
      let tipPercentText = item.textContent;
      tipPercent = parseFloat(tipPercentText);
      customTip = 0;
      calculations();
    });
  });

  function calculations() {
    if (customTip) {
      tipAmt = (bill * (customTip / 100)).toFixed(2);
    } else {
      tipAmt = (bill * (tipPercent / 100)).toFixed(2);
    }

    tipAmtNum = parseFloat(tipAmt);

    let personTip = (tipAmt / numpeople).toFixed(2);

    tipsum.innerHTML = "$" + personTip;

    let priceEach = ((bill + tipAmtNum) / numpeople).toFixed(2);
    console.log(priceEach);
    split.innerHTML = "$" + priceEach;
  }
}

workout();

function resetButton() {
  bill = 0;
  numpeople = 1;
  customTip = 0;
  tipPercent = 0;

  custom.value = "";
  price.value = "";
  people.value = "";

  tipsum.innerHTML = "$0.00";
  split.innerHTML = "$0.00";
}
reset.addEventListener("click", resetButton);

// TODO:
// function changeBtnColour() {
//   tip.classList.toggle("clicked");
// }

// tip.addEventListener("click", changeBtnColour);
