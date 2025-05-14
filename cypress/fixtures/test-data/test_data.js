const { faker } = require("@faker-js/faker");

const testData = {
  randomFirstName: faker.person.firstName(),
  randomLastName: faker.person.lastName(),
  randomEmpId: faker.string.numeric(5),
  randomUsername: faker.internet.username(),
};

module.exports = testData;
