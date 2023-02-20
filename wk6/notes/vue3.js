const {createApp} = Vue;

createApp({
    data() {
        return {
            name: 'Emma',
            happy: true
        }
    }
}).mount('#myApp');