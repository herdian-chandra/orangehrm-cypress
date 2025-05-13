describe("Handling Element", async () => {
  beforeEach(() => {
    cy.visit("https://demo.automationtesting.in/Register.html");
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    cy.wait(2000);
  });

  it("Auto Suggest Dropdown/Searching", async () => {
    let selectCountryXpath =
      "//span[@class='select2-selection select2-selection--single']";
    let activeSelectCountryXpath = "//input[@class='select2-search__field']";
    let chosenCountryXpath = "//ul[@class='select2-results__options']";

    cy.xpath(selectCountryXpath).click();
    cy.xpath(activeSelectCountryXpath).type("I");
    cy.xpath(chosenCountryXpath).contains("Australia").click();
  });
});
