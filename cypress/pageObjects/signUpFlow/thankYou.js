const selectors = {
    thankYouMessage: "//h4[@class='ant-typography text-bold color-info'][contains(.,'Thank you')]",
    backButton: "//a[contains(.,'Back')]"
};

class ThankYou {
    checkThankYouScreen(){
        cy.xpath(selectors.thankYouMessage).should('be.visible');
        cy.xpath(selectors.backButton).should('be.visible').click();
    }
}
export default ThankYou;
