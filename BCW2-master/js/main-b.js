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
// After the loop print the HTML into <ul> element using innerHTML.
const ul = document.getElementById('add');
const url = 'images.json';

let array = [];
function showImages (data){
    for(let i = 0; i < data.length;++i){
        array[i] = "<li> " + "\n" + "\t" +
                        "<figure>" + "\n" + "\t" + "\t" +
                            `<a href='img/original/${data[i]["mediaUrl"]}'><img src= 'img/thumbs/${data[i]["mediaThumb"]}' alt='${data[i]["mediaType"]}'></a>` + "\n" + "\t" + "\t" +
                            "<figcaption>" + "\n" + "\t" + "\t" + "\t" +
                                `<h3>${data[i]["mediaTitle"]}</h3>` + "\n" + "\t" + "\t" +
                            "</figcaption>" + "\n" + "\t" +
                         "</figure>" + "\n" +
                    "</li>" + "\n";
    }

    for(let i = 0; i < array.length;++i){
        ul.innerHTML += array[i].toString();
    }

}

fetch(url)
    .then( resp => resp.json())
    .then( data => showImages(data));