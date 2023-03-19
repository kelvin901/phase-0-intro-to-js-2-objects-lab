let employee = {
    name: "Kelvin",
    streetAddress: "Moringa School"
  };
  console.log(employee.name); // "Kelvin"
  console.log(employee["streetAddress"]); // "Moringa School"
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value
    };
  }

  let newemployee = {
    name: "Kelvin",
    streetAddress: "Moringa School"
  };
  
  let newEmployee = updateEmployeeWithKeyAndValue(employee, "name", "Alice");
  
  console.log(employee); // { name: "Kelvin", streetAddress: "Moringa School" }
  console.log(newEmployee); // { name: "Alice", streetAddress: "Moringa School" }

  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  let updatedemployee = {
    name: "Kelvin",
    streetAddress: "Moringa School"
  };
  
  destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Alice");
  
  console.log(employee); // { name: "Alice", streetAddress: "Moringa School" }
    
  function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  let nemployee = {
    name: "Kelvin",
    streetAddress: "Moringa School"
  };
  
  let Employee = deleteFromEmployeeByKey(employee, "name");
  
  console.log(employee); // { name: "Kelvin", streetAddress: "Moringa School" }
  console.log(newEmployee); // { streetAddress: "Moringa School" }
    
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }

  let destructedemployee = {
    name: "Kelvin",
    streetAddress: "Moringa School"
  };
  
  destructivelyDeleteFromEmployeeByKey(employee, "name");
  
  console.log(employee); // { streetAddress: "Moringa School" }
  