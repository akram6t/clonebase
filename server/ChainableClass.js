class ChainableClass {
    constructor() {
      // Initialize any properties here
      this.data = [];
    }
  
    method(value) {
      // Perform some operation with the value and store it in the data array
      this.data.push(value);
      return this; // Return the instance of the class for chaining
    }
  
    method1() {
      // Perform some operation with the data and update it
      this.data = this.data.map((item) => item * 2);
      return this; // Return the instance of the class for chaining
    }
  
    method2() {
      // Perform some operation with the data and update it
      this.data = this.data.filter((item) => item > 5);
      return this; // Return the instance of the class for chaining
    }
  
    getResult() {
      // Return the final result after all operations
      return this.data;
    }
  }

module.exports = ChainableClass
  