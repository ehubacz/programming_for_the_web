const DOWN = 'down';
const UP = 'up';
let startingX = 100;
let startingY = 100;
let cards = [];
const gameState = {
    totalPairs: 8,
    flippedCards: [],
    numMatched: 0,
    attempts: 0,
    waiting: false
};

let cardFaceArray = [];
let cardBack;
function preload() {
    cardBack = loadImage('images/back200.jpg');
    cardFaceArray = [
        loadImage('images/bbyrbbr200.jpg'),
        loadImage('images/begonia200.jpg'),
        loadImage('images/hoya200.jpg'),
        loadImage('images/jade200.jpg'),
        loadImage('images/oxalis200.jpg'),
        loadImage('images/purplePass200.jpg'),
        loadImage('images/snake200.jpg'),
        loadImage('images/xmasCactus200.jpg')
    ]
}

function setup() {
    createCanvas(1600, 1400)
    background('#7CC5D8');
    let selectedFaces = [];
    for (let z = 0; z < 8; z++) {
        const randomIdx = floor(random(cardFaceArray.length));
        const face = cardFaceArray[randomIdx];
        selectedFaces.push(face);
        selectedFaces.push(face);
        // remove the used cardface so it doesn't get randomly selected again
        cardFaceArray.splice(randomIdx, 1);
    }
    selectedFaces = shuffleArray(selectedFaces);
    for (let j = 0; j < 4; j++) {    
        for (let i = 0; i < 8; i++) {
            const faceImage = selectedFaces.pop();
            cards.push(new Card(startingX, startingY, faceImage));
            startingX += 300;
        }
        startingY += 300;
        startingX = 100;
    }
      
}

function draw () {
    if (gameState.numMatched === gameState.totalPairs) {
        fill('yellow');
        textSize(66);
        Text('you win!!', 400, 425);
        noLoop();
    }
    for (let k = 0; k < cards.length; k++) {
            if (!cards[k].isMatch) {
                cards[k].face = DOWN;
            }
        cards[k].show();
    }
    noLoop();
    gameState.flippedCards.length = 0;
    gameState.waiting = false;
    fill(255);
    textSize(36);
    text('attempts ' + gameState.attempts, 100, 1350);
    text('matches ' + gameState.numMatched, 100, 1300);
}

function mousePressed() {
    if (gameState.waiting) {
        return;
    }
    for (let k = 0; k < cards.length; k++) {
        if (gameState.flippedCards.length < 22 && cards[k].didHit(mouseX, mouseY)) {
            console.log('flipped', cards[k]);
            gameState.flippedCards.push(cards[k]);
        }
    }
    if (gameState.flippedCards.length === 2) {
        gameState.attempts++;
        if (gameState.flippedCards[0].cardFaceImg === gameState.flippedCards[1].cardFaceImg) {
            //scoring
            gameState.flippedCards[0].isMatch = true;
            gameState.flippedCards[1].isMatch = true;
            gameState.flippedCards.length = 0;
            gameState.numMatched++;
            loop();
        } else {
            gameState.waiting = true;
            const loopTimeout = window.setTimeout(() => {
                loop();
                window.clearTimeout(loopTimeout);
            }, 2000)
        }
    }
}

class Card {
    constructor (x, y, cardFaceImg) {
        this.x = x;
        this.y = y;
        this.width = 100;
        this.height = 100;
        this.face = DOWN;
        this.cardFaceImg = cardFaceImg
        this.isMatch = false;
        this.show();
    }

    show () {
        if (this.face === DOWN) {
            fill('rgb(57.7%, 9.9%, 9.9%)');
            rect(this.x, this.y, this.width, this.height);
            image(cardBack, this.x, this.y);
        } else {
            image(this.cardFaceImg, this.x, this.y);
        }
    }

    didHit (mouseX, mouseY) {
        if (mouseX >= this.x && mouseX <= this.x + this.width && 
            mouseY >= this.y && mouseY <= this.y + this.height) {
            this.flip();
            return true;
        } else {
            return false;
        }
    }
    
    flip () {
        if (this.face === DOWN) {
            this.face = UP;
        } else {
            this.face = DOWN;
        }
        this.show();
    }
}

function shuffleArray (array) {
    let counter = array.length;
    while (counter > 0) {
        //pick a random index
        const idx = Math.floor(Math.random() * counter);
        //decrease counter by 1 (decrement)
        counter--;
        //swap the last element with it
        const temp = array[counter];
        array[counter] = array[idx];
        array[idx] = temp;
    }
    return array;
}
