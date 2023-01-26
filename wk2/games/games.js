// game array

const game0 = {
    title: 'Jack and Daxter',
    console: 'PS1',
    type: 'rpg',
    description: 'A mute warrior and his friend save the world from dark ego'

}

console.log(game0);

const game1 = {
    title: 'Graveyard Keeper',
    console: 'Switch or Desktop',
    type: 'farming',
    description: 'A man finds himself stranded in a foreign world and must solve a series of mysteries and strangers problems before he can find his way back to his love'
}
console.log(game1);

const game2 = {
    title: 'Stardew Valley',
    console: 'Switch',
    type: 'farming',
    description: 'Relax and fritter away time on your farm or go about a series of missions and tasks as you establish yourself in a small farm town after inheriting your grandfathers land.',
}
console.log(game2);

// prompt

const input = window.prompt('Pick a number 1-3 to learn about my favorite video games')
console.log("User input is " + input);

// concat
if (input === '1') {
    window.alert("Number 1 is " + game0['title'] + ", a " + game0[type] + "type game." + "I like to play this on a " + game0['console'] + ". Description:" + game0[description])
}