/* Problem 01 * older than 18?*/

const yourage = (age) => 
    age > 18 ? "You are good to go!" 
: "Sorry! You must be 18 or older!";
/* test */
console.log(yourage(42))

/* Problem 02 */

const checkraining = (rain) => 
rain == true ? "Get your rain jacket!" 
: "No rain on today's forecast!";
/* test */
console.log(checkraining(true))
console.log(checkraining(false))

/* Problem 3 */

const checknumber = (num) => 
    num %2 ==0  ? "the number given is even!" 
    : "the number given is odd!";
    /* test */
    console.log(checknumber(10))
    console.log(checknumber(11))

    /* Problem 4 */

const CompareNum = (num1,num2) => 
    num1> num2 ? "<<NUMBER HERE>> is more than <<SECOND NUMBER HERE>>!" 
    : "<<NUMBER HERE>> is less than <<SECOND NUMBER HERE>>!";
    /* test */
    console.log(CompareNum(10,20))
    console.log(CompareNum(11,5))

const CompareNum1 = (num1, num2) => 
    num1 > num2 
        ? `${num1} is more than ${num2}!` 
        : `${num1} is less than ${num2}!`;
    
    /* Test */
    console.log(CompareNum1(55, 22)); // Output: "10 is less than 20!"
    console.log(CompareNum1(2, 110));  // Output: "11 is more than 5!"
    