#### The Complete Front-End Web Development Crash Course / Module 1: Basic Concepts
# <img src="../imgs/terminal-icon.jpeg" width="30"/><img src="../imgs/html5-icon.jpeg" width="30"/><img src="../imgs/css3-icon.jpeg" width="30"/><img src="../imgs/javascript-logo.png" width="30"/> Exercise 1 - My First Website

> Let's put all our learning into practice and create our first website.
> We will be using the following technologies we learned in the previous lessons: HTML, CSS and JavaScript.
> Follow these steps closely to ensure success.
> Below we have a preview of the final result. You can also check the final result files [here](../solution/index.html).

<img src="../imgs/exercise-01-preview.png" width="100%"/>

# <img src="../imgs/terminal-icon.jpeg" width="25"/>  Create folder structure & files
> Let's use the terminal to create a folder structure and files.
> We'll create a folder called `first-website` and inside it create 3 files: `index.html`, `style.css` and `script.js`.
> If you're not familiar with the terminal, you can check the [terminal lesson](../module_01/terminal.md) for more details.

- Open a terminal window and create a `projects` folder:
    ```shell
    mkdir projects
    ```
  > We will be creating this and all our future websites inside this `projects` folder. This will help us keep our projects organized.
  > You can skip this step if you already have a `projects` folder in your root directory.
  
- Navigate to `projects` directory and create another folder called `first-website`:
    ```shell
    cd projects
    mkdir first-website
    ```
- Navigate to `first-website` directory and create a file called `index.html`:
    ```shell
    cd first-website
    touch index.html
    touch style.css
    touch script.js
    ```
  
# <img src="../imgs/html5-icon.jpeg" width="25"/> Add the HTML elements
- Open `index.html` and paste the following code:
  ```html
  <!DOCTYPE html>
  <html>
  <head>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    // add your code here
    <script src="script.js"></script>
  </body>
  </html>
  ```
  > Notice we are linking to an external stylesheet called `style.css` and a Google Font called `Open Sans`.
  > We are also linking to an external JavaScript file called `script.js`

- Paste the following code inside the `<body>` element:
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
  > The topbar contains the title of the website and a dropdown menu. The dropdown menu is hidden by default and will be displayed when the user clicks on the burger menu. 
  > Notice we are defining `classes` and `ids` like `class="burger-menu"` and `id="myDropdown"`. These will be used to style the elements. 
  > The `dropdownFunction()` function will be defined in `script.js` and will be explained later.
- The hero component:
  ```html
  <div class="hero-container">
    <h1>
      Learn to code
    </h1>
  </div>
  ```
  > The hero component contains a title and a subtitle. The subtitle will be displayed below the title on larger screens and will be displayed below the title on smaller screens.
  > Notice we are defining a `class` called `hero-container`. This will be used to style the elements.
  > The `hero-container` class will be defined in `style.css` and will be explained later.
  > 
- The main content:
  ```html
  <div class="main-content">
    <div class="main-content-column">
      <h2>What is HTML?</h2>
      <p>HTML stands for Hyper Text Markup Language. It is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.</p>
      <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" class="learn-more-button">Learn More</a>
    </div>
    <div class="main-content-column">
      <h2>What is CSS?</h2>
      <p>CSS stands for Cascading Style Sheets. CSS describes how HTML elements are to be displayed on screen, paper, or in other media. CSS saves a lot of work. It can control the layout of multiple web pages all at once. External stylesheets are stored in CSS files.</p>
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" class="learn-more-button">Learn More</a>
    </div>
    <div class="main-content-column">
      <h2>What is JavaScript?</h2>
      <p>JavaScript is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive. Where HTML and CSS are languages that give structure and style to web pages, JavaScript gives web pages interactive elements that engage a user.</p>  
    </div>
  </div>
  ```
  > The main content contains 2 columns. The left column contains a title and a paragraph. The right column contains a title and a paragraph.
  > Notice we are defining a `class` called `main-content`. This will be used to style the elements.
  > The `main-content` class will be defined in `style.css` and will be explained later.
- Footer:
  ```html
  <footer>
    <p>Created by <a href="https://www.linkedin.com/in/alexandru-georgescu-0b5b3b1b3/" target="_blank">Alexandru Georgescu</a></p>
  </footer>
  ```
  > The footer contains a paragraph with a link to my LinkedIn profile.
  > Notice we are defining a `class` called `footer`. This will be used to style the elements.
  > The `footer` class will be defined in `style.css` and will be explained later.

### <img src="../imgs/css3-icon.jpeg" width="20"/> Adding the CSS styles

- Open `style.css` file and paste the following:
  ```css
  body {
    margin: 0; /* remove the default margin of the page */
    font-family: 'Open Sans', sans-serif; /* set the font family to Open Sans */
  }
  
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
  
### <img src="../imgs/javascript-logo.png" width="20"/> Adding the JavaScript code
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