const vm = new Vue({
    el:'alpacaForm',
    data: {
        firstName:'',
        lastName:'',
        city: '',
        state: '',
        availableStates:
            {value:'AL', name: 'Alabama'},
        selectedColors: [],
        colors: [
            {name: 'White', value: 'white'},
            {name: 'Beige', value: 'beige'},
            {name: 'Fawn', value: 'fawn'},
            {name: 'Bay Black', value: 'bay-black'},
            {name: 'True Black', value: 'true-black'},
            {name: 'Rose Gray', value: 'rose-gray'},
        ],
        status: ''
        }
    });