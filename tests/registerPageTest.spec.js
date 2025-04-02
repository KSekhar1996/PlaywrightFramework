const {test, expect} = require('@playwright/test')
const fs = require('fs')
const CommonUtils = require('../utilities/commonUtils')
import { RegisterPage } from '../pages/registerPage'

const registerData = CommonUtils.readJSONFile('./testData/registerData.json')

test.describe('User Registration Test Coverage', () => {
    let registerPage;

    test.beforeEach(async ({ page }) => {
        registerPage = new RegisterPage(page);
        await page.goto('/register');
    });

    test('Verify registration functionality with valid data', async() => {
        await registerPage.selectMaleRadioButton();
        await registerPage.enterFirstName(registerData.firstName);
        await registerPage.enterLastName(registerData.lastName);
        await registerPage.enterEmail("testplaywright" + CommonUtils.generateRandomNumber(5) + "@gmail.com");
        await registerPage.enterCompanyName(registerData.companyName); 
        await registerPage.validateNewsLetterCheckbox();
        await registerPage.enterPassword(process.env.PASSWORD);
        await registerPage.enterConfirmPassword(process.env.PASSWORD);
        await registerPage.clickOnRegisterButton();
        await registerPage.validateRegistrationSuccessMessage();
        await registerPage.validateLogoPresence();
    })

    test.afterEach(async ({ page }) => {
        //await page.close();
        await page.waitForTimeout(5000)
    });
})