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

    // transaction section

    // 1 history container ke shore niye ashbo
    const history = document.getElementById("history-transaction");

    // 2 new div create korbo
    const newhistory = document.createElement("div");

    // 3 new div inner html add korbo
    newhistory.innerHTML = ` 
    <details class="collapse bg-base-100 border border-base-300" name="my-accordion-det-1 mx-5" open>
  <summary class="collapse-title font-semibold">Add Money</summary>
  <div class="collapse-content text-sm">Add Money on ${account} Bank Account ${accountNumber} in ${new Date()} Bank</div>
</details>
    `;
    // 4 history container e new div append korbo
    history.append(newhistory);
  } else {
    alert("Invalid Pin");
    return;
  }
});
