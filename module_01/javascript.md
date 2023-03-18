#### The Complete Front-End Web Development Crash Course / Module 1: Basic Concepts
# <img src="../imgs/javascript-logo.png" width="30"/> Javascript

> JavaScript is a crucial component of this course. It will be used for creating all logic and adding dynamic functionality to your websites.
> As a frontend developer, you will use it on a daily basis in your career.
> It is essential to learn the basic concepts, which will make a big difference in the next steps of the course.
> Make sure to take your time and don't worry too much if you don't memorize everything, we will come back to many of these concepts later on in the course. Let's dive in.

## Variables
In Javascript, variables are used to store values such as numbers, strings, and objects. Variables are declared using the var keyword, and can be assigned a value using the = operator.

```javascript
var x = 10;
var name = "John";
var person = { firstName: "John", lastName: "Doe" };
```
## Data Types
Javascript has several data types, including `numbers`, `strings`, `booleans`, and `objects`.

- `Numbers`: Javascript has a single type for numbers, which includes both integers and floating point values. Numbers can be written with or without a decimal point.
    ```javascript
    var int = 3;
    ```
- `Strings`: Strings are sequences of characters enclosed in single or double quotes.
    ```javascript
    var str = "Hello, World!";
    ```
- `Booleans`: Booleans represent true or false values.
    ```javascript
    var bool = true;
    ```
- `Objects`: Objects are collections of key-value pairs. They can store any data type, including other objects.
    ```javascript
    var person = {firstName: "John", lastName: "Doe"};
    ```

## Operators
Javascript has several operators that can be used to perform operations on values, including arithmetic, assignment, and comparison operators.

- `Arithmetic operators`: These operators perform arithmetic operations such as addition, subtraction, multiplication, and division.
    ```javascript
    var x = 10;
    var y = 20;
    var z = x + y; // 30
    ```

- `Assignment operators`: These operators are used to assign values to variables. The = operator is the most basic assignment operator, but there are also compound assignment operators that perform an operation and assign the result to the variable in a single step.
    ```javascript
    var x = 10;
    x += 5; // x is now 15
    ```
- `Comparison operators`: These operators compare two values and return a boolean value indicating whether the comparison is true or false.
    ```javascript
    var x = 10;
    var y = 20;
    console.log(x > y); // false
    console.log(x < y); // true
    ```
## Functions
Functions are blocks of code that can be called and executed at any time. They can accept parameters and return a value.

```javascript
function greet(name) {
  console.log("Hello, " + name);
}

greet("John"); // prints "Hello, John"
```
## Control Structures
Control structures are used to control the flow of execution in a program. Javascript has several control structures, including if statements, for loops, and while loops.

- `if statements`: An if statement allows you to execute a block of code if a certain condition is met. For example:
    ```javascript
    let x = 10;
    
    if (x > 5) {
      console.log("x is greater than 5");
    }
    ```
- `if...else statements`: An if...else statement allows you to execute one block of code if a condition is met, and another block of code if the condition is not met. For example:
    ```javascript
    let x = 10;
    
    if (x > 5) {
      console.log("x is greater than 5");
    } else {
      console.log("x is not greater than 5");
    }
    ```
- `switch statements`: A switch statement allows you to execute a block of code based on the value of a certain expression. For example:
    ```javascript
    let x = "red";
    
    switch (x) {
      case "red":
        console.log("x is red");
        break;
      case "blue":
        console.log("x is blue");
        break;
      default:
        console.log("x is neither red nor blue");
    }
    ```
- `for loops`: A for loop allows you to execute a block of code multiple times, with a counter variable that increases or decreases each time the loop is executed. For example:
    ```javascript
    for (let i = 0; i < 5; i++) {
      console.log(i);
    }
    ```
- `while loops`: A while loop allows you to execute a block of code multiple times as long as a certain condition is met. For example:
    ```javascript
    let x = 0;
    
    while (x < 5) {
      console.log(x);
      x++;
    }
    ```
- `do...while loops`: A do...while loop is similar to a while loop, but it guarantees that the block of code will be executed at least once, even if the condition is not met. For example:
    ```javascript
    let x = 0;
    
    do {
      console.log(x);
      x++;
    } while (x < 5);  
    ```


## Arrays
Arrays are used to store collections of data. They can store any data type and are created using square brackets.
```javascript
var arr = [1, 2, 3, 4, 5];
```

## Objects
As mentioned earlier, objects are collections of key-value pairs. They can be created using the `{}` syntax and can be accessed using dot notation or square bracket notation.
```javascript
var person = {firstName: "John", lastName: "Doe"};

console.log(person.firstName); // "John"
console.log(person["lastName"]); // "Doe"
```

## Example of a Javascript file
```javascript
// This is a comment

// Variables
var x = 10;
var name = "John";
var person = { firstName: "John", lastName: "Doe" };

// Data types
var int = 3;
var str = "Hello, World!";
var bool = true;
var object = { firstName: "John", lastName: "Doe" };
var array = [1, 2, 3, 4, 5];
  
// Operators
var x = 10;
var y = 20;
var z = x + y; // 30


// Functions
function greet(name) {
  console.log("Hello, " + name);
}

greet("John"); // prints "Hello, John"
```

### Conclusion
> In this module, you learned the basic concepts of Javascript, including variables, data types, operators, functions, control structures, arrays, and objects.
> Next we'll be testing your knowledge of these concepts by completing a Javascript quiz.

## NEXT
[NEXT | Javascript Quiz](./javascript_quiz.md)