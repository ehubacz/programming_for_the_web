const {createApp} = Vue;

createApp({
    data() {
        llama: "https://en.wikipedia.org/wiki/Llama";
        alpaca: "https://en.wikipedia.org/wiki/Alpaca";
        currentRoute: "llamas"
    }
}).mount("#myApp");