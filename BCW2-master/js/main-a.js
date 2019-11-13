'use strict';
// Create function 'showImages' which
// adds the loaded HTML content to <ul> element

const ul = document.getElementById('add');
const url = 'http://localhost:63342/BCW2-master/images.html?_ijt=4ktvd5gbujeim89rkst9kd4q97';

function append(parent, el) {
    return parent.appendChild(el); // Append the second parameter(element) to the first one
}

function showImages (data){
    ul.innerHTML = data;
}

fetch(url)
    .then( resp => resp.text())
    .then( data => showImages(data));


