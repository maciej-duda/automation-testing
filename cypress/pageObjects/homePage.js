const selectors = {
	pageURL: "https://uat.app.schoolified.kitemetric.com/",
	welcomeHeader: "//h1[contains(.,'Welcome to Schoolified')]",
    logoutButton: "//button[@type='button'][contains(.,'Log Out')]",
	testProgramLink: "//a[contains(.,'Test Program')]"
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
