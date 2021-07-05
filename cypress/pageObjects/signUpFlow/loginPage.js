const selectors = {
	pageURL: Cypress.env('env') + "auth/login",
	emailInput: "//input[@placeholder='Email Address'][contains(@id,'username')]",
	passwordInput: "//input[@placeholder='Password'][contains(@id,'password')]",
	loginButton: "//button[@type='submit'][contains(.,'Log In')]"
};

class LoginPage {
	visitTestPage() {
		cy.visit(selectors.pageURL);
	}

	verifyIfElementsAreDisplayed() {
		cy.xpath(selectors.emailInput).should('be.visible');
		cy.xpath(selectors.passwordInput).should('be.visible');
		cy.xpath(selectors.loginButton).should('be.visible');
	}

	fillCredentialsInputs(email, password) {
		cy.xpath(selectors.emailInput).type(email);
		cy.xpath(selectors.passwordInput).type(password);
	}

	clickSubmitButton() {
		cy.xpath(selectors.loginButton).click();
	}

}
export default LoginPage;
