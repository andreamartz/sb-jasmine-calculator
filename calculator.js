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
  const amountInput = form.querySelector("#loan-amount");
  const yearsInput = form.querySelector("#loan-years");
  const rateInput = form.querySelector("#loan-rate");

  // Put some default values in the inputs
  amountInput.value = 10000;
  yearsInput.value = 2.5;
  rateInput.value = 3.2575;

  const values = {
    amount: amountInput,
    years: yearsInput,
    rate: rateInput,
  };

  // Call a function to calculate the current monthly payment
  calculateMonthlyPayment(values);
}

function update() {
  // Get the current values from the UI
  const values = getCurrentUIValues();

  // Update the monthly payment
  const payment = calculateMonthlyPayment(values);
  updateMonthly(payment);
}

function calculateMonthlyPayment(values) {
  // Given an object of values (a value has amount, years and rate), calculate the monthly payment.
  const { amount, years, rate } = values;
  const monthlyRateDecimal = rate / 12 / 100;
  const months = years * 12;

  const monthlyPmtNumerator = amount * monthlyRateDecimal;
  const monthlyPmtDenominator = 1 - Math.pow(1 + monthlyRateDecimal, -months);
  const monthlyPmt = monthlyPmtNumerator / monthlyPmtDenominator;
  // The output should be a string that always has 2 decimal places.
  return String(monthlyPmt.toFixed(2));
}

function updateMonthly(monthly) {
  // Given a string representing the monthly payment value, update the UI to show the value.
  const paymentUI = document.querySelector("#monthly-payment");
  paymentUI.innerText = `$${monthly}`;
}
