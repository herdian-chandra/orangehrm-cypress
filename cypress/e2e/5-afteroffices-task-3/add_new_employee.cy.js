// test data
let username = "Admin";
let password = "admin123";

//------------- locator -------------//
/**
 * login
 */
let usernameXpath = "//input[@placeholder='Username']";
let passwordXpath = "//input[@placeholder='Password']";
let loginButtonXpath = "//button[@type='submit']";
let titleDashboardXpath =
  "//h6[@class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']";
/**
 * Add Employee
 */
let pimMenuXpath =
  "*//ul/li//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name' and contains(.,'PIM')]";
let addEmployeePimMenuXpath =
  "*//ul/li/a[@class='oxd-topbar-body-nav-tab-item' and contains(.,'Add Employee')]";
let titleAddEmployeeXpath =
  "//h6[@class='oxd-text oxd-text--h6 orangehrm-main-title' and contains(.,'Add Employee')]";
let firstNameAddEmployeeXpath = "//input[@placeholder='First Name']";
let lastNameAddEmployeeXpath = "//input[@placeholder='Last Name']";
let employeeIdAddEmployeeXpath =
  "//div[@class='oxd-input-group__label-wrapper']/following-sibling::div/input[@class='oxd-input oxd-input--active']";
let buttonSaveAddEmployeeXpath =
  "//button[@type='submit' and contains(.,'Save')]";
let titlePersonalDetailsXpath =
  "//h6[@class='oxd-text oxd-text--h6 orangehrm-main-title' and contains(.,'Personal Details')]";
/**
 * Add Employee Account
 */
let adminMenuXpath =
  "*//ul/li//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name' and contains(.,'Admin')]";
let addButtonXpath = "//button[@type='button' and contains(.,'Add')]";
let titleAddUserXpath =
  "//h6[@class='oxd-text oxd-text--h6 orangehrm-main-title' and contains(.,'Add User')]";
let userRoleDropdownXpath =
  "//div[@class='oxd-input-group__label-wrapper' and contains(.,'User Role')]/following-sibling::*//div[@class='oxd-select-text-input']";
let userRoleSelectXpath = "//div[@role='option' and contains(.,'ESS')]";
let employeeNameXpath = "//input[@placeholder='Type for hints...']";
let statusDropdownXpath =
  "//div[@class='oxd-input-group__label-wrapper' and contains(.,'Status')]/following-sibling::*//div[@class='oxd-select-text-input']";
let statusSelectXpath = "//div[@role='option' and contains(.,'Enabled')]";
let usernameAccountXpath =
  "//div[@class='oxd-input-group__label-wrapper' and contains(.,'Username')]/following-sibling::div/input";
let suggestNameXPath = ".oxd-autocomplete-dropdown > :nth-child(1) > span";
let setPasswordXpath =
  "//*[@id='app']/div[1]/div[2]/div[2]/div/div/form/div[2]/div/div[1]/div/div[2]/input";
let setConfirmPasswordXpath =
  "//div[@class='oxd-input-group__label-wrapper' and contains(.,'Confirm Password')]/following-sibling::div/input";
let buttonSaveAddUserXpath = "//button[@type='submit']";
let titleSystemUserXpath =
  "//h5[@class='oxd-text oxd-text--h5 oxd-table-filter-title' and contains(.,'System Users')]";

describe("Basic UI Automation, OrangeHRM", async function () {
  beforeEach(() => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  });

  it("Add New Employee", async function () {
    /**
     * login as an Admin
     */
    cy.xpath(usernameXpath).should("be.visible").clear().type(username);
    cy.xpath(passwordXpath).should("be.visible").clear().type(password);
    cy.xpath(loginButtonXpath).should("be.visible").click();
    await cy
      .xpath(titleDashboardXpath)
      .should("be.visible")
      .contains("Dashboard");
    /**
     * add new employee (PIM -> Add Employee)
     */
    cy.xpath(pimMenuXpath).should("be.visible").click();
    cy.xpath(addEmployeePimMenuXpath).should("be.visible").click();
    cy.xpath(titleAddEmployeeXpath)
      .should("be.visible")
      .contains("Add Employee");
    cy.xpath(firstNameAddEmployeeXpath)
      .should("be.visible")
      .clear()
      .type("randomFN1");
    cy.xpath(lastNameAddEmployeeXpath)
      .should("be.visible")
      .clear()
      .type("randomLN1");
    cy.xpath(employeeIdAddEmployeeXpath)
      .should("be.visible")
      .clear()
      .type("123162");
    cy.xpath(buttonSaveAddEmployeeXpath).should("be.visible").click();
    await cy
      .xpath(titlePersonalDetailsXpath)
      .should("be.visible")
      .contains("Personal Details");
    /**
     * create a new account from new employee (Admin -> Users -> Add)
     */
    cy.xpath(adminMenuXpath).should("be.visible").click();
    cy.xpath(addButtonXpath).should("be.visible").click();
    cy.xpath(titleAddUserXpath).should("be.visible").contains("Add User");
    cy.xpath(userRoleDropdownXpath).should("be.visible").click();
    cy.xpath(userRoleSelectXpath).contains("ESS").click();
    cy.xpath(employeeNameXpath).should("be.visible").clear().type("randomFN1");
    // cy.xpath(suggestNameXPath).contains("randomFN1 randomLN1");
    cy.wait(1000);
    cy.get(suggestNameXPath).contains("randomFN1 randomLN1").click();
    cy.xpath(statusDropdownXpath).should("be.visible").click();
    cy.xpath(statusSelectXpath).contains("Enabled").click();
    cy.xpath(usernameAccountXpath)
      .should("be.visible")
      .clear()
      .type("randomFN1uname1");
    cy.xpath(setPasswordXpath).should("be.visible").clear().type("Asdf1234");
    cy.xpath(setConfirmPasswordXpath)
      .should("be.visible")
      .clear()
      .type("Asdf1234");
    cy.xpath(buttonSaveAddUserXpath).should("be.visible").click();
  });
});
