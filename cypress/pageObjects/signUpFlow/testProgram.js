const selectors = {
	pageURL: Cypress.env('env') + "test-program",
	pageHeader: "//h3[@class='ant-typography'][contains(.,'Beta Program')]",
    waitingListLink: "//div[@role='tab'][contains(.,'Waiting')]",
    searchBox: "//input[contains(@placeholder,'Type to search tester')]",
    magnifyingGlassButton: "//span[contains(@aria-label,'search')]",
    testUserLink: "//a[contains(.,'Cypress Teacher2Account')]",
};

class TestProgram {
	visitTestPage() {
		cy.visit(selectors.pageURL);
	}

	verifyIfElementsAreDisplayed() {
		cy.xpath(selectors.pageHeader).should('be.visible');
	}

	changeToWaitingListTab() {
		cy.xpath(selectors.waitingListLink).click();
	}

    openTesterProfile(email) {
        cy.xpath(selectors.searchBox).type(email);
        cy.xpath(selectors.magnifyingGlassButton).click();
		cy.wait(3000);
        cy.xpath(selectors.testUserLink).click();
    }
}
export default TestProgram;
