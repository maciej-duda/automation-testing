const selectors = {
	pageURL: "https://uat.app.schoolified.kitemetric.com/courses",
    createCourseButton: "//button[@type='button'][contains(.,'Create Course')]",
    createdCourseName: "//a[contains(.,'Cypress automation course')]"
};

class CoursesListingPage {
	verifyIfElementsAreDisplayed() {
		cy.xpath(selectors.createCourseButton).should('be.visible');
	}

    clickCreateCourseButton() {
        cy.xpath(selectors.createCourseButton).click();
    }

    checkIfCourseIsVisible() {
        cy.xpath(selectors.createdCourseName).should('be.visible');
    }
}
export default CoursesListingPage;
