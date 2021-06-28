const selectors = {
	pageURL: "https://uat.app.schoolified.kitemetric.com/auth/login",
	emailInput: "//input[@placeholder='Email Address'][contains(@id,'username')]",
	passwordInput: "//input[@placeholder='Password'][contains(@id,'password')]",
	forgotPasswordLink: "//a[@class='font-600'][contains(.,'Forgot password')]",
	logInButton: "//button[@type='submit'][contains(.,'Log In')]",
};

class LoginPage {

	visitTestPage() {
		cy.visit(selectors.pageURL);
	}

	checkIfBasicElementsAreDisplayed() {
		cy.url().should('eq', selectors.pageURL);
		cy.xpath(selectors.emailInput).should('be.visible');
		cy.xpath(selectors.passwordInput).should('be.visible');
		cy.xpath(selectors.forgotPasswordLink).should('be.visible');
		cy.xpath(selectors.logInButton).should('be.visible');
	}

	provideLoginCredentials(email, password) {
        cy.xpath(selectors.emailInput).type(email);
		cy.xpath(selectors.passwordInput).type(password);
		cy.xpath(selectors.logInButton).click();
    }
}

export default LoginPage;
