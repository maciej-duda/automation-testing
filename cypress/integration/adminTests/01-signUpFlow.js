import LoginPage from '../../pageObjects/signUpFlow/loginPage';
import SplashPage from '../../pageObjects/signUpFlow/splashPage';
import SignUpPage from '../../pageObjects/signUpFlow/signUpPage';
import HomePage from '../../pageObjects/signUpFlow/homePage';
import TestProgram from '../../pageObjects/signUpFlow/testProgram';
import TesterProfile from '../../pageObjects/signUpFlow/testerProfile';
import RegisterPage from '../../pageObjects/signUpFlow/registerPage';
import TabletForm from '../../pageObjects/signUpFlow/tabletForm';
import ThankYou from '../../pageObjects/signUpFlow/thankYou';

const splashPage = new SplashPage();
const loginPage = new LoginPage();
const signUpPage = new SignUpPage();
const homePage = new HomePage();
const testProgram = new TestProgram();
const testerProfile = new TesterProfile();
const registerPage = new RegisterPage();
const tabletForm = new TabletForm();
const thankYou = new ThankYou();

describe('Testing the sign up workflow', () => {

	it('Visit main page', () => {
		splashPage.visitTestPage();
		splashPage.checkIfBasicElementsAreDisplayed();
	});

	it('Go to the sign up page', () => {
		splashPage.clickSignUpLink();
	});

	it('Fill out the form as a Teacher type account', () => {
		signUpPage.checkIfBasicElementsAreDisplayed();
		signUpPage.fillFormAsTeacher('Cypress', 'Teacher2Account', Cypress.env('testUserEmail'));
	});

	it('Fill out the tablet form and go back to the main page', () => {
		tabletForm.fillDeviceForm();
		thankYou.checkThankYouScreen();
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
		registerPage.fillPasswordField();
		homePage.verifyIfElementsAreDisplayed();
	})
});
