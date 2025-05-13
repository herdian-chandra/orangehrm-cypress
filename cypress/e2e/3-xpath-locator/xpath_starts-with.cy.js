describe("Xpath Locator Techniques", () => {
  beforeEach(() => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  });

  it("Starts-With Xpath", () => {
    /**
     * get username field using starts with
     */
    cy.xpath("//input[starts-with(@placeholder,'User')]")
      .should("be.visible")
      .clear()
      .type("admin");
    /**
     * get password field using starts with
     */
    cy.xpath("//input[starts-with(@placeholder,'Pass')]")
      .should("be.visible")
      .clear()
      .type("admin123");

    cy.xpath(
      "//div[@class='orangehrm-login-footer']/parent::div//button[@type='submit']"
    )
      .should("be.visible")
      .click();
  });
});
