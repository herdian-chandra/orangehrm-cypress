describe("Xpath Locator Techniques", () => {
  beforeEach(() => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  });

  it("Basix Xpath", () => {
    //xpath 1
    cy.xpath("//input[@name='username']")
      .should("be.visible")
      .type("ketik admin");
    //xpath 2
    cy.xpath("//input[contains(@class,'oxd-input')and(@name='username')]")
      .should("be.visible")
      .clear();
    cy.xpath(
      "//input[contains(@class,'oxd-input') and (@name='username')]"
    ).type("Admin");
    //xpath 3
    cy.xpath("//input[@placeholder='Password']")
      .should("be.visible")
      .type("admin123");
  });
});
