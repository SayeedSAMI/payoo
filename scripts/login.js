document.getElementById("login-btn").addEventListener("click", function () {
  //   console.log("login button clicked");

  // 1 - get the mobile number input
  const numberInput = document.getElementById("input-number");
  const contactNumber = numberInput.value;
  console.log(contactNumber);

  // 2 - get the pin number
  const InputPin = document.getElementById("input-pin");
  const pin = InputPin.value;
  console.log(pin);
  
  // 3 - matvh pin & mobile number
  if (contactNumber == "0123412312" && pin == "1234") {

    // 3-1 - true:::>> alert> homepage
    alert("Login Success");
    // window.location.replace('/home.html');
    window.location.assign("/home.html");


  } else {

    // 3-1 - false:::>> alert> return
    alert("login failed");
    return;

  }
});
