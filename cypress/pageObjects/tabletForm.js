const tabletFormSelectors = {
    formHeader: "//h3[@class='font-500 color-info'][contains(.,'Do you own a tablet?')]",
    trueCheckbox: "//span[@class='font-500 color-info'][contains(.,'Yes, I own a tablet.')]",
    deviceBrand: "//div[@class='ant-select-selector'][contains(.,'I have an...')]",
    deviceBrandIPad: "//div[@class='ant-select-item-option-content'][contains(.,'iPad')]",
    deviceModel: "//div[@class='ant-select-selector'][contains(.,'My iPad is a...')]",
    deviceModelIPadPro: "//div[@class='ant-select-item-option-content'][contains(.,'iPad Pro')]",
    deviceOS: "//div[@class='ant-select-selector'][contains(.,'My iPad is running...')]",
    deviceOS14: "//div[@class='ant-select-item-option-content'][contains(.,'iOS 14')]",
    submitButton: "//button[@type='button'][contains(.,'Submit')]"
};

class TabletForm {
    fillDeviceForm() {
        cy.xpath(tabletFormSelectors.formHeader).should('be.visible');
        cy.xpath(tabletFormSelectors.trueCheckbox).click();
        cy.xpath(tabletFormSelectors.deviceBrand).click();
        cy.xpath(tabletFormSelectors.deviceBrandIPad).click();
        cy.xpath(tabletFormSelectors.deviceModel).click();
        cy.xpath(tabletFormSelectors.deviceModelIPadPro).click();
        cy.xpath(tabletFormSelectors.deviceOS).click();
        cy.xpath(tabletFormSelectors.deviceOS14).click();
        cy.xpath(tabletFormSelectors.submitButton).click();
    }

    checkThankYouScreen(){
        cy.xpath(thankYouScreenSelectors.thankYouMessage).should('be.visible');
        cy.xpath(thankYouScreenSelectors.backButton).should('be.visible').click();
    }
}

export default TabletForm;
