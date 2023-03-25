#### The Complete Front-End Web Development Crash Course / Module 1: Basic Concepts
# <img src="../imgs/terminal-icon.jpeg" width="30"/><img src="../imgs/html5-icon.jpeg" width="30"/><img src="../imgs/css3-icon.jpeg" width="30"/><img src="../imgs/javascript-logo.png" width="30"/> Exercise 1 - My First Website

> Let's put all the learning into practice and create our first website.
> We will be using the technologies we learned in the previous lessons: HTML, CSS and JavaScript.
> Below we have a preview of the final result. You can also check the final result files [here](../solution/index.html).
> Follow these steps closely to ensure success.

<img src="../imgs/exercise-01-preview.png" width="100%"/>

# <img src="../imgs/terminal-icon.jpeg" width="25"/>  Create folder structure & files
> Let's use the terminal to create the folder structure and files.
> We'll create a folder called `first-website` and inside it create 3 files: `index.html`, `style.css` and `script.js`.
> > If you're not familiar with the terminal, you can check the terminal lesson [here](../module_01/terminal.md).

- Open a terminal window and create a `projects` folder:
    ```shell
    mkdir projects
    ```
  > We will be creating this and all future websites inside this `projects` folder.
  > You can skip this step if you already have a `projects` folder in your root directory.
  
- Navigate to `projects` directory and create another folder called `first-website`:
    ```shell
    cd projects
    mkdir first-website
    ```
- Navigate to `first-website` directory and create the 3 files called `index.html`, `style.css` and `script.js`:
    ```shell
    cd first-website
    touch index.html
    touch style.css
    touch script.js
    ```
  
# <img src="../imgs/html5-icon.jpeg" width="25"/> Add the HTML elements
> Let's add the HTML elements to our `index.html` file.
> We'll start by adding the basic HTML structure and then we'll add the elements we need for our website.
> If you're not familiar with HTML, you can check the [HTML lesson](../module_01/html.md) for more details.

### Basic HTML structure
> Let's start by adding the basic HTML structure to our `index.html` file.
- Open `index.html` and add the following code:
  ```html
  <!DOCTYPE html>
  <html>
  <head>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">
    <title>My First Website</title>
  </head>
  <body>
    // add your code here
    <script src="script.js"></script>
  </body>
  </html>
  ```
  > Notice we are linking to an external stylesheet called `style.css`
  > and a Google Font called `Open Sans` using the  tag `<link>`.
  > We are also linking to an external JavaScript file called `script.js` using the tag `<script>`.
  > 
  > We are also defining the title of the website using the `<title>` tag. This title will be displayed in the browser tab.
  
### The topbar component:
> The topbar contains the title of the website and a dropdown menu. 
> The dropdown menu is hidden by default and displayed when the user clicks on the burger menu.
> This behavior will be implemented using CSS and JavaScript.

- Add the following code inside the `<body>` element:
  ```html
  <div id="topbar">
    <h2>My First Website</h2>
    <div class="dropdown">
      <div onclick="dropdownFunction()" class="burger-menu">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
      <div id="myDropdown" class="dropdown-content">
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    </div>
  </div>
  ```
  > Notice that `dropdownFunction()` is fired every time the user clicks on the `burger-menu` using the `onclick` attribute.
  > This function will be defined in `script.js` later.
  > We are also defining `classes` and `ids` that will be used to style those elements. 

### The hero component:
  > The hero component will be a wide image with a text inside center aligned. The image will be displayed using CSS with the `background-image` property.
- Add the following code inside the `<body>` element, below the topbar component:
  ```html
  <div class="hero-container">
    <h1>
      Learn to code
    </h1>
  </div>
  ```
  > We are defining `hero-container` class and using a `h1` tag for the center aligned text.
  
### The main content:
  > The main content contains 3 columns that contain a title, a paragraph and a link.
  > The columns are center aligned and its content is stretched to the full height of the column.
  > We will be using CSS to style the columns and the link.
- Add the following code inside the `<body>` element, below the hero component:
  ```html
  <div class="main-content">
    <div class="main-content-column">
      <h2>What is HTML?</h2>
      <p>
        HTML stands for Hyper Text Markup Language.
        It is the standard markup language for creating
        web pages and web applications. CSS and JavaScript,
        it forms a triad of cornerstone technologies
        for the World Wide Web.
      </p>
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/HTML"
        target="_blank"
        class="learn-more-button"
      >
        Learn More
      </a>
    </div>
    <div class="main-content-column">
      <h2>What is CSS?</h2>
      <p>
        CSS stands for Cascading Style Sheets. CSS describes
        how HTML elements are to be displayed on screen,
        paper, or in other media. It can control the layout
        of multiple web pages all at once.
      </p>
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/CSS"
        target="_blank"
        class="learn-more-button"
      >
        Learn More
      </a>
    </div>
    <div class="main-content-column">
      <h2>What is JavaScript?</h2>
      <p>
        JavaScript is a text-based programming language that
        allows you to make web pages interactive. Where HTML and CSS
        are languages that give structure and style to web pages,
        JavaScript gives web pages interactive elements that
        engage a user.
      </p>  
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        target="_blank"
        class="learn-more-button"
      >
        Learn More
      </a>
    </div>
  </div>
  ```
  > Notice how we are breaking the text into multiple lines using the `<p>` tag. This is called `line wrapping`. It's a common practice to make the code more readable.
  > 
  > We are also breaking the `<a>` tag into multiple lines. It's also a common practice to make the code more readable.
  > The `target="_blank"` attribute will open the link in a new tab.

### The footer:
  > The footer is attached to the bottom of the page and contains a text center aligned.
- Add the following code inside the `<body>` element, below the main content:
  ```html
  <footer>
    <p>Created by <a href="https://www.linkedin.com/in/alexandru-georgescu-0b5b3b1b3/" target="_blank">Alexandru Georgescu</a></p>
  </footer>
  ```
### Result:
> By this point, your `index.html` file should match the [result file `index.html`](./my-first-website/index.html)


# <img src="../imgs/css3-icon.jpeg" width="30"/> Adding the CSS styles
> Let's add the CSS styles to our `style.css` file.
> If you are not familiar with CSS syntax we're using here, you can check the [CSS lesson](./css.md).

### The body:
> The body selector contains the default styles for the page.
> We are setting the default font family to `Open Sans` and removing the default margin of the page.
- Open `style.css` file and add the following:
  ```css
  body {
    margin: 0; /* remove the default margin of the page */
    font-family: 'Open Sans', sans-serif; /* set the font family to Open Sans */
  }
  ```
### The topbar:
> The topbar selector contains the styles for the topbar component.
- Add the following code inside the `style.css` file, below the body selector:
  ```css
  /* CSS styles for the top bar */
  #topbar {
    background-color: #333; /* set the background color using a hex code */
    color: #fff; /* set the text color */
    display: flex; /* display the elements in a row */
    align-items: center; /* align the elements vertically */
    justify-content: space-between;  /* add space between the elements */
    padding: 10px;  /* add padding to the elements */
    position: relative;  /* set the position to relative. This is needed for the dropdown menu */
  }
  
  #topbar h2 {
    margin: 0; /* remove the default margin of the h2 element */
  }
  ```
  > Notice we are using `id` selector for the `#topbar` instead of `class` selector. This is because we want to style only one element with the `id` `topbar`.
### The Topbar dropdown menu: 
> The dropdown menu will be displayed when the user clicks on the burger menu icon.
- Add the following code inside the `style.css` file, below the topbar selector:
  ```css
  /* CSS styles for the dropdown menu */
  .dropdown {
    position: relative; /* set the position to relative. This is needed for the dropdown menu */
    display: inline-block; /* display the elements in a row */
  }
  
  .burger-menu {
    width: 40px; /* set the width of the element */
    height: 40px; /* set the height of the element */
    display: flex; /* display the elements in a row */
    flex-direction: column; /* display the elements in a column */
    justify-content: space-around; /* add space between the elements */
    align-items: center; /* align the elements vertically */
    cursor: pointer; /* change the cursor to a pointer when the user hovers over the element */
  }
  
  .bar1, .bar2, .bar3 {
    width: 30px; /* set the width of the 3 elements bar1, bar2 and bar3 */
    height: 3px; /* set the height of the 3 elements */
    background-color: rgb(255, 255, 255); /* set the background color using rgb */
  }
  
  .dropdown-content {
    display: none; /* hide the dropdown menu by default */
    position: absolute; /* set the position to absolute. This is needed for the dropdown menu */
    right: 5px; /* set the right position */
    background-color: #f9f9f9; /* set the background color */
    min-width: 160px; /* set the minimum width */
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2); /* add a shadow to the dropdown menu */
    z-index: 1; /* set the z-index to 1. This is needed for the dropdown menu */
  }
  
  ul {
    list-style: none; /* remove the bullet points */
    padding: 0; /* remove the default padding */
    margin: 0; /* remove the default margin */
    color: black; /* set the text color */
  }
  
  li {
    padding: 10px; /* add padding to the list items */
    background-color: transparent; /* set the default background color */
    transition: background-color 0.3s ease; /* add a transition for the hover effect */
  }
  
  li:hover {
    background-color: rgba(0, 0, 0, 0.1); /* change the background color on hover */
    cursor: pointer; /* change the cursor to a pointer when the user hovers over the element */
  }
  ```
  > Notice we are using `class` selector for the `.dropdown`, `.burger-menu`, `.bar1`, `.bar2`, `.bar3`, `.dropdown-content`, `ul` and `li` elements.
  > This is because we want to style multiple elements with the same class.
  
### The Hero component:
> The hero-content selector contains the styles for the main content component.
- Add the following code inside the `style.css` file, below the dropdown menu selector:
  ```css
  .hello-world {
    text-align: center; /* center align the text */
    margin: auto; /* center the element horizontally */
    width: 100%; /* make the element the full width of its parent container */
    height: 400px;
    display: grid; /* enable grid layout */
    place-items: center center; /* center align the element both horizontally and vertically */
    background-image: url("https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");
    background-size: cover;
    background-attachment: fixed;
    color: white;
  }

  .hello-world > h1 {
    margin: 0; /* remove the default margin of the h1 element */
    font-size: 60px; /* set the font size */
    font-weight: bold; /* set the font weight */
    text-shadow: 0 2px 16px rgba(0,0,0,0.8), 0 2px 16px rgba(255,255,255,0.5);
    /* add a text shadow */
  }
  ```
  > Notice we are using `>` selector to select the `h1` element inside the `hello-world` class. This is because we want to style only the `h1` element inside the `hello-world` class.
  > Also notice we are using `background-image` property to set the background image of the element. We are using the `url()` function to set the image url. The image url is set to the image we downloaded earlier.
  > We are also using `background-size` property to set the size of the background image. We are using the `cover` value to make sure the image covers the full width of the element.
  > We are also using `background-attachment` property to set the background image to be fixed. This means the image will not move when the user scrolls the page.

### The thumbnail container:
> The thumbnail-container selector contains the styles for the thumbnail container.
- Add the following code inside the `style.css` file, below the hero component selector:
  ```css
  /* CSS for thumbnail container */
  .thumbnail-container {
    display: flex; /* display the elements in a row */
    justify-content: center; /* center align the elements */
    align-items: stretch; /* stretch the elements to the full height of the container */
    max-width: 600px; /* set the maximum width */
    margin: 60px auto; /* center the element horizontally */
  }
  
  /* CSS for thumbnail columns */
  .thumbnail-column {
    flex: 1; /* set the flex property to 1. This will make the columns equal width */
    text-align: center; /* center align the text */
    padding: 20px; /* add padding to the elements */
    display: flex; /* display the elements in a row */
    flex-direction: column; /* display the elements in a column */
    justify-content: flex-start; /* align the elements to the top */
    align-items: center; /* center align the elements */
  }
  
  .thumbnail-column > p {
    flex: 1; /* set the flex property to 1. This will make the columns equal height */
  }
  
  /* CSS for button */
  .learn-more-button {
    background-color: #4CAF50;  
    color: white;   
    padding: 12px 0;
    border: none;
    cursor: pointer; 
    width: 100%;
    text-align: center;
    align-self: flex-end;
  }
  ```
  > Notice we are using `class` selector for the `.thumbnail-container`, `.thumbnail-column`, `.learn-more-button` elements.
  > This is because we want to style multiple elements with the same class.
  > Also notice we are using `flex` property to make the columns equal width. We are also using `flex-direction` property to display the elements in a column.
  > We are also using `justify-content` property to align the elements to the top. We are also using `align-items` property to center align the elements.
  > We are also using `align-self` property to align the button to the bottom of the column.
  > We are also using `flex` property to make the columns equal height.
   
### The footer:
> The footer selector contains the styles for the footer.
- Add the following code inside the `style.css` file, below the thumbnail container selector:
  ```css
  footer {
    background-color: #333; /* set the background color */
    color: #fff; /* set the text color */
    padding: 20px; /* add padding to the element */
    text-align: center; /* center align the text */
    height: 200px; /* set the height of the element */
    display: flex; /* display the elements in a row */
    align-items: center; /* center align the elements vertically */
    justify-content: space-around; /* add space between the elements */
  }
  
  .subscribe-form {
    margin-top: 20px; /* add margin to the top of the element */
  }
  
  .subscribe-form input[type="email"] {
    padding: 12px 20px; /* add padding to the element */
    margin: 8px 0 8px 8px; /* add margin to the element */
    box-sizing: border-box; /* set the box-sizing property to border-box */
    border: 2px solid #ccc; /* add a border */
    border-radius: 4px; /* add border radius */
  }
  
  .subscribe-form input[type="submit"] {
    background-color: #4CAF50; /* set the background color */
    color: white; /* set the text color */
    padding: 14px 20px; /* add padding to the element */
    margin: 8px 0; /* add margin to the element */
    border: none; /* remove the border */
    border-radius: 4px; /* add border radius */
    cursor: pointer; /* change the cursor to a pointer when the user hovers over the element */
  }
  
  .subscribe-form input[type="submit"]:hover {
    background-color: #45a049; /* change the background color on hover */
  }
  ```
  > Notice we are using `footer` selector to select the `footer` element.
  > Also notice we are using `flex` property to display the elements in a row.
  > We are also using `align-items` property to center align the elements vertically.
  > We are also using `justify-content` property to add space between the elements.
  > We are also using `margin-top` property to add margin to the top of the element.
  > We are also using `input[type="email"]` selector to select the `input` element with the `type` attribute set to `email`.
  > We are also using `input[type="submit"]` selector to select the `input` element with the `type` attribute set to `submit`.
  > We are also using `box-sizing` property to set the box-sizing property to border-box.
  
  
# <img src="../imgs/javascript-logo.png" width="20"/> Adding the JavaScript code
> Let's add the JavaScript code to toggle the dropdown menu when the user clicks on the burger menu.
> The `script.js` file contains the JavaScript code for the project.
> The JavaScript code will be used to toggle the dropdown menu when the user clicks on the burger menu.
- Open `script.js` and add the following code:
  ```javascript
  var dropdown = document.getElementById("myDropdown");
  
  /* JavaScript function to toggle the dropdown menu */
  function dropdownFunction() {
    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    } else {
      dropdown.style.display = "block";
    }
  }
  
  /* Close dropdown menu when clicking away */
  document.addEventListener('click', (event) => {
    if (!event.target.matches('.burger-menu')) {
      dropdown.style.display = "none";
    }
  });
  ```
  > The `dropdownFunction()` function will be called when the user clicks on the burger menu. It will toggle the dropdown menu between `display: none` and `display: block`.
  > The `document.addEventListener()` function will be called when the user clicks anywhere on the page. It will close the dropdown menu if the user clicks away from the burger menu.
  > Notice we are using `document.getElementById()` to get the element with the id `myDropdown` and `document.addEventListener()` to add an event listener to the document.
  > We are also using `event.target.matches()` to check if the user clicked on the burger menu.
  > The `dropdown.style.display` property will be set to `block` when the user clicks on the burger menu and to `none` when the user clicks away from the burger menu.

# Testing the project
> Now, let's test the project to see if it works as expected.
> if done correctly, the project should look like the image on the top of this page.
> If your solution is not working, or does not look like the image on the top of this page, you probaly missed something. go back and check your code for any typo or missing code.
> If you get stuck, you can check the `index.html` and `style.css` files in the `solution` folder.
- Open the `index.html` file in your browser and test the project. 


## NEXT
[NEXT | Conclusion](./conclusion.md)