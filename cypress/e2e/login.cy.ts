describe('Login', () => {
  it('should login', ()=> {
    cy.visit('http://localhost:3000')
    cy.get('[data-test=email-input]').type('hello@hello.com')
    cy.get('[data-test=password-input]').type('password')
    cy.get('[data-test=remember-me]').check()
    cy.get('[data-test=submit-button]').click()
  })

  it('should sign out', ()=> {
    cy.contains('Open user menu').click()
    cy.contains('Sign out').click()
  })
})