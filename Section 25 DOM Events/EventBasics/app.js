const btn = document.querySelector('#v2');

btn.onclick = () => {
    console.log("YOU CLICKED ME!");
    console.log("I HOPE IT WORKED!!");
};

function scream() {
    console.log("AAAAAHHHHH");
    console.log("STOP TOUCHING ME!");
}

btn.onmouseenter = scream;


document.querySelector('h1').onclick = () => {
    alert('you clicked the h1!');
};


const btn3 = document.querySelector('#v3');
btn3.addEventListener('mouseup', function () {
    alert("CLICKED!");
});

function twist() {
    console.log("TWIST!");
}
function shout() {
    console.log("SHOUT!");
}

const tasButton = document.querySelector('#tas');

// tasButton.onclick = twist;   //CAN ONLY ADD 1 EVENT
// tasButton.onclick = shout;

tasButton.addEventListener('click', twist, { once: true }); //CAN ADD MULTIPLE EVENT
tasButton.addEventListener('click', shout);
