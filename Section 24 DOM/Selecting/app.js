// --- by ID

// const image = document.getElementById("unicorn");
// const heading = document.getElementById('mainheading');


// --- by Tag Name

const allImages = document.getElementsByTagName('img');

for (let img of allImages) {
    // console.log(img.src);
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
}

// --- by Class

const squareImages = document.getElementsByClassName('square');

for (let img of squareImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
}

// --- query All

const firstParagraph = document.querySelectorAll('p');
const firstImage = document.querySelector('.square');


const links = document.querySelectorAll('p a');

// for (let link of links) {
//     console.log(link.href);
// }


