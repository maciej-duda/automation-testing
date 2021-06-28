const selectors = {
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
        cy.xpath(selectors.formHeader).should('be.visible');
        cy.xpath(selectors.trueCheckbox).click();
        cy.xpath(selectors.deviceBrand).click();
        cy.xpath(selectors.deviceBrandIPad).click();
        cy.xpath(selectors.deviceModel).click();
        cy.xpath(selectors.deviceModelIPadPro).click();
        cy.xpath(selectors.deviceOS).click();
        cy.xpath(selectors.deviceOS14).click();
        cy.xpath(selectors.submitButton).click();
    }
}
export default TabletForm;
