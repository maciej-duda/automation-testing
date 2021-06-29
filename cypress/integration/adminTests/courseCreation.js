import LoginPage from '../../pageObjects/courseCreation/loginPage';

const loginPage = new LoginPage();

describe('Course creation by the teacher', () => {
   beforeEach(() => {
        cy.loginAsAdminUsingApi();
      });

	it('Login as a teacher', () => {
        loginPage.visitTestPage();
		//loginPage.checkIfBasicElementsAreDisplayed();
        //loginPage.provideLoginCredentials('smoke_teacher01@schoolified.com', '1qazXSW@');
        
    });
});
