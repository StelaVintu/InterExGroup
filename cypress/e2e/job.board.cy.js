import faker from "faker";
import testData from "../fixtures/testData.json";
import HomePage from "../fixtures/POM/home.page";
import JobBoardPage from "../fixtures/POM/job.board.page";

const userData = {
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  phoneNumber: faker.phone.phoneNumberFormat(),
};

describe("Job Board", () => {
  beforeEach(() => {
    cy.visit("");
  });

  it("Should be able to search job by title", () => {
    HomePage.jobBoardBtn.click();
    JobBoardPage.jobTitle.type("Engineer");
    JobBoardPage.searchBtn.click();
    JobBoardPage.searchResultsBox.each(($jobListing) => {
      const jobListingText = $jobListing.text();
      if (jobListingText.includes("Engineer")) {
        expect(jobListingText).to.include("Engineer");
      }
    });
  });

  it("Should be able to apply for job", () => {
    HomePage.jobBoardBtn.click();
    JobBoardPage.javascriptCheckbox.click({ force: true });
    JobBoardPage.applyNowBtn.first().click();
    JobBoardPage.firstNameInput.type(userData.firstName);
    JobBoardPage.lastNameInput.type(userData.lastName);
    JobBoardPage.emailInput.type(userData.email);
    JobBoardPage.phoneNumberInput.type(userData.phoneNumber);
    JobBoardPage.chooseFileBtn.selectFile(testData.filePath);
    JobBoardPage.submitBtn; //.click();
    //Assertion:
    // cy.get('[id="gform_confirmation_message_3"]').first().should('contain.text',"Thanks for contacting us! We will get in touch with you shortly");
  });
});
