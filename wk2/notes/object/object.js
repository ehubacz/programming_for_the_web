// objects

// create
const emmasCar = {
    color: 'black',
    pistons: 4
};
console.log(emmasCar);

// mutate: add data (properties)
emmasCar.fuelInjection = true;
console.log(emmasCar); // dot notation
emmasCar('4-wheel-drive') = true; // array notation. best for names that need to be in a string (begins with #, has "-")

// display single item with dot
console.log('emmas car is' , emmasCar.color); // allows for labels in console

// display single item with array notation
console.log('is it 4 wheel dig?' , emmasCar['4-wheel-drive']);

// using toString (works with arrays too)
console.log(emmasCar.toString());
const myCars = ['rav', 'pilot' , 'juke'
];
console.log(myCars.toString());

// mutate: remove property
delete emmasCar.pistons;
console.log('emmas car without pistons'. emmasCar);

// merge two objects
const basicJuke = {
    wheels: 5,
    color: 'red',
    doors: 4,
    make: 'nissan'
};

const newJuke = Object.assign({}, basicJuke, emmasCar);
console.log('new juke', newJuke);

// objects in arrays
const cars = [
    {make: 'Nissan', model: 'Rogue', color: 'orange'}, 
    {make: 'Nissan', model: 'Altime', color: 'blue'},
    {make: 'VW', model: "Blazer", color: 'black'},
    {make: 'Nissan', model: 'Viper', color: 'blue'}
];

console.log('index 1 of cars color' , cars[0].color);

console.log('make is', cars[0].make);
const randomIdx = Math.round(Math.random() * cars.length -1);
console.log('my car is a' + cars[randomIdx].make + ' ' + cars[randomIdx].model + ' and it is the color ' + cars[randomIdx].color);