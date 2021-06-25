const selectors = {
	userEmail: "//td[@class='ant-descriptions-item']",
    statusWaiting: "//td[@class='ant-descriptions-item'][contains(.,'StatusWAITING')]",
    approveButton: "//button[@type='button'][contains(.,'Approve')]",
    statusActive: "//td[@class='ant-descriptions-item'][contains(.,'StatusACTIVE')]",
    inviteCode: "(//h2[contains(@class,'ant-typography')])[2]",
};

class TesterProfile {

    verifyIfElementsAreDisplayed() {
		cy.xpath(selectors.userEmail).should('contains', Cypress.env('testUserEmail'));
        cy.xpath(selectors.statusWaiting).should('be.visible');
	}

	approveTester() {
		cy.xpath(selectors.approveButton).click();
        cy.xpath(selectors.statusActive).should('be.visible');
	}

    saveInviteCode() {
        cy
        .xpath(selectors.inviteCode)
        .invoke('text')
        .then(text => {
          const inviteCode = text;
          cy.writeFile("cypress/fixtures/inviteCode.json", {inviteCode: text});
        }); 
    }
}
export default TesterProfile;
