
This is page shows the 4 cities I have lived where I have called my home. This is a personal side-project built to practice front-end and UI skills. I use Vanilla JavaScript and a touch of jQuery.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- View the current time in 2 different time-zone, as well as the current weather in that specific city
- Rearrange the pins by clicking and dragging on the fingerprint icon

### Links

- Solution URL: [Add solution URL here](https://github.com/KristaCalleja/favourite-cities)
- Live Site URL: [Add live site URL here](https://kristacalleja.github.io/favourite-cities/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JavaScript
- jQuery

### What I learned

I was under the impression that one could get the time using the Time.now method, however in Vanilla JavaScript it is a bit more complicated than that. 

I still haven't learnt how to make my code DRY-er. I have a feeling that 

I was impressed to see that the drag-and-drop UX is not as complex as one would imagine and relied heavily on HTML more than anything else.

```html
<div class="boxes" id="draggable" ondrop="drop(event)" ondragover="allowDrop(event)">
```

### Continued development

I still need to perfect the following details:
- live reload
- unix time converter
- only allow one drag per click.

I would also like to add a an if statement to enable some icons showing weather display.

### Useful resources

- [Stackoverflow](https://stackoverflow.com/questions/45183549/drag-and-drop-and-sort-divs-in-jquery) - This helped me try out jQuery and understand that all the boxes needed a specific id.


## Author

- Website - [Krista Calleja](https://kristacalleja.github.io/)