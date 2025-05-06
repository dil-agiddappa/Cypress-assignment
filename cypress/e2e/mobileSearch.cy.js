///<reference types="Cypress" /> 
import SearchPage from '../pages/SearchPage';
import LoginPage from '../pages/LoginPage';

describe('Mobile Search and Title Verification', () => {
    before(() => {
        cy.login('username', 'password');
    
    });

    const mobiles = [
        { name: 'iPhone 14', expectedInTitle: 'iPhone 14' },
        { name: 'Samsung Galaxy S23', expectedInTitle: 'Samsung Galaxy' },
        { name: 'OnePlus 11', expectedInTitle: 'OnePlus' }
    ];

    mobiles.forEach(mobile => {
        it(`should search for ${mobile.name} and verify the title`, () => {
            SearchPage.searchMobile(mobile.name);
            SearchPage.verifyTitleContains(mobile.expectedInTitle);
        });
    });
});
