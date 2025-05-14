describe("Handling Element", async () => {
  beforeEach(() => {
    cy.visit("https://demo.automationtesting.in/Register.html");
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.wait(2000);
  });

  it("Checkbox", async () => {
    let checkbox = "//input[@type='checkbox']";

    cy.xpath(checkbox).first().check().should("be.checked");
    cy.wait(1000);
    cy.xpath(checkbox).last().check().should("be.checked");
    cy.wait(1000);
    cy.xpath(checkbox).check("Movies").should("be.checked");
    cy.wait(1000);
    cy.xpath(checkbox).first().uncheck().should("be.unchecked");
  });
});
