const selectors = {
	pageURL: Cypress.env('env'),
	welcomeHeader: "//h1[contains(.,'Welcome to Schoolified')]",
    logoutButton: "//button[@type='button'][contains(.,'Log Out')]",
	testProgramLink: "//a[contains(.,'Beta Program')]"
};

class HomePage {
	visitTestPage() {
		cy.visit(selectors.pageURL);
	}

	verifyIfElementsAreDisplayed() {
		cy.xpath(selectors.welcomeHeader).should('be.visible');
		cy.xpath(selectors.logoutButton).should('be.visible');
	}

	visitTestProgram() {
		cy.xpath(selectors.testProgramLink).click();
	}

    logoutFromAccount() {
        cy.xpath(selectors.logoutButton).click();
    }
}
export default HomePage;
