const selectors = {
	pageURL: Cypress.env('env') + "courses",
    courseVisibilityLabel: "//label[@for='basic_courseVisibility'][contains(.,'Course Visibility')]",
    coursePriceLabel: "//label[@for='basic_coursePrice'][contains(.,'Course Price')]",
    courseTypeDropdown: "//span[@class='ant-select-selection-item'][contains(.,'Public - Any student can join on CoLab')]",
    coursePublicType: "//div[@class='ant-select-item-option-content'][contains(.,'Public - Any student can join on CoLab')]",
    studentNumberDropdown: "//span[@class='ant-select-selection-item'][contains(.,'1')]",
    studentNumberValue: "//div[@class='ant-select-item-option-content'][contains(.,'6')]",
    coursePriceInput: "//span[@class='ant-input-affix-wrapper'][contains(.,'$')]",
    pricePerLessonCalculation: "//span[@class='ant-typography input-description'][contains(.,'Price per lesson: $38.46')]",
    totalEarnings: "(//div[@class='ant-col ant-col-24'][contains(.,'You could earn up to: $12,000.00')])[3]",
    acceptButton: "//input[contains(@type,'radio')]",
    createButton: "(//button[@type='button'][contains(.,'Create')])[2]",
   
};

class CourseCreationPricingModal {
	verifyIfElementsAreDisplayed() {
		cy.xpath(selectors.courseVisibilityLabel).should('be.visible');
        cy.xpath(selectors.coursePriceLabel).should('be.visible');
	}

    fillThePricingForm() {
        cy.xpath(selectors.courseTypeDropdown).click();
        cy.xpath(selectors.coursePublicType).click();
        cy.xpath(selectors.studentNumberDropdown).click();
        cy.xpath(selectors.studentNumberValue).click();
        cy.xpath(selectors.coursePriceInput).click().clear().type('2000');
        cy.xpath(selectors.pricePerLessonCalculation).should('be.visible');
        cy.xpath(selectors.totalEarnings).should('be.visible');
        cy.xpath(selectors.acceptButton).click();
        cy.xpath(selectors.createButton).click();
    }
}
export default CourseCreationPricingModal;
