
//1) Select the section with an id of container without using querySelector.
var container = document.getElementById('container');

//2) Select the section with an id of container using querySelector.
var con = document.querySelector('#container');

//3) Select all of the list items with a class of "second".
var nd2 = document.querySelectorAll('.second');

//4) Select a list item with a class of third, but only the list item inside of the ol tag.
var ol = document.querySelector('ol');
var rd = ol.querySelector('.third');
rd.style.backgroundColor = 'yellow';

//5) Give the section with an id of container the text "Hello!".
var newtext = document.createElement('p');
newtext.textContent = 'Hello!';
container.insertBefore(newtext,container.querySelector('ul'));

//6) Add the class main to the div with a class of footer.
var divmain = document.createElement('div');
divmain.className = 'main';
var footer = document.querySelector('.footer');
footer.appendChild(divmain);

//7) Remove the class main on the div with a class of footer.
footer.removeChild(divmain);

//8) Create a new li element.
var newli = document.createElement('li');

//9) Give the li the text "four".
newli.textContent = 'four';

//10) Append the li to the ul element.
container.querySelector('ul').appendChild(newli);

//12) Loop over all of the lis inside the ol tag and give them a background color of "green".
var greens = ol.querySelectorAll('li');
for(let i=0; i<greens.length;i++){
    greens[i].style.backgroundColor = 'green';
}

//13) Remove the div with a class of footer.
var body = document.getElementsByTagName('body');
body[0].removeChild(footer);