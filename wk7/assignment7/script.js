const { createApp } = Vue;
let vm = new Vue({
    el:"#myApp",
    data: {
        plants: [ 
            {   
                commonName:'Scarlet Star Plant',
                fact: 'When viewed from above, the entire flower head takes on the shape of a star, giving the plant its name. As the plant blooms only once in its life, the bloom is hardy and lasts about five months.',
                genus: 'Bromeliad',
                origin: 'Middle and South America'
                }, { 
                commonName: 'Rattlesnake Plant',
                fact: 'They are beautifully marked with various shades of green, wavy edges that magnify those shades, and green spots that resemble small leaves. Even their undersides do not lack in magnificence, being a reddish-purple shade.',
                genus: 'Calathea',
                origin: 'Brazil'
                }, { 
                commonName: 'Lucky Bamboo Plant',
                fact: 'While this plant has the common name of bamboo it is not an actual bamboo plant species and belongs to the dracaena genus, although the stalks have a similar appearance.',
                genus: 'Dracaena',
                origin: 'West Africa'
                }, { 
                commonName: 'Fiddle Leaf Fig Plant',
                fact: 'The name fiddle given to this plant comes from its fiddle (violin) shaped leaves).',
                genus: 'Ficus',
                origin: 'West Africa'
                }, { 
                commonName: 'Trailing Jade Plant',
                fact: 'When viewed from above, the entire flower head takes on the shape of a star, giving the plant its name. As the plant blooms only once in its life, the bloom is hardy and lasts about five months.',
                genus: 'Peperomia',
                origin: 'South America'}
            ]
        }
}).mount("#myApp");