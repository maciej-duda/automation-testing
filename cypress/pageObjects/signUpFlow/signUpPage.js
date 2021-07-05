const signUpFormSelectors = {
	pageURL: Cypress.env('env') + "test-program/register",
    pageHeader: "//h3[@class='font-500 color-info pt-1'][contains(.,'You’re interested in Schoolified.  We’re interested in you!')]",
	accountTypeDropdown: "//div[@class='ant-select-selector'][contains(.,'I am a...')]",
    accoutTypeTeacher: "//div[@class='ant-select-item-option-content'][contains(.,'Teacher')]",
	firstNameInput: "//input[@placeholder='First Name'][contains(@id,'firstName')]",
	lastNameInput: "//input[@placeholder='Last Name'][contains(@id,'lastName')]",
	emailInput: "//input[@placeholder='Email Address'][contains(@id,'email')]",
    contactCheckbox: "//input[contains(@id,'canContact')][@type='checkbox']",
    termsOfUseCheckbox: "//input[contains(@id,'isAcceptPolicy')][@type='checkbox']",
    signUpButton: "//button[@type='submit'][contains(.,'Sign Up')]",
};

class SignUpPage {
    visitTestPage() {
		cy.visit(signUpFormSelectors.pageURL);
	}

	checkIfBasicElementsAreDisplayed() {
		cy.xpath(signUpFormSelectors.pageHeader).should('be.visible');
		cy.xpath(signUpFormSelectors.signUpButton).should('be.visible');
	}

    fillFormAsTeacher(firstName, lastName, emailAddress) {
        cy.xpath(signUpFormSelectors.accountTypeDropdown).click();
        cy.xpath(signUpFormSelectors.accoutTypeTeacher).click();
        cy.xpath(signUpFormSelectors.firstNameInput).type(firstName);
        cy.xpath(signUpFormSelectors.lastNameInput).type(lastName);
        cy.xpath(signUpFormSelectors.emailInput).type(emailAddress);
        cy.xpath(signUpFormSelectors.contactCheckbox).click();
        cy.xpath(signUpFormSelectors.termsOfUseCheckbox).click();
        cy.xpath(signUpFormSelectors.signUpButton).click();
        cy.wait(10000);
    }
}

export default SignUpPage;
