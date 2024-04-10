class JobBoardPage {
  get jobTitle() {
    return cy.get('[name="job-title"]');
  }
  get searchBtn() {
    return cy.get('[type="submit"]');
  }
  get searchResultsBox() {
    return cy.get('[class="proposition_box_list box_desc_Wrapper"]');
  }
  get javascriptCheckbox() {
    return cy.get('[value="javascript"]');
  }
  get applyNowBtn() {
    return cy.get(".bold.btn-career-apply");
  }
  get firstNameInput() {
    return cy.get('[name="input_9.3"]');
  }
  get lastNameInput() {
    return cy.get("#input_3_9_6");
  }
  get emailInput() {
    return cy.get("#input_3_3");
  }
  get phoneNumberInput() {
    return cy.get('[name="input_10"]');
  }
  get chooseFileBtn() {
    return cy.get("#input_3_4");
  }
  get submitBtn() {
    return cy.get("#gform_submit_button_3");
  }
}

export default new JobBoardPage();