const { expect } = require('@playwright/test');

class RegisterPage {

    constructor(page) {
        this.page = page;
        this.maleRadioButton = "#gender-male";
        this.firstNameField = "#FirstName";
        this.lastNameField = "#LastName";
        this.emailField = "#Email";
        this.companyField = "#Company";
        this.newsLetterCheckbox = "#Newsletter";
        this.passwordField = "#Password";
        this.confirmPasswordField = "#ConfirmPassword";
        this.registerButton = "#register-button";
        this.successMessage = "div[class='result']";
        this.logo = ".header-logo a img";
    }

    async selectMaleRadioButton() {
        await this.page.locator(this.maleRadioButton).check()
    }

    async enterFirstName(firstName) {
        await this.page.fill(this.firstNameField, firstName);
    }

    async enterLastName(lastName) {
        await this.page.fill(this.lastNameField, lastName);
    }

    async enterEmail(email) {
        await this.page.fill(this.emailField, email);
    }

    async enterCompanyName(companyName) {
        await this.page.fill(this.companyField, companyName);
    }

    async validateNewsLetterCheckbox() {
        expect(await this.page.locator(this.newsLetterCheckbox)).toBeChecked();
    }

    async enterPassword(password) {
        await this.page.fill(this.passwordField, password);
    }

    async enterConfirmPassword(password) {
        await this.page.fill(this.confirmPasswordField, password);
    }

    async clickOnRegisterButton() {
        await this.page.locator(this.registerButton).click();
    }

    async validateRegistrationSuccessMessage() {
        expect(await this.page.locator(this.successMessage)).toHaveText("Your registration completed");
    }

    async validateLogoPresence() {
        expect(await this.page.locator(this.logo)).toBeVisible();
    }
}
module.exports = { RegisterPage };