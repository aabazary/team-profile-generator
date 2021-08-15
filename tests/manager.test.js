const Manager = require('../lib/manager');

test("Expect testValue as officeNumber", () => {
    const testValue = "officeNumber";
    const event = new Manager("Akon", 9, 'test@gmail.com', testValue);
    expect(event.officeNumber).toBe(testValue);
  });

  test("Expect testValue as getRole", () => {
    const testValue = "Manager";
    const event = new Manager("Akon", 9, "test@gmail.com");
    expect(event.getRole()).toBe(testValue);
  });