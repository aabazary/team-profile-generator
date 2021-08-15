const Intern = require('../lib/intern');

test("Expect testValue as school", () => {
    const testValue = "school";
    const event = new Intern("Akon", 9, 'test@gmail.com', testValue);
    expect(event.school).toBe(testValue);
  });

  test("Expect testValue as getRole", () => {
    const testValue = "Intern";
    const event = new Intern("Akon", 9, "test@gmail.com");
    expect(event.getRole()).toBe(testValue);
  });