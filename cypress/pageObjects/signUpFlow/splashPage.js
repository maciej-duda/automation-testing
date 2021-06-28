const selectors = {
	pageURL: "https://uat.app.schoolified.kitemetric.com/",
	inviteCodeInput: "//input[@placeholder='Invite code'][contains(@id,'inviteCode')]",
	redeemButton: "//button[@type='submit'][contains(.,'Redeem')]",
	waitingListSignUpLink: "//a[@class='font-600'][contains(.,'Sign up for the Waiting List')]",
	loginLink: "//a[@class='font-600'][contains(.,'Log In')]",
	redeemButton: "//span[contains(.,'Redeem')]"
};

class SplashPage {

	visitTestPage() {
		cy.visit(selectors.pageURL);
	}

	checkIfBasicElementsAreDisplayed() {
		cy.url().should('eq', selectors.pageURL);
		cy.xpath(selectors.inviteCodeInput).should('be.visible');
		cy.xpath(selectors.redeemButton).should('be.visible');
	}

	clickSignUpLink() {
        cy.xpath(selectors.waitingListSignUpLink).click();
    }

	inputInviteCode() {
		cy.fixture('inviteCode').then((inviteCode)  => {
		var code = inviteCode.inviteCode;
		cy.xpath(selectors.inviteCodeInput).type(code);
		cy.xpath(selectors.redeemButton).click();
		})
	}
}

export default SplashPage;
