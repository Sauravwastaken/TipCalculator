let calculateBtn = document.getElementById("calculateBtn");
let moneyAudio = document.getElementById("moneyAudio");
let tipAmountDiv = document.getElementsByClassName("tip_amount")[0];

calculateBtn.addEventListener("click", showTip);

function showTip() {
  this.disabled = true;
  let billAmount = document.getElementById("billAmount");
  let personNum = document.getElementById("personNum");
  let rating = document.getElementById("rating");
  let tipAmount = ((billAmount.value * rating.value) / personNum.value).toFixed(
    2
  );

  // Validation
  // Inserting Tip Amount in DOC

  if (isNaN(tipAmount)) {
    tipAmountDiv.innerHTML = `<p>Enter Valid Details</p>`;
  } else if (tipAmount == Infinity) {
    tipAmountDiv.innerHTML = `<p>Enter Valid Details</p>`;
  } else {
    tipAmountDiv.innerHTML = `<p>Tip Amount : $${tipAmount} Each</p>`;
    moneyAudio.play();
  }

  // Reseting Value

  billAmount.value = "";
  personNum.value = "";
  rating.value = "default";

  // Showing Div
  tipAmountDiv.className = "tip_amount show";
  setTimeout(() => {
    this.disabled = false;

    tipAmountDiv.className = tipAmountDiv.className.replace(
      "tip_amount show",
      "tip_amount"
    );
  }, 3900);
}
