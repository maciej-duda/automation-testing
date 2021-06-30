const selectors = {
	pageURL: "https://uat.app.schoolified.kitemetric.com/courses",
    createCourseButton: "//button[@type='button'][contains(.,'Create Course')]",
    modalHeader: "//div[@class='ant-modal-title'][contains(.,'New Course')]",
    courseSettingsDropdown: "//input[contains(@aria-owns,'basic_courseSetting_list')]",
    indenpendentCourseOption: "//div[@class='ant-select-item-option-content'][contains(.,'Independent Tutoring')]",
    courseTitleInput: "//input[@type='text'][contains(@id,'name')]",
    subjectDropdown: "//input[contains(@aria-owns,'basic_subjectId_list')]",
    computerScienceSubject: "//div[@class='ant-select-item-option-content'][contains(.,'Computers & Technology')]",
    startDate: "//input[contains(@id,'startTime')][@placeholder='Select date']",
    endDate: "//input[contains(@id,'endTime')][@placeholder='Select date']",
    weekdayPicker: "//span[@class='ant-select-selection-placeholder'][contains(.,'Weekday')]",
    weekdayMonday: "//div[@class='ant-select-item-option-content'][contains(.,'Monday')]",
    startTime: "//input[contains(@placeholder,'From')]",
    startTimeOk: "//button[@type='button'][contains(.,'Ok')]",
    endTime: "//input[contains(@placeholder,'To')]",
    endTimeOk: "(//button[@type='button'][contains(.,'Ok')])[2]",
    nextButton: "//button[@type='button'][contains(.,'Next')]",
};

class CourseCreationModal {
	verifyIfElementsAreDisplayed() {
		cy.xpath(selectors.modalHeader).should('be.visible');
	}

    fillTheCourseForm() {
        cy.xpath(selectors.courseTitleInput).type('Cypress automation course').should('have.value', 'Cypress automation course');
        cy.xpath(selectors.subjectDropdown).click();
        cy.xpath(selectors.computerScienceSubject).click();
        cy.xpath(selectors.startDate).click().clear().type('2021-06-29').should('have.value', '2021-06-29');
        cy.xpath(selectors.endDate).click().clear().type('2022-06-29').should('have.value', '2022-06-29');
        cy.xpath(selectors.weekdayPicker).click();
        cy.xpath(selectors.weekdayMonday).click();
        cy.xpath(selectors.startTime).click().type('10:00').should('have.value', '10:00');
        cy.xpath(selectors.startTimeOk).click();
        cy.xpath(selectors.endTime).click().type('12:00').should('have.value', '12:00');
        cy.xpath(selectors.endTimeOk).click();
        cy.xpath(selectors.nextButton).click();
    }
}
export default CourseCreationModal;
