function getValueFromInput(id) {
  const input = document.getElementById(id);
  const value = input.value;
  console.log(id, value);
  return value;
}

// machine -> balance as output
function getBalance() {
  const balanceElement = document.getElementById("balance");
  const balance = balanceElement.innerText;
  console.log("current balance", Number(balance));
  return Number(balance);
}

// machine ->take value input and  Set balance
function setBalance(value) {
  const balanceElement = document.getElementById("balance");
  balanceElement.innerText = value;
}

// machine id > hide all > show id
function showById(id) {
  const addMoney = document.getElementById("add-money");
  const cashOut = document.getElementById("cashout");
  const transaction = document.getElementById("history");
  addMoney.classList.add("hidden");
  cashOut.classList.add("hidden");
  transaction.classList.add("hidden");

  const select = document.getElementById(id);
  select.classList.remove("hidden");

  // if (id == addMoney) {
  //   addMoney.classList.remove("hidden");
  // } else if (id == cashOut) {
  //   cashOut.classList.remove("hidden");
  // }
}
