#### [The Complete Front-End Web Development Crash Course](../README.md) / [Module 1: Basic Concepts](./README.md)

# <img src="../imgs/css3-icon.jpeg" width="30"/> CSS
> As we move forward in our web development journey,
> we will delve into the world of CSS - the tool that allows us to bring life and style to our web pages.
> Understanding and being proficient in CSS is crucial for any front-end developer as it is the key to creating visually appealing designs.
> This guide will give you a foundational understanding, but I encourage you to further explore and master it to elevate your development skills.

CSS (Cascading Style Sheets) is a stylesheet language used to describe the look and formatting of a document written in HTML.

## CSS Syntax

CSS has a simple syntax made up of selectors and declarations. A declaration is made up of a property and a value, and is written as `property: value;`. Multiple declarations can be grouped together in a block, which is written as:

```css
selector {
  property: value;
  property: value;
}
```

The selector determines which element or elements in the HTML document the declarations will be applied to. For example:

```css
p {
  color: red;
  font-size: 16px;
}
```

This CSS rule will apply the color red and a font size of 16 pixels to all `<p>` elements in the document.

## Selectors

There are several types of selectors that can be used to target specific elements in an HTML document. Here are some of the most commonly used selectors:

- **Type selectors**: These selectors target elements based on the element type, such as `p` for `<p>` elements or `a` for `<a>` elements.
- **Class selectors**: These selectors target elements based on the value of the `class` attribute. Class selectors are written with a `.` followed by the class name. For example, `.warning` would target all elements with a class of `warning`.
- **ID selectors**: These selectors target elements based on the value of the `id` attribute. ID selectors are written with a `#` followed by the ID. For example, `#main` would target the element with an ID of `main`.

To use a class or ID selector in an HTML element, you can use the `class` or `id` attribute, respectively. For example:

```css
<p class="warning">This is a warning paragraph</p>

<div id="main">This is the main content</div>
```
### Nested Selectors

Nested selectors allow you to target elements that are nested within other elements. For example, you can use a nested selector to apply styles to a `<p>` element that is inside a `<div>` element. For example:

```css
div p {
  color: red;
}
```

This CSS rule will apply the color red to all `<p>` elements that are inside a `<div>` element. You can also use multiple levels of nesting to target more specific elements. For example:

```css
div.warning p {
  color: red;
}
```

This CSS rule will apply the color red to all `<p>` elements that are inside a `<div>` element with a class of `warning`.

### The `:hover` Selector
The `:hover` selector is a CSS pseudo-class that is used to target an element when the user's cursor hovers over it. This allows you to change the appearance of an element when the user interacts with it.

For example, you can use the `:hover` selector to change the background color of a button when the user hovers over it:

```css
button {
  background-color: blue;
}

button:hover {
  background-color: red;
}
```

The `:hover` selector can be used on any HTML element, not just buttons. For example, you can use it to change the color of text when the user hovers over it:

```css
a {
 color: black;
}

a:hover {
  color: red;
}
```

## CSS Properties

CSS properties are used to style elements in an HTML document. There are many different CSS properties available, including:

- `color`: This property sets the color of text.
- `font-size`: This property sets the size of the text.
- `font-family`: This property sets the font of the text.
- `text-align`: This property sets the alignment of the text.
- `display`: This property sets the display type of an element.
- `float`: This property sets the position of an element in relation to other elements.
- `width` and `height`: These properties set the width and height of an element.
- `margin` and `padding`: These properties add space around or inside an element.
- `border`: This property adds a border around an element.
- `background-color`: This property sets the background color of an element.
- `opacity`: This property sets the transparency of an element.
- `position`: This property sets the position of an element in relation to its parent element.
- `top`, `right`, `bottom`, and `left`: These properties set the distance of an element from its parent element.
- `z-index`: This property sets the stacking order of an element.
- `overflow`: This property sets how to handle content that overflows the element's box.
- `visibility`: This property sets whether or not an element is visible.
- `cursor`: This property sets the cursor style when hovering over an element.
- `transition`: This property specifies the transition effect when changing the value of a property.

## Media Queries

Media queries allow you to create responsive layouts that adjust to the size of the viewport. A media query consists of a media type (such as `screen` or `print`) and a condition that must be met for the styles to be applied. For example:

```css
@media screen and (max-width: 800px) {
  button {
    width: 100%;
  }
}
```
> This media query will apply the styles inside the curly braces to all `<button>` elements when the viewport is less than 800 pixels wide to make the buttons take up the full width of the screen.

### CSS Example: `style.css`
```css
body {
  background-color: #f0f0f0;
  font-family: Arial, Helvetica, sans-serif;
}

h1 {
  color: #333;
  text-align: center;
}

p {
  color: #333;
  font-size: 16px;
  line-height: 1.5;
}

.container {
  width: 80%;
  margin: auto;
  overflow: hidden;
}

@media screen and (max-width: 800px) {
  .container {
      width: 100%;
  }
}
```
> Css files should be saved with the `.css` extension.

## CSS Frameworks
There are many CSS frameworks available that provide pre-built styles for common elements, such as buttons, forms, and tables. These frameworks can save you a lot of time and effort when creating a website. Here are some of the most popular CSS frameworks:
- [Bootstrap](https://getbootstrap.com/)
- [Materialize](https://materializecss.com/)
- [Semantic UI](https://semantic-ui.com/)

## Conclusion
> CSS is a powerful language that allows you to style HTML elements and create responsive layouts. In this lesson, you learned about the syntax of CSS, how to use selectors to target elements, and how to use media queries to create responsive layouts.
> > You can learn more about CSS [here](https://www.w3schools.com/css/). 

## NEXT
> In the next lesson, we'll test your knowledge of CSS with a quiz.

[<img src="../imgs/css3-icon.jpeg" width="15"/> CSS Quiz](css_quiz.md)