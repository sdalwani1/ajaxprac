var parent = document.querySelector('.parent');
var ul = parent.querySelector('ul');
var div = document.createElement('div');

div.textContent = 'Creation of Div from JS';
div.style.color = 'green';
div.style.fontSize = '20';

//parent.appendChild(div)
//parent.insertBefore(div,ul)

/*
	beforebegin
	afterbegin
	beforeend
	afterend
*/

parent.insertAdjacentElement('afterend', div)
parent.insertAdjacentHTML('afterbegin','LOL i came first!')

var hello =$('.hello');
console.log(hello)