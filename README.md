# Mini Calculator

A basic JavaScript calculator that allows users to perform simple arithmetic operations like addition, subtraction, multiplication, percentage and division. It includes features like clear, delete, and a user-friendly interface.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Features](#Features)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

A simple, responsive mini calculator made using vanilla JavaScript, with features to handle invalid input, clear or delete entries, and evaluate expressions safely.

### The challenge

- Build out a functional calculator using **HTML**, **CSS**, and **JavaScript**
- Allow users to:
  - Input numbers and operations
  - Clear the entire input
  - Delete the last digit
  - Get accurate calculations
- Bonus: Handle invalid inputs and edge cases like empty input or division by zero

### Features

- Basic arithmetic: `+`, `-`, `*`, `/`, `%`
- `Clear` button to reset the input
- `DEL` button to delete the last digit
- Shows `0` if user presses equals without input
- Styled input field with custom focus behavior
- Optionally uses `math.js` for safer expression evaluation

### Screenshot

![Screenshot of my Mini calculator project here](/💜Mini%20Calculator.png)

### Links

- Live Site URL: [Click here to see my Mini calculator project](https://jayajo5.github.io/Mini-Calculator/)

## My process

### Built with

- HTML5
- CSS3
- JavaScript (Vanilla)
- [math.js](https://mathjs.org/) (optional for safer calculations)

### What I learned

- How to safely evaluate math expressions using `math.js`
- Handling edge cases like empty inputs or invalid math
- Customizing focus styles in form elements

```html
<input name="number" placeholder="0" id="display" readonly>

```
```css
input:focus{
  outline: none;
}
```
### Continued development

- Add keyboard support (use numbers and Enter key)
- Improve layout with CSS Grid or Flexbox
- Add light/dark theme toggle

### Useful resources

- [CSS Tricks](https://css-tricks.com/centering-css-complete-guide/) - This helped me for Centering in CSS. I really liked this pattern and will use it going forward.
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Glossary/Flexbox) - This is an amazing free resource which helped me finally understand Flexbox. I'd recommend it to anyone still learning this concept.
- [Math.js](https://mathjs.org/) - This is an amazing free resource which helped me how to safely evaluate math expressions using `math.js`.

## Author

- GitHub - [@Jayajo5](https://github.com/Jayajo5)
- Frontend Mentor - [@Jayajo5](https://www.frontendmentor.io/profile/Jayajo5)

