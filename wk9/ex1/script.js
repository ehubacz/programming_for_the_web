const {createApp} = Vue

createApp({
    data() {
        return {
            streetAddress: "38 Franklin St",
            city: "Worcester",
            state: "Massachusetts",
            zipCode: "01608"
        }
    },
    computed: {
        fullAddress() {
            console.log("firing full address");
            return this.streetAddress + " " + this.city + " " + this.state + " " + this.zipCode
        }
    }
}).mount('#myApp')  

