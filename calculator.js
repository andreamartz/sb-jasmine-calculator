window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +document.getElementById("loan-amount").value,
    years: +document.getElementById("loan-years").value,
    rate: +document.getElementById("loan-rate").value,
  };
}

function setupIntialValues() {
  // Get the inputs from the DOM.
  const form = document.getElementById("calc-form");
  const formInputs = Array.from(form.querySelectorAll("input"));
  const amountInput = form.querySelector("#loan-amount");
  const yearsInput = form.querySelector("#loan-years");
  const rateInput = form.querySelector("#loan-rate");
  console.log(amountInput, yearsInput, rateInput);

  // Put some default values in the inputs
  amountInput.value = 10000;
  yearsInput.value = 2.5;
  rateInput.value = 3.2575;

  const values = {
    amountInput: amountInput,
    yearsInput: yearsInput,
    rateInput: rateInput,
  };
  console.log("values: ", values);
  // Call a function to calculate the current monthly payment
  calculateMonthlyPayment(values);
}

// Get the current values from the UI
// Update the monthly payment
function update() {}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {}
