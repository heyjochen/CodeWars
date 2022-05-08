/*
Frank just bought a new calculator. But, this is no normal calculator. This is a 'Sticky Calculator.

Whenever you add add, subtract, multiply or divide two numbers the two numbers first stick together:

For instance:

50 + 12 becomes 5012
and then the operation is carried out as usual:

(5012) + 12 = 5024
Task
It is your job to create a function which takes 3 parameters:

stickyCalc(operation, val1, val2)
which works just like Frank's sticky calculator

Some Examples
stickyCalc('+', 50, 12)     // Output: (5012 + 12) = 5024
stickyCalc('-', 7, 5)       // Output: (75 - 5) = 70
stickyCalc('*', 13, 20)     // Output: (1320 * 20 ) = 26400
stickyCalc('/', 10, 10)     // Output: (1010 / 10) = 101

Note
The calculator only works for positive integers only.
The calculator rounds any non-integer before operating.
The calculator rounds any output to nearest integer.
For example:

stickyCalc('/', 12.1, 6.8), 18);   
12.1 and 6.8 are rounded to 12 and 7 respectively & they 'stick together' to make 127.

*/

//P: operation, val1, val2, first val1 concat val2 then depending on operation either add or ....
//R: number that is rounded to closest integer
//E: stickyCalc('/', 12.1, 6.8), 18);   
//P: val1val2 operation val2 both math.round()


function stickyCalc (operation, val1, val2){
    val1 = Number( Math.round(val1).toString() + val2);
    
    switch(operation){
        case '+':
          return Math.round(val1 + val2);
        case '-':
          return Math.round(val1 - val2);
        case '*':
          return Math.round(val1 * val2);
        default:
          return Math.round(val1 / val2);
    }
  }