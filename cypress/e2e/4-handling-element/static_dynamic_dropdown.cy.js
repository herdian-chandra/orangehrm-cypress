let staticDropdown = "//select[@id='Skills']";

describe("Handling Element", () => {
  beforeEach(() => {
    cy.wait(3000);
    cy.visit("https://demo.automationtesting.in/Register.html");
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.wait(3000);
  });

  it("Static Dropdown by Index", () => {
    cy.xpath(staticDropdown).should("be.visible").select(4); //expected Android
  });

  it("Static Dropdown by Visible Text", () => {
    cy.xpath(staticDropdown).should("be.visible").select("Configuration"); //expected Configuration
  });

  it("Static Dropdown by Value", () => {
    cy.xpath(staticDropdown).should("be.visible").select("AutoCAD"); //expected AutoCAD
  });

  it.only("Static Dropdown Looping", () => {
    let newArrayAssertion = [];
    let assertDropdown = ["Android", "C", "C++", "CSS"];

    cy.xpath(staticDropdown)
      .should("be.visible")
      .find("option")
      .each(function (optionDropdown) {
        // cy.log(optionDropdown);
        const choosenDropdown = optionDropdown.val();
        newArrayAssertion.push(choosenDropdown);
      });

    // cy.log(newArrayAssertion);
    cy.wrap(newArrayAssertion).should("include.members", assertDropdown);
  });

  /**
   *
   * for Dynamic Dropdown
   * add some hard wait cy.wait
   * to waiting the reponse from API is finished send request
   */
});
