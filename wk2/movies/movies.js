const horrorMovies = ['Hereditary', 'Possessor', 'Suspiria', 'Reanimator', 'The Conjuring'];
console.log('length of list', horrorMovies.length);
console.log(horrorMovies);

const userMovie = window.prompt('What is your favorite horror movie?');
horrorMovies.push(userMovie);
console.log(horrorMovies + userMovie);

console.log('updated user list ' + horrorMovies.toString() + userMovie)