import LoginPage from '../../pageObjects/courseCreation/loginPage';

const loginPage = new LoginPage();

describe('Course creation by the teacher', () => {

	it('Login as a teacher', () => {
        loginPage.visitTestPage();
		loginPage.checkIfBasicElementsAreDisplayed();
        loginPage.provideLoginCredentials(Cypress.env('testUserEmail'), '1qazXSW@')
    });
});
