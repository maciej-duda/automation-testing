const thankYouScreenSelectors = {
    thankYouMessage: "//h4[@class='ant-typography text-bold color-info'][contains(.,'Thank you')]",
    backButton: "//a[contains(.,'Back')]"
};

class ThankYou {
    checkThankYouScreen(){
        cy.xpath(thankYouScreenSelectors.thankYouMessage).should('be.visible');
        cy.xpath(thankYouScreenSelectors.backButton).should('be.visible').click();
    }
}

export default ThankYou;
