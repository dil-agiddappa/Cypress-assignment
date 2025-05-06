class LoginPage {
    visit() {
        cy.visit('/');
    }

    enterUsername(username) {
        cy.get('.nav-action-inner').click({force:true})
        cy.get('#ap_email_login').type(username);
        cy.get('input[type="submit"]').first()

    }

    enterPassword(password) {
        cy.get('#password').type("Hasini@955");
    }

    clickLogin() {
        cy.get('#login-button').click();
    }
    login(username, password) {
        this.visit();
        this.enterUsername(username);
        this.enterPassword(password);
        this.clickLogin();
    }
    assertLoginSuccess() {
        cy.url().should('include', '/dashboard');
        cy.contains('Welcome').should('be.visible');
    }
    assertLoginFailure() {
        cy.contains('Invalid credentials').should('be.visible');
    }
}

export default new LoginPage();
