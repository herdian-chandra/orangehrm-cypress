describe("Xpath Locator Techniques", () => {
  beforeEach(() => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  });

  it("Parent Xpath", () => {
    /**
     * get username field using parent from footer locator
     */
    cy.xpath(
      "//div[@class='orangehrm-login-footer']/parent::div//div/input[@placeholder='Username']"
    )
      .should("be.visible")
      .clear()
      .type("admin");
    /**
     * get password field using parent from footer locator
     */
    cy.xpath(
      "//div[@class='orangehrm-login-footer']/parent::div//div/input[@placeholder='Password']"
    )
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
