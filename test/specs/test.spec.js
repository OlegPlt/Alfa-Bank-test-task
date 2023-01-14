const Factorialpage = require('../../po/factorial.page')
const factorialPage = new Factorialpage()

describe('Test suite', () => {
  beforeEach(async () => {
    await factorialPage.open()
  });

  it('Factorial calculations are correct', async () => {
    const firstValueToCalculate = 2
    const factorialOfFirstValue = 2
    const secondValueToCalculate = 4
    const factorialOfSecondValue = 24
    const thirdValueToCalculate = 8
    const factorialOfThirdValue = 40320

    await factorialPage.inputField.setValue(firstValueToCalculate)
    await factorialPage.calculateButton.click()
    await expect(factorialPage.calculationResult).toHaveText(`The factorial of ${firstValueToCalculate} is: ${factorialOfFirstValue}`)

    await factorialPage.inputField.setValue(secondValueToCalculate)
    await factorialPage.calculateButton.click()
    await expect(factorialPage.calculationResult).toHaveText(`The factorial of ${secondValueToCalculate} is: ${factorialOfSecondValue}`)

    await factorialPage.inputField.setValue(thirdValueToCalculate)
    await factorialPage.calculateButton.click()
    await expect(factorialPage.calculationResult).toHaveText(`The factorial of ${thirdValueToCalculate} is: ${factorialOfThirdValue}`)
  })

  it('Calculate the factorial of 0', async () => {
    await factorialPage.inputField.setValue(0)
    await factorialPage.calculateButton.click()

    await expect(factorialPage.calculationResult).toHaveText(`The factorial of 0 is: 1`)
  })

  it('Check that the factorial of big number is infinity', async () => {
    await factorialPage.inputField.setValue(200)
    await factorialPage.calculateButton.click()

    await expect(factorialPage.calculationResult).toHaveText(`The factorial of 200 is: Infinity`)
  })

  it('Error message is appeared when entering string in calculation field', async () => {
    await factorialPage.inputField.setValue('Text')
    await factorialPage.calculateButton.click()

    await expect(factorialPage.calculationResult).toHaveText('Please enter an integer')
  })

  it('Error message is appeared when trying to calculate an empty value', async () => {
    await factorialPage.calculateButton.click()

    await expect(factorialPage.calculationResult).toHaveText('Please enter an integer')
  })

  //The potential expected behaviour, but 500 error is returned when trying to execute the test
  it('Calculation of factorial of negative number is impossible', async () => {
    await factorialPage.inputField.setValue(-5)
    await factorialPage.calculateButton.click()

    await expect(factorialPage.calculationResult).toHaveText('Please enter a positive integer')
  })

  it('Calculation of factorial of fractional number is impossible', async () => {
    await factorialPage.inputField.setValue(2.5)
    await factorialPage.calculateButton.click()

    await expect(factorialPage.calculationResult).toHaveText('Please enter an integer')
  })

  it('Check page title', async () => {
    const pageTitle = await browser.getTitle()

    expect(pageTitle).toEqual('Factorial')
  })

  it('Check text above the input field', async () => {
    await expect(factorialPage.calculatorName).toHaveText('The greatest factorial calculator!')
  })

  it('Check placeholder of input field', async () => {
    await expect(factorialPage.inputField).toHaveAttribute('placeholder', 'Enter an integer')
  })

  it('Input field has red frame when trying to calculate not integer data', async () => {
    await factorialPage.inputField.setValue('Text')
    await factorialPage.calculateButton.click()

    await expect(factorialPage.inputField).toHaveAttribute('style', 'border: 2px solid red;')
  })

  it('Check the name of calculate button', async () => {
    await expect(factorialPage.calculateButton).toHaveText('Calculate!')
  })

  it('Terms and conditions link is present and is clickable', async () => {
    await expect(factorialPage.termsAndConditions).toBeDisplayed()
    await expect(factorialPage.termsAndConditions).toBeClickable()
  })

  it('Privacy link is present and is clickable', async () => {
    await expect(factorialPage.privacyLink).toBeDisplayed()
    await expect(factorialPage.privacyLink).toBeClickable()
  })
})