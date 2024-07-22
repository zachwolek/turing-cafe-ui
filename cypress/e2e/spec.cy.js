describe('Iteration 3 functionality', () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/reservations", {
      statusCode: 200,
      fixture: "mockRezys"
    })
    .visit("http://localhost:3000/")
  });
  it('Should show the header', () => {
    cy.get('h1').contains('Turing Cafe Reservations')
  })
  it('Should show intercepted data on page load', () => {
    cy.get('.resy-container').find('.card').should('have.length', 3)
      .get('.resy-container').first().contains('h2', 'Zach')
      .get('.resy-container').first().contains('.guests', 'Number of guests: 12')
      .get('.resy-container').last().contains('h2', 'Nik')
      .get('.resy-container').first().contains('.guests', 'Number of guests: 4')
  })
  it('Should allow the guest to add a reservation', () => {
    cy.get('form')
      .get("input[name='name']").type("Travis")
      .get("input[name='date']").type("7/22")
      .get("input[name='time']").type("11:00")
      .get("input[name='number']").type("8")
      .get('.submit').click()
      .get('.resy-container').find('.card').should('have.length', 4)
      .get('.resy-container').first().contains('h2', 'Travis')
      .get('.resy-container').first().contains('.guests', 'Number of guests: 12')
      .get('.resy-container').last().contains('h2', 'Nik')
      .get('.resy-container').first().contains('.guests', 'Number of guests: 8')
  })
})