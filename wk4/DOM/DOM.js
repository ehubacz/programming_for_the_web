// select empty div and assign it to a variable
const myEmptyDiv = document.querySelector("#myEmptyDiv");
// put an h1 inside of it
// create a new element
const heading = document.createElement("h1");
heading.innerHTML = "what is the color of the wind?";
heading.style.cursor = 'pointer';
heading.addEventListener('click', handleHeadingClick);
myEmptyDiv.appendChild(heading);

function handleHeadingClick() {
    console.log('heading has been cliked');
    heading.innerHTML = "Blew";
    document.body.style.backgroundColor = '#3FAAFF';
}



