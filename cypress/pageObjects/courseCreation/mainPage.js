const selectors = {
	pageURL: Cypress.env('env'),
    userEmail: "//b",
    logoutButton: "//button[@type='button'][contains(.,'Log Out')]",
    coursesButton: "//a[contains(.,'Courses')]",
};

class MainPage {
	visitTestPage() {
		cy.visit(selectors.pageURL);
	}

	verifyIfElementsAreDisplayed() {
		cy.xpath(selectors.userEmail).should('contain', Cypress.env('testUserEmail'));
        cy.xpath(selectors.logoutButton).should('be.visible');
        cy.xpath(selectors.coursesButton).should('be.visible');
	}

	visitCoursesPage() {
		cy.xpath(selectors.coursesButton).click();
	}
}
export default MainPage;
