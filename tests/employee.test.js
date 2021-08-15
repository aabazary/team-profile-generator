const Employee = require('../lib/employee');

test("Expect event to create an object ", () => {
    const event = new Employee();
    expect(typeof(event)).toBe("object");   
  });
  
  test("Expect testValue as getName", () => {
    const testValue = "Akon";
    const event = new Employee(testValue);
    expect(event.getName()).toBe(testValue);
  });
  
  test("Expect testValue as getId", () => {
    const testValue = 9;
    const event = new Employee("Akon", testValue);
    expect(event.getId()).toBe(testValue);
  });
  
  test("Expect testValue as getEmail", () => {
    const testValue = "test@gmail.com";
    const event = new Employee("Akon", 9, testValue);
    expect(event.getEmail()).toBe(testValue);
  });
  
  test("Expect testValue as getRole", () => {
    const testValue = "Employee";
    const event = new Employee("Akon", 9, "test@gmail.com");
    expect(event.getRole()).toBe(testValue);
  });