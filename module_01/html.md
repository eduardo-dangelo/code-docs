#### The Complete Front-End Web Development Crash Course / Module 1: Basic Concepts

# <img src="../imgs/html5-icon.jpeg" width="30"/> HTML
> Now, let's delve into the core of web development by covering the basics of HTML. It's important to note that while mastering HTML isn't a requirement for being a successful programmer, it's crucial to have a solid understanding of its fundamental concepts and key elements.
> 
> HTML stands for `HyperText Markup Language` and is used to structure and format the content of a webpage. It uses a system of tags to denote different types of content and to apply formatting to them.

## Structure of an HTML Document
An HTML document consists of a series of `elements`, each of which is enclosed in a pair of `tags`. The opening tag contains the element name, and the closing tag contains a slash followed by the element name. For example:

```html
<p>This is a paragraph</p>
```
The `element` name is the type of content being marked up, 
in this case a paragraph. The opening tag `<p>` indicates the start of the `paragraph`,
and the closing tag `</p>` indicates the end of the `paragraph`.
```html
<div>
  <p>This is a paragraph inside a div element</p>
</div>
```
In this example, the `<div>` element is the parent element,
and the `<p>` element is the child element.

# HTML Tags

Here is a list of some of the most relevant HTML tags:

- `<html>`: This is the root element of an HTML document and contains all other elements.
- `<head>`: This element contains information about the document, such as the title and links to external resources.
- `<body>`: This element contains the main content of the document.
- `<p>`: This element is used to mark up a paragraph of text.
- `<br>`: This element is used to insert a line break.
- `<h1>` to `<h6>`: These elements are used to mark up headings of different levels, with `<h1>` being the highest level and `<h6>` being the lowest.
- `<a>`: This element is used to create a link to another webpage. The link's destination is specified using the `href` attribute.
- `<img>`: This element is used to insert an image into the document. The source of the image is specified using the `src` attribute.
- `<div>`: This element is a container for other HTML elements and is often used to group elements together and apply styles to them.
- `<span>`: This element is used to group inline elements together and apply styles to them.
- `<ul>` and `<li>`: These elements are used to create an unordered list, with `<ul>` being the container element and `<li>` being the individual list items.
- `<ol>` and `<li>`: These elements are used to create an ordered list, with `<ol>` being the container element and `<li>` being the individual list items.
- `<table>`: This element is used to create a table. The table consists of rows (`<tr>` elements), which are made up of cells (`<td>` or `<th>` elements).


## HTML Attributes
HTML elements can have `attributes`, which provide additional information about the element. Attributes are specified in the opening tag of the element, and are made up of a name and a value. For example:

```html
<a href="https://www.example.com">This is a link</a>
```
In this example, the `a` element has an `attribute` called `href` with a value of `"https://www.example.com"`. The href attribute specifies the destination of the link.

## HTML Syntax
`HTML` is `case-insensitive`, which means that tags and attributes can be written in uppercase or lowercase,
and it will not affect the way the document is rendered. However,
it is generally accepted to use lowercase for HTML tags and attributes for the sake of readability and consistency.

HTML documents should also be saved with the `.html` file extension. ex: `index.html`

## NEXT
[NEXT | Quiz: HTML](./html_quiz.md)