describe("Xpath Locator Techniques", () => {
  beforeEach(() => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  });

  it("Sibling Xpath", () => {
    /**
     * get username field using following sibling
     * xpath 1 | preceding-sibling
     */
    cy.xpath(
      "//div[@class='oxd-form-row']/preceding-sibling::div//div/input[@placeholder='Username']"
    )
      .should("be.visible")
      .clear()
      .type("admin");
    /**
     * get password field using following sibling
     * xpath 1 | following-sibling
     */
    cy.xpath(
      "//div[@class='oxd-form-row']/following-sibling::div//div/input[@placeholder='Password']"
    )
      .should("be.visible")
      .clear()
      .type("admin123");
  });
});
