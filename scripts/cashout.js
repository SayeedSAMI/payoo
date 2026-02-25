document.getElementById("cashout-btn").addEventListener("click", function () {
  const cashoutNumber = getValueFromInput("cashout-number");

  // Agent account no check
  if (cashoutNumber.length != 11) {
    alert("Invalid Agent Number");
    return;
  }
  const cashoutAmount = getValueFromInput("cashout-amount");

  // calculate balance
  const currentBalance = getBalance();
  const newBalance = currentBalance - Number(cashoutAmount);
  if (newBalance < 0) {
    alert("Invalid Amount");
    return;
  }
  console.log("new balance", newBalance);

  // Pin section
  const pin = getValueFromInput("cashout-pin");
  if (pin === "1234") {
    alert("cashout successfull");
    console.log("new balance", newBalance);
    setBalance(newBalance);
    return;
  } else {
    alert("invalid pin");
    return;
  }
});

// document.getElementById("cashout-btn").addEventListener("click", function () {
//   // 1- get the agent number & validate
//   const cashoutNumberInput = document.getElementById("cashout-number");
//   const cashoutNumber = cashoutNumberInput.value;
//   console.log(cashoutNumber);
//   if(cashoutNumber.length != 11){
//     alert("Invalid Agent Number");
//     return;
//   }

//   //2- get the amount, validate, convert to number
//   const cashoutAmountInput = document.getElementById("cashout-amount");
//   const cashoutAmount = cashoutAmountInput.value;
//   console.log(cashoutAmount);

//   //3- get current balance, validate, convert to number
//   const balanceElement = document.getElementById("balance");
//   const balance = balanceElement.innerText;
//   console.log(balance);
//   //  4- calculate new Balance
//   const newBalance = Number(balance) - Number(cashoutAmount);
//   if (newBalance < 0) {
//     alert("Invalid Amount");
//     return;
//   }
//   console.log("new balance", newBalance);

//   //   5- get the pin and verify
//   const cashoutPinInput = document.getElementById("cashout-pin");
//   const pin = cashoutPinInput.value;
//   if (pin === "1234") {
//     alert("cashout successfull");
//     console.log("new balance", newBalance);
//     balanceElement.innerText = newBalance;
//     return;
//   } else {
//     alert("invalid pin");
//     return;
//   }
//   // 5-1 true:: show and alert> set Balance
//   // 5-2 true:: show anerror alert>return
// });
