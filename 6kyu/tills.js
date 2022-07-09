/*

There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

input
customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.
output
The function should return an integer, the total time required.


*/

//P: customers array, and tills number
//R: min time needed
//E: queueTime([2,3,10], 2)
//P: we create Array of n length and fill with zero, then we loop through customers array, find the index of the min value, then add next value to that spot, end we return math.max of that array

function queueTime(customers, n) {
  let tills = Array(n).fill(0);
  for (let i = 0; i < customers.length; i++) {
    let mn = tills.indexOf(Math.min.apply(null, tills));
    tills[mn] += customers[i];
  }
  return Math.max.apply(null, tills);
}
