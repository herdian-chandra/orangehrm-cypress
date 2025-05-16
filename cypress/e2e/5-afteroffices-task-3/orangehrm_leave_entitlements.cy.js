// test data
const testData = require("../../fixtures/test-data/test_data");

let username = "Admin";
let password = "admin123";
let randomFirstName = testData.randomFirstName;
let randomLastName = testData.randomLastName;
let randomEmpId = testData.randomEmpId;
let randomUsername = testData.randomUsername;

//--------------------------------------- locator ---------------------------------------//
//----- login -----//
let usernameXpath = "//input[@placeholder='Username']";
let passwordXpath = "//input[@placeholder='Password']";
let loginButtonXpath = "//button[@type='submit']";
let titleDashboardXpath =
  "//h6[@class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']";
//----- Add Employee -----//
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
//----- Add Employee Account -----//
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
//----- Leave entitlement -----//
let leaveMenuXpath =
  "*//ul/li//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name' and contains(.,'Leave')]";
let entitlementDropdownXpath =
  "//span[@class='oxd-topbar-body-nav-tab-item' and contains(.,'Entitlements')]";
let selectAddEntitlementXpath =
  "*//ul/li/a[@role='menuitem' and contains(.,'Add Entitlements')]";
let titleAddLeaveEntitlementXpath =
  "//p[@class='oxd-text oxd-text--p orangehrm-main-title']";
// let employeeNameXpath = "//input[@placeholder='Type for hints...']"; //duplicate
let suggestEmplyeeNameXpath =
  "//div[@role='option' and @class='oxd-autocomplete-option'][1]/span";
let leaveTypeDropdownXpath =
  "//div[@class='oxd-select-text-input' and contains(.,'Select')]";
let selectLeaveTypeDropdownXpath =
  "//div[@role='option' and @class='oxd-select-option']/span[contains(.,'CAN - Personal')]";
let leavePeriodDropdownXpath =
  "//div[@class='oxd-input-group__label-wrapper']/following-sibling::div//*/div[@class='oxd-select-text-input' and contains(.,'2025-01-01 - 2025-24-08')]";
let selectLeavePeriodDropdownXpath =
  "//div[@role='option' and @class='oxd-select-option']/span[contains(.,'2025-25-08 - 2026-24-08')]";
let ammountOfEntitlementXpath =
  "//div[@class='oxd-input-group__label-wrapper']/following-sibling::div/input";
let buttonSaveAddEntitlementXpath = "//button[@type='submit']";
let buttonConfirmXpath = "//button[@type='button' and contains(.,'Confirm')]";
let titleLeaveEntitlementXpath = "//h5[contains(.,'Leave Entitlements')]";

//--------------------------------------- Test Started ---------------------------------------//

describe("Add New Employee, OrangeHRM", async function () {
  beforeEach(function () {
    cy.wait(1000);
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.wait(1000);
  });

  it("Add New Employee", async function () {
    cy.wait(3000); //hardwait
    //--- login as an Admin ---//
    await cy.xpath(usernameXpath).should("be.visible").clear().type(username);
    await cy.xpath(passwordXpath).should("be.visible").clear().type(password);
    await cy.xpath(loginButtonXpath).should("be.visible").click();
    await cy
      .xpath(titleDashboardXpath)
      .should("be.visible")
      .contains("Dashboard");
    //--- add new employee (PIM -> Add Employee) ---//
    cy.wait(5000); //hardwait
    await cy.xpath(pimMenuXpath).should("be.visible").click();
    await cy.xpath(addEmployeePimMenuXpath).should("be.visible").click();
    await cy
      .xpath(titleAddEmployeeXpath)
      .should("be.visible")
      .contains("Add Employee");
    await cy
      .xpath(firstNameAddEmployeeXpath)
      .should("be.visible")
      .clear()
      .type(randomFirstName);
    await cy
      .xpath(lastNameAddEmployeeXpath)
      .should("be.visible")
      .clear()
      .type(randomLastName);
    await cy
      .xpath(employeeIdAddEmployeeXpath)
      .should("be.visible")
      .clear()
      .type(randomEmpId);
    await cy.xpath(buttonSaveAddEmployeeXpath).should("be.visible").click();
    await cy
      .xpath(titlePersonalDetailsXpath)
      .should("be.visible")
      .contains("Personal Details");
    //--- create a new account from new employee (Admin -> Users -> Add) ---//
    cy.wait(5000); //hardwait
    await cy.xpath(adminMenuXpath).should("be.visible").click();
    await cy.xpath(addButtonXpath).should("be.visible").click();
    await cy.xpath(titleAddUserXpath).should("be.visible").contains("Add User");
    await cy.xpath(userRoleDropdownXpath).should("be.visible").click();
    await cy.xpath(userRoleSelectXpath).contains("ESS").click();
    await cy
      .xpath(employeeNameXpath)
      .should("be.visible")
      .clear()
      .type(randomFirstName);
    await cy.wait(1000);
    await cy.get(suggestNameXPath).contains(randomFirstName).click();
    await cy.xpath(statusDropdownXpath).should("be.visible").click();
    await cy.xpath(statusSelectXpath).contains("Enabled").click();
    await cy
      .xpath(usernameAccountXpath)
      .should("be.visible")
      .clear()
      .type(randomUsername);
    await cy
      .xpath(setPasswordXpath)
      .should("be.visible")
      .clear()
      .type("Asdf123!!");
    await cy
      .xpath(setConfirmPasswordXpath)
      .should("be.visible")
      .clear()
      .type("Asdf123!!");
    await cy.xpath(buttonSaveAddUserXpath).should("be.visible").click();
    cy.wait(5000); //hardwait
    await cy
      .xpath(titleSystemUserXpath)
      .should("be.visible")
      .contains("System Users");
    cy.wait(5000); //hardwait
  });

  it("Add New Entitlement for New Employee Entitlement", async function () {
    cy.wait(3000); //hardwait
    //--- login as an Admin ---//
    await cy.xpath(usernameXpath).should("be.visible").clear().type(username);
    await cy.xpath(passwordXpath).should("be.visible").clear().type(password);
    await cy.xpath(loginButtonXpath).should("be.visible").click();
    await cy
      .xpath(titleDashboardXpath)
      .should("be.visible")
      .contains("Dashboard");
    //--- Add Leave entitlement ---//
    cy.wait(5000); //hardwait
    await cy.xpath(leaveMenuXpath).should("be.visible").click();
    await cy.xpath(entitlementDropdownXpath).should("be.visible").click();
    await cy
      .xpath(selectAddEntitlementXpath)
      .contains("Add Entitlements")
      .click();
    await cy
      .xpath(titleAddLeaveEntitlementXpath)
      .should("be.visible")
      .contains("Add Leave Entitlement");
    cy.wait(5000); //hardwait
    await cy
      .xpath(employeeNameXpath)
      .should("be.visible")
      .clear()
      .type(randomFirstName);
    await cy.xpath(suggestEmplyeeNameXpath).contains(randomFirstName).click();
    await cy.xpath(leaveTypeDropdownXpath).should("be.visible").click();
    await cy.xpath(selectLeaveTypeDropdownXpath).click();
    await cy.xpath(leavePeriodDropdownXpath).should("be.visible").click();
    await cy.xpath(selectLeavePeriodDropdownXpath).click();
    await cy
      .xpath(ammountOfEntitlementXpath)
      .should("be.visible")
      .clear()
      .type("20");
    await cy.xpath(buttonSaveAddEntitlementXpath).should("be.visible").click();
    cy.wait(5000); //hardwait
    await cy.xpath(buttonConfirmXpath).should("be.visible").click();
    cy.wait(5000); //hardwait
    await cy
      .xpath(titleLeaveEntitlementXpath)
      .should("be.visible")
      .contains("Leave Entitlements");
    cy.wait(5000); //hardwait
  });
});
