describe('GitHub Homepage Tests', () => {
    beforeEach(() => {
        cy.visit('https://www.github.com')
    })

    it('verifies the GitHub logo is visible', () => {
        cy.get('header .octicon-mark-github').should('be.visible')
    })

    it('verifies the "Sign up" button is functional', () => {
        cy.get('header').should('be.visible')
        cy.contains('a', 'Sign up').should('be.visible').click()
        cy.url().should('include', '/signup')
    })

    it('verifies the "Explore" navigation link redirects correctly', () => {
        cy.get('header').should('be.visible')
        cy.get('button').contains('Enterprise').click()
        cy.get('a').contains('Enterprise platform').click()
        cy.url().should('include', '/enterprise')
    })

    it('verifies the "Pricing" navigation link redirects correctly', () => {
        cy.contains('Pricing').should('be.visible').click()
        cy.url().should('include', '/pricing')
    })
})
