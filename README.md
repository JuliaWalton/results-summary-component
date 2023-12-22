# FResults summary component - Frontend Mentor

![Design preview for the Results summary component coding challenge](./design/desktop-preview.jpg)

## Welcome! 👋

Thanks for checking out my solution of this challenge!

This is a solution to the [Results Summary Component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

### Overview

## The challenge

Your challenge is to build out this results summary component and get it looking as close to the design as possible.

We provide the data for the results in a local `data.json` file. So you can use that to add the results and total score dynamically if you choose.

Your users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Use the local JSON data to dynamically populate the content

## Links

Live Site URL: [https://juliawalton.github.io/results-summary-component/](https://juliawalton.github.io/results-summary-component/)

### My process

## Built with

- Semantic HTML5 markup
- CSS3
- Flexbox
- CSS Grid
- Vanilla JS
- JSON

## What I learned

I used this project to review XML requests before learning fetch with the results JSON data.

```js
const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    const response = JSON.parse(xhttp.responseText);
    console.log(response);

    const populateScores = (score) => {
      for (let i = 0; i < score.length; i++) {
        console.log(score);
        score[i].innerHTML = response[i].score;
      }
    };
    populateScores(scores);
  }
};
xhttp.open("GET", "data.json", true);
xhttp.send();
```

## Author

- Website - [Julia's Portfolio](https://juliawalton.github.io/portfolio/)
- LinkedIn - [Julia Walton](https://www.linkedin.com/in/juliawalton/)
