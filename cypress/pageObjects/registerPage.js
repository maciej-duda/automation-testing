const selectors = {
	firstName: "//input[contains(@value,'Cypress')]",
    lastName: "//input[contains(@value,'Automation')]",
    passwordField: "//input[@placeholder='Password'][contains(@id,'password')]",
    termsOfUseCheckbox: "(//input[contains(@type,'checkbox')])[2]", //will be changed when ID is added
    registerButton: "//button[@type='submit'][contains(.,'Register')]",
};

class RegisterPage {

    checkIfInformationsAreLoaded(emailAddress) {
		cy.xpath(selectors.firstName).should('be.visible');
        cy.xpath(selectors.lastName).should('be.visible');
	}

	fillPasswordField() {
		cy.xpath(selectors.passwordField).type('1qazXSW@');
        cy.xpath(selectors.termsOfUseCheckbox).click();
        cy.xpath(selectors.registerButton).click();
	}
}
export default RegisterPage;