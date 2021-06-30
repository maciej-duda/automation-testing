import MainPage from '../../pageObjects/courseCreation/mainPage';
import CoursesListingPage from '../../pageObjects/courseCreation/coursesListingPage';
import CourseCreationModal from '../../pageObjects/courseCreation/courseCreationModal';
import CourseCreationPricingModal from '../../pageObjects/courseCreation/courseCreationPricingModal';

const mainPage = new MainPage();
const coursesListingPage = new CoursesListingPage();
const courseCreationModal = new CourseCreationModal();
const courseCreationPricingModal = new CourseCreationPricingModal();


describe('Course creation by the teacher', () => {

    beforeEach('Login as a teacher with the API', () => {
        cy.loginAsTeacherUsingApi();
      });

	it('Login as a teacher and verify if basic elements are visible', () => {
        
        mainPage.visitTestPage();
        mainPage.verifyIfElementsAreDisplayed();
    });

    it('Go to the Courses page', () => {
        mainPage.visitCoursesPage();
        coursesListingPage.verifyIfElementsAreDisplayed();
    });

    it('Fill the course details and proceed to pricing details', () => {
        coursesListingPage.clickCreateCourseButton();
        courseCreationModal.verifyIfElementsAreDisplayed();
        courseCreationModal.fillTheCourseForm();
    });

    it('Fill the pricing details and finalize course creation', () => {
        courseCreationPricingModal.verifyIfElementsAreDisplayed();
        courseCreationPricingModal.fillThePricingForm();
        coursesListingPage.checkIfCourseIsVisible();
    });
});
