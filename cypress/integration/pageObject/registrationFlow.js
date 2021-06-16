import LoginPage from '../../pageObjects/loginPage';
import SplashPage from '../../pageObjects/splashPage';
import SignUpPage from '../../pageObjects/signUpPage';
import HomePage from '../../pageObjects/homePage';
import TestProgram from '../../pageObjects/testProgram';
import TesterProfile from '../../pageObjects/testerProfile';
import RegisterPage from '../../pageObjects/registerPage';

const splashPage = new SplashPage();
const loginPage = new LoginPage();
const signUpPage = new SignUpPage();
const homePage = new HomePage();
const testProgram = new TestProgram();
const testerProfile = new TesterProfile();
const registerPage = new RegisterPage();

describe('Testing the sign up workflow', () => {
	beforeEach(() => {
		cy.clearLocalStorage();
		cy.clearCookies();
	  })

	it('Visit main page', () => {
		splashPage.visitTestPage();
		splashPage.checkIfBasicElementsAreDisplayed();
	});

	it('Go to the sign up page', () => {
		splashPage.visitTestPage();
		splashPage.clickSignUpLink();
	});

	it('Fill out the form as a Teacher type account', () => {
		signUpPage.checkIfBasicElementsAreDisplayed();
		signUpPage.fillFormAsTeacher('Cypress', 'Automation', Cypress.env('testUserEmail'));
	});

	it('Fill out the tablet form and go back to the main page', () => {
		signUpPage.fillDeviceForm();
		signUpPage.checkThankYouScreen();
		splashPage.checkIfBasicElementsAreDisplayed();
	});

	it('Login as a System Admin', () => {
		loginPage.visitTestPage();
		loginPage.verifyIfElementsAreDisplayed();
		loginPage.fillCredentialsInputs(Cypress.env('SALogin'), Cypress.env('SAPassword'));
		loginPage.clickSubmitButton();
	});

	it('Go to the Test Program and accept test user', () => {
		homePage.verifyIfElementsAreDisplayed();
		homePage.visitTestProgram();
		testProgram.verifyIfElementsAreDisplayed();
		testProgram.changeToWaitingListTab();
		testProgram.openTesterProfile(Cypress.env('testUserEmail'));
		testerProfile.verifyIfElementsAreDisplayed();
		testerProfile.approveTester();
		testerProfile.saveInviteCode();
		homePage.logoutFromAccount();
	});

	it('Register an account with Invite Code', () => {
		splashPage.visitTestPage();
		splashPage.inputInviteCode();
		registerPage.checkIfInformationsAreLoaded(Cypress.env('testUserEmail'));
		registerPage.fillPasswordField();
		homePage.verifyIfElementsAreDisplayed();
	})
});
