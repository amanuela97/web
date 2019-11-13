'use strict';
// Create function 'showImages' which
// loads images.json which has links to images as an array.

// create a loop which builds the following HTML from every image in the array: 
/*
<li>
    <figure>
        <a href="img/original/filename.jpg"><img src="img/thumbs/filename.jpg"></a>
        <figcaption>
            <h3>Title</h3>
        </figcaption>
    </figure>
</li>
*/
// Make the above HTML by using DOM methods.
// Create elements with createElement()
// Add attributes with setAttribute()
// Add elements with appendChild
// When the above HTML is ready append it to the <ul> element
const ul = document.getElementById('add');
const url = 'images.json';

function append(parent, el) {
    return parent.appendChild(el); // Append the second parameter(element) to the first one
}

let array = [];
function showImages (data){
    for(let i = 0; i < data.length;++i){
        let li = document.createElement('li'),
            figure = document.createElement('figure'),
            a = document.createElement('a'),
            img = document.createElement('img'),
            figcaption = document.createElement('figcaption'),
            h3 = document.createElement('h3');

        a.href = `'img/original/${data[i]["mediaUrl"]}'`;
        img.src = `img/thumbs/${data[i]["mediaThumb"]}`;
        h3.innerHTML = data[i]["mediaTitle"];

        append(a,img);
        append(figcaption,h3);
        append(figure,a);
        append(figure,figcaption);
        append(li,figure);

        array[i] = li
    }

    for(let i = 0; i < array.length; ++i){
        append(ul,array[i]);
    }

}

fetch(url)
    .then( resp => resp.json())
    .then( data => showImages(data));