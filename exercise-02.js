const animals = [
    {
        name: 'Fluffykins', 
        species: 'rabbit'
    },
    {
        name: 'Caro',
        species: 'dog'
    },
    {
        name: 'Hamilton',
        species: 'dog'
    },
    {
        name: 'Harold',
        species: 'fish'
    },
    {
        name: 'Ursula',
        species: 'cat'
    },
    {
        name: 'Jimmy',
        species: 'fish'
    }
]

// for loop basic
// const dogs = [];
// for (let i = 0; i < animals.length; i++) {
//     if(animals[i].species === 'dog')
//         dogs.push(animals[i])
// }


// function into function => callback function
const dogs1 = animals.filter(function(animal) {
    return animal.species === 'dog';
});
// => dont need new array
// => less code then for loop

// using arrow func
const dogs2 = animals.filter(animal => {
    return animal.species === 'dog'
});

// separate func
const isDogs = function(animal) {
    return animal.species === 'dog';
}

const dogs3 = animals.filter(isDogs);
console.log(dogs3);
