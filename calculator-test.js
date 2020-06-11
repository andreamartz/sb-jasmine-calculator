describe("calculateMontlyPayment(values) tests", function () {
  it("should calculate the monthly rate correctly", function () {
    expect(
      calculateMonthlyPayment({
        amount: 0,
        years: 2.5,
        rate: 3.2575,
      })
    ).toEqual("0.00");
    expect(
      calculateMonthlyPayment({
        amount: 5000,
        years: 2.5,
        rate: 10.999999,
      })
    ).toEqual("191.39");
  });

  it("should return a result with 2 decimal places", function () {
    expect(
      calculateMonthlyPayment({
        amount: 10000,
        years: 2.5,
        rate: 3.2575,
      })
    ).toEqual("347.54");
  });
});
