class Employee {
    constructor(firstname, lastname, salary) {
      let _salary = salary; // simulate private variable
  
      this.firstname = firstname; // public property
      this.lastname = lastname; // public property
      this.getSalary = function() { // simulate public method
        return _salary;
      };
    }
    hello() { // simulate public method
      console.log("Hello "+this.firstname+"!");
    }
  }
  let dang = new Employee('Dang','Red', 10000);



