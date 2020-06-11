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
  const amountUI = document.querySelector("#loan-amount");
  const yearsUI = document.querySelector("#loan-years");
  const rateUI = document.querySelector("#loan-rate");

  // Put some default values in the inputs
  const values = {
    amount: 10000,
    years: 2.5,
    rate: 3.2575,
  };

  amountUI.value = values.amount;
  yearsUI.value = values.years;
  rateUI.value = values.rate;

  // Call a function to calculate the current monthly payment
  update();
}

function update() {
  // Get the current values from the UI
  const values = getCurrentUIValues();

  // Update the monthly payment calculation and
  const payment = calculateMonthlyPayment(values);
  updateMonthly(payment);
}

function calculateMonthlyPayment(values) {
  // Given an object of values (a value has amount, years and rate), calculate the monthly payment.
  const { amount, years, rate } = values;
  const int = rate / 12 / 100;
  const n = years * 12;

  const monthlyPmtNumerator = amount * int;
  const monthlyPmtDenominator = 1 - Math.pow(1 + int, -n);
  const monthlyPmt = monthlyPmtNumerator / monthlyPmtDenominator;
  // The output should be a string that always has 2 decimal places.
  return String(monthlyPmt.toFixed(2));
}

function updateMonthly(monthly) {
  // Given a string representing the monthly payment value, update the UI to show the value.
  const paymentUI = document.querySelector("#monthly-payment");
  paymentUI.innerText = `$${monthly}`;
}
