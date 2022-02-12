function inputField(input) {
  const inputField = document.getElementById(input);
  const inputFieldValue = parseFloat(inputField.value);
  inputField.value = "";

  return inputFieldValue;
}

// totalAmount
function totalAmount(amount, inputFieldValue) {
  const previousAmount = document.getElementById(amount);
  const previousAmountValue = parseFloat(previousAmount.innerText);
  previousAmount.innerText = previousAmountValue + inputFieldValue;
}

//previous balance
function previousBalance() {
  const balance = document.getElementById("balance");
  const balanceValue = parseFloat(balance.innerText);
  return balanceValue;
}
// update balance
function updateBalance(inputFieldValue, isAdd) {
  const balance = document.getElementById("balance");
  const previousBalanceValue = previousBalance();
  if (isAdd == true) {
    balance.innerText = previousBalanceValue + inputFieldValue;
  } else {
    balance.innerText = previousBalanceValue - inputFieldValue;
  }
}
//deposite
const depositeBtn = document.getElementById("deposite-btn");

depositeBtn.addEventListener("click", () => {
  // const inputField = document.getElementById("deposite-input-field");
  // const inputFieldValue = parseFloat(inputField.value);
  /*   const previousAmount = document.getElementById("deposite");
  const previousAmountValue = parseFloat(previousAmount.innerText);
  if (inputFieldValue > 0) {
    previousAmount.innerText = previousAmountValue + inputFieldValue;
  } */

  // update balance
  /*   const previousBalance = document.getElementById("balance");
  const previousBalanceValue = parseFloat(previousBalance.innerText);
  if (inputFieldValue > 0) {
    previousBalance.innerText = previousBalanceValue + inputFieldValue;
  } */
  const inputFieldValue = inputField("deposite-input-field");
  if (inputFieldValue > 0) {
    totalAmount("deposite", inputFieldValue);
    updateBalance(inputFieldValue, true);
  }
});

// withdraw
const withdrawBtn = document.getElementById("withdraw-btn");

withdrawBtn.addEventListener("click", () => {
  /*   const inputField = document.getElementById("withdraw-input-field");
  const inputFieldValue = parseFloat(inputField.value); */
  /*   const previousAmount = document.getElementById("withdraw");
  const previousAmountValue = parseFloat(previousAmount.innerText);  */

  // balance condition
  /* const balanceCondition = document.getElementById("balance");
  const balanceConditionValue = parseFloat(balanceCondition.innerText);
  if (inputFieldValue > 0 && inputFieldValue < balanceConditionValue) {
    previousAmount.innerText = previousAmountValue + inputFieldValue;
  } */
  // update balance
  /* const balance = document.getElementById("balance");
  const balanceValue = parseFloat(balance.innerText);
  if (inputFieldValue > 0 && inputFieldValue < balanceValue) {
    balance.innerText = balanceValue - inputFieldValue;
  } */
  const inputFieldValue = inputField("withdraw-input-field");
  const previousBalanceValue = previousBalance();
  if (inputFieldValue > 0 && inputFieldValue < previousBalanceValue) {
    totalAmount("withdraw", inputFieldValue);
    updateBalance(inputFieldValue, false);
  }
});
