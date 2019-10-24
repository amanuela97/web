// Put code of task C here'use strict
'use strict';
const main = document.querySelector('main');

const image = document.createElement('img');
image.src = 'http://placekitten.com/320/160';
// another way to add attributes:
image.setAttribute('alt','title');

// create figcaption element
const figCapt = document.createElement('figcaption');
figCapt.innerHTML = 'Caption';

// create figure element
const fig = document.createElement('figure');

// append image and figcaption to figure
fig.appendChild(image);
fig.appendChild(figCapt);

//create paragraph element
const  paragraph = document.createElement('p');
paragraph.textContent = 'Here is some text. Here is some text. Here is some text. Here is some text.';

//create header and h2 element
const header = document.createElement('header');
const h2 = document.createElement('h2');
h2.textContent = 'Second header';
header.appendChild(h2);

// create article element
const article = document.createElement('article');

// append every child element hierarchically
article.appendChild(header);
article.appendChild(fig);
article.appendChild(paragraph);

main.appendChild(article);


