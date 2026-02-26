document.getElementById("add-money-btn").addEventListener("click", function () {
  //get bank account
  const account = getValueFromInput("add-money-bank");
  if (account === "Select Bank") {
    alert(`Please select a bank instade of ${account}`);
    return;
  }

  // get bank account number
  const accountNumber = getValueFromInput("add-money-number");
  if (accountNumber.length != 11) {
    alert(`Invalid Account Number ${accountNumber}`);
    return;
  }

  // get amount
  const amount = getValueFromInput("add-money-amount");
  const currentBalance = getBalance();
  const newBalance = currentBalance + Number(amount);

  //get 4 degit pin
  const pin = getValueFromInput("add-money-pin");
  if (pin === "1234") {
    alert(
      `Add Money Succes on ${account} Bank Account ${accountNumber} in ${new Date()} Bank`,
    );
    setBalance(newBalance);
  } else {
    alert("Invalid Pin");
    return;
  }
});
