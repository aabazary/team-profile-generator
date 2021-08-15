const Engineer = require('../lib/engineer');

test("Expect testValue as Github username", () => {
    const testValue = "Github username";
    const event = new Engineer("Akon", 9, 'test@gmail.com', testValue);
    expect(event.github).toBe(testValue);
  });

  test("Expect testValue as getRole", () => {
    const testValue = "Engineer";
    const event = new Engineer("Akon", 9, "test@gmail.com");
    expect(event.getRole()).toBe(testValue);
  });