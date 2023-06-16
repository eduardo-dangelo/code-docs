[The Complete Front-End Web Development Crash Course](../README.md) / [Module 3 | Code Playground](./README.md)

# Introduction to Typescript
> In this section we will learn the basics of Typescript.

Typescript is a superset of Javascript that adds static typing to the language.
example:
```js
// Javascript
function add(a, b) {
  return a + b;
}
```
```ts
// Typescript
function add(a: number, b: number): number {
  return a + b;
}
```
> Notice the `: number` after the function parameters and the `: number` after the function parenthesis.
> This is the syntax for adding types to variables and functions.

## 1. Types
> Typescript has the following types:
- `number` - for numbers
- `string` - for strings
- `boolean` - for booleans
- `any` - for any type
- `void` - for functions that do not return a value
- `never` - for functions that never return a value
- `object` - for objects
- `array` - for arrays
- `tuple` - for tuples
- `enum` - for enums
- `null` - for null
- `undefined` - for undefined
- `unknown` - for unknown values

## 2. Variables
> Variables in Typescript can be declared using the `let` or `const` keywords.
> The `let` keyword is used to declare variables that can be reassigned.
> The `const` keyword is used to declare variables that cannot be reassigned.
> Variables can be declared with a type or without a type.

### 2.1. Declaring variables with a type
```ts
// Declaring a variable with a type
let a: number = 5;
```
### 2.2. Declaring variables without a type
```ts
// Declaring a variable without a type
let a = 5;
```

## 3. Functions
> Functions in Typescript can be declared using the `function` keyword.
> Functions can be declared with a type or without a type.
> Functions can have parameters with types or without types.
> Functions can have a return type or not.

### 3.1. Declaring functions with a type
```ts
// Declaring a function with a type
function add(a: number, b: number): number {
  return a + b;
}
```
### 3.2. Declaring functions without a type
```ts
// Declaring a function without a type
function add(a, b) {
  return a + b;
}
```

## 4. Interfaces
> Interfaces in Typescript are used to define the structure of an object.
> Interfaces can be used to define the structure of an object.

### 4.1. Declaring an interface
```ts
// Declaring an interface
interface Person {
  name: string;
  age: number;
}
```
### 4.2. Using an interface
```ts
// Using an interface
const person: Person = {
  name: 'John',
  age: 25,
};
```

> There is much more to learn about Typescript.
> But for now we will only learn the basics and move on.
> I encourage you to learn more about Typescript.
> Check the [Typescript website](https://www.typescriptlang.org/).

## NEXT
> Now that we know the basics of Typescript, let's configure Typescript in our project.

[<img src="../imgs/typescript-icon.jpeg" width="15"/> Configure Typescript](./configureTypescript.md)
