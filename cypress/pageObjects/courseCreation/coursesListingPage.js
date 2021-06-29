const selectors = {
	pageURL: "https://uat.app.schoolified.kitemetric.com/courses",
    createCourseButton: "//button[@type='button'][contains(.,'Create Course')]",
};

class CoursesListingPage {
	verifyIfElementsAreDisplayed() {
		cy.xpath(selectors.createCourseButton).should('be.visible');
	}

    clickCreateCourseButton() {
        cy.xpath(selectors.createCourseButton).click();
    }
}
export default CoursesListingPage;
