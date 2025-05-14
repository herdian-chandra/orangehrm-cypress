const testData = require("../../fixtures/test-data/test_data");

describe("Test Case using Generated Test Data", () => {
  beforeEach(() => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  });

  it("should use the generated test data correctly", () => {
    // Use the test data directly in your test case
    cy.log("First Name: " + testData.randomFirstName);
    cy.log("Last Name: " + testData.randomLastName);
    cy.log("Employee ID: " + testData.randomEmpId);
    cy.log("Username: " + testData.randomUsername);
  });
});
