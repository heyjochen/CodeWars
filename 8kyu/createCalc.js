/*
Create a calculator

Create an object calculator with three methods:

read() prompts for two values and saves them as object properties.
sum() returns the sum of saved values.
mul() multiplies saved values and returns the result.

let calculator = {
  // ... your code ...
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
*/

// Written as simple object

let calculator = {

    sum () { return this.a + this.b },
    mul () { return this.a * this.b},
    read () { this.a = +prompt('a?'),
              this.b = +prompt('b?')
            }

}

// Written as Constructor function
function Calculator () {
    this.sum = function () {
        return this.a + this.b
    }
    this.mul = function () {
        return this.a * this.b
    }
    this.read = function () {
        this.a = +prompt('a?')
        this.b = +prompt('b?')
    }
}