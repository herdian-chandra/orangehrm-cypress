describe("Handling Element", async () => {
  beforeEach(() => {
    cy.visit("https://jqueryui.com/datepicker/");
    cy.wait(1000);
  });

  it("Datepicjer Jquery direct typing on the field", async () => {
    /**
     * get the iframe first
     * then, wrap it
     * after that, get the xpath of calendar
     */
    await cy
      .get(".demo-frame")
      .its("0.contentDocument.body")
      .then(cy.wrap)
      .xpath("//input[@id='datepicker']")
      // .click()
      .type("10/10/2030");
  });

  it.only("Datepicjer Jquery pick spesicif date on the field", async () => {
    /**
     * get the iframe first
     * then, wrap it
     * after that, get the xpath of calendar
     */
    cy.get(".demo-frame")
      .its("0.contentDocument.body")
      .should("not.be.empty")
      .then(cy.wrap)
      .xpath("//input[@id='datepicker']")
      .click();

    cy.get(".demo-frame")
      .its("0.contentDocument.body")
      .should("not.be.empty")
      .then(cy.wrap)
      .xpath("//a[@class='ui-datepicker-prev ui-corner-all']")
      .click();

    cy.get(".demo-frame")
      .its("0.contentDocument.body")
      .should("not.be.empty")
      .then(cy.wrap)
      .xpath("//a[@class='ui-state-default' and text()='18']")
      .click();
  });
});
