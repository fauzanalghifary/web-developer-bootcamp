

// --------------------------------- Inner text, text content, inner html

// INNER TEXT = WHAT USER SEE
// TEXT CONTENT = include hidden element,etc (???)
// INNER HTML = include tags.

// const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!';
// }

// for (let link of allLinks) {
//     link.style.color = 'rgb(0, 108, 134)';
//     link.style.textDecorationColor = 'magenta';
//     link.style.textDecorationStyle = 'wavy';
// }

// --------------------------------- Attribute

// const firstLink = document.querySelector('a');

// firstLink.href;
// firstLink.getAttribute('href');

// --------------------------------- Changing Style (IT BETTER TO USE CLASS!)

// for (let link of allLinks) {
//     link.style.color = 'red';    //NOT IDEAL
// }


// const h2 = document.querySelector('h2');

// // h2.getAttribute('class');
// // h2.setAttribute('class', 'border');

// h2.classList.add('purple');
// h2.classList.add('border');
// h2.classList.remove('border');
// console.log(h2.classList.contains('border'));
// h2.classList.toggle('border');
// console.log(h2.classList.contains('border'));

// --------------------------------- Parent, child, sibling

// const firstBold = document.querySelector('b');
// const paragraph = firstBold.parentElement;
// console.log(paragraph.children);

// const squareImg = document.querySelector('.square');
// squareImg.previousElementSibling; //element
// squareImg.previousSibling; //node (rare)
// squareImg.nextElementSibling;

// --------------------------------- Append and append child

const newImg = document.createElement('img');
newImg.src = 'https://images.unsplash.com/photo-1617943133078-3ad4f4411aeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80';
document.body.appendChild(newImg); //add new node

const p = document.querySelector('p');
p.append('I am new text'); //can add text
p.prepend('I am newwwww and first   '); //add fist child
p.insertAdjacentElement('beforebegin', newImg);

// --------------------------------- Remove child and remove

newImg.parentElement.removeChild(newImg);

p.remove();