const {createApp} = Vue;

//chaining a function on a function
createApp({
    data() { //whatever is returned we have access to
        return {
        name: 'Emma'
        }
    }
}).mount('#myApp');


