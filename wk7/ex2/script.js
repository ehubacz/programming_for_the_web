const {createApp} = Vue;

createApp({
    data() {
     myNumbers: [1, 2, 3, 4]
     animals: [
     {name: "panda", color: "black and white"}, {name: "squirrel", color: "red"}, 
     ]
    }
}).mount("#myApp");