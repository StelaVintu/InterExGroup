class HomePage{
    get jobBoardBtn(){return cy.get('.nav-item.dropdown.job_board.dropdown_with_link.menu-item')};
    get clientsTab(){return cy.contains('Clients')};
    get consultingSolutionsDropdownItem(){return cy.contains('Consulting Solutions')};
    get staffingSolutionsDropdownItem(){return cy.contains('Staffing Solutions')}
  }

  export default new HomePage