class FactorialPage {
  constructor() {
    this.url = 'https://qainterview.pythonanywhere.com/'
    this.calcName = '//h1[text()="The greatest factorial calculator!"]'
    this.input = '//input[@id="number"]'
    this.calcButton = 'button#getFactorial'
    this.result = 'p#resultDiv'
    this.terms = '//a[text()="Terms and Conditions"]'
    this.privacy = '//a[text()="Privacy"]'
  }

  open() {
    return browser.url(this.url)
  }

  get calculatorName() {
    return $(this.calcName)
  }

  get inputField() {
    return $(this.input)
  }

  get calculateButton() {
    return $(this.calcButton)
  }

  get calculationResult() {
    return $(this.result)
  }

  get termsAndConditions() {
    return $(this.terms)
  }

  get privacyLink() {
    return $(this.privacy)
  }
}

module.exports = FactorialPage