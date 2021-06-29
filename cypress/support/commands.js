// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("loginUsingApi", (username, password) => {
    cy.request({
      method: "POST",
      url: "https://uat.api.schoolified.com/api/auth/login",
     

      body: {
        username: username,
        password: password
      },
    }).then((resp) => {
      expect(resp.status).to.eq(200);
      cy.log("0." + JSON.stringify(resp.body));
      
      cy.log("1. " + resp.body.result.token);
      window.localStorage.setItem("token", resp.body.result.token);
    });
  });

  Cypress.Commands.add("loginAsAdminUsingApi", () => {
    cy.fixture(`teacherCredentials.json`).then((teacherCredentials) => {
      cy.loginUsingApi(Cypress.env('testUserEmail'), teacherCredentials.password);
    });
  });