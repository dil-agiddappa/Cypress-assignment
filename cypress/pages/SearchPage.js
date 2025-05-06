class SearchPage {
    searchMobile(mobileName) {
        cy.get('#search-input').clear().type(mobileName);
        cy.get('#search-button').click();
    }

    verifyTitleContains(expectedTitlePart) {
        cy.title().should('include', expectedTitlePart);
    }
}

export default new SearchPage();
