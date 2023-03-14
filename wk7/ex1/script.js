const {createApp} = Vue;

createApp({
    data() {
        return {
        llama: "https://en.wikipedia.org/wiki/Llama";
        alpaca: "https://en.wikipedia.org/wiki/Alpaca";
        currentRoute: "llamas"
        }
    }
}).mount("#myApp");