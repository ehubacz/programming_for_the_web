const {createApp } = Vue;

createApp({
    data() {
        return {
        newPlantObj: {
            commonName: '',
            fact: '',
            genus: '',
            origin: '',
            dateCollected: null
        },

        plants: [ 
            {   
                commonName:'Scarlet Star Plant',
                fact: 'When viewed from above, the entire flower head takes on the shape of a star, giving the plant its name. As the plant blooms only once in its life, the bloom is hardy and lasts about five months.',
                genus: 'Bromeliad',
                origin: 'Middle and South America',
                dateCollected: '04/18/2021'
                }, { 
                commonName: 'Rattlesnake Plant',
                fact: 'They are beautifully marked with various shades of green, wavy edges that magnify those shades, and green spots that resemble small leaves. Even their undersides do not lack in magnificence, being a reddish-purple shade.',
                genus: 'Calathea',
                origin: 'Brazil',
                dateCollected: '12/15/2022'
                }, { 
                commonName: 'Lucky Bamboo Plant',
                fact: 'While this plant has the common name of bamboo it is not an actual bamboo plant species and belongs to the dracaena genus, although the stalks have a similar appearance.',
                genus: 'Dracaena',
                origin: 'West Africa',
                dateCollected: '02/06/2023'
                }, { 
                commonName: 'Fiddle Leaf Fig Plant',
                fact: 'The name fiddle given to this plant comes from its fiddle (violin) shaped leaves).',
                genus: 'Ficus',
                origin: 'West Africa',
                dateCollected: '03/01/2023'
                }, { 
                commonName: 'Trailing Jade Plant',
                fact: 'In the wild, they can be found vining on trees, rotten logs, rock crevices, and even the forest floor.',
                genus: 'Peperomia',
                origin: 'South America',
                dateCollected: '08/30/2022'
                }
            ]}
        },
        methods: {
            submitHandler: () => {
                    console.log('submitted');
                    vm.plants = vm.plants.concat(vm.newPlantObj);
                    vm.resetForm();
            },
        resetForm: () => {
            vm.newPlantObj = {
                commonName: '',
                fact: '',
                genus: '',
                origin: '',
                dateCollected: null
            }
        },
        deleteItem: item => {
            vm.plants = vm.plants.filter(plant => {
                return plant !== item;
            });
        }
        }
}).mount("#myApp");