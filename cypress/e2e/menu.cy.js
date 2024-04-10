import HomePage from "../fixtures/POM/home.page";

describe("Platform menu navigation", () => {
  beforeEach(() => {
    cy.visit("");
  });

  it("Verifies Platform Clients Tab existance", () => {
    HomePage.clientsTab.click();
    cy.url().should("include", "clients");
  });

  it("Verifies Consulting Solutions existance", () => {
    HomePage.clientsTab.trigger("mouseover");
    HomePage.consultingSolutionsDropdownItem.click({ force: true });
    cy.url().should("include", "consulting-solutions");
  });

  it("Verifies Staffing Solutions existance", () => {
    HomePage.clientsTab.trigger("mouseover");
    HomePage.staffingSolutionsDropdownItem.click({ force: true });
    cy.url().should("include", "staffing-solutions");
  });
});