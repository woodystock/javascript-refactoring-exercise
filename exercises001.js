function sum(a, b) {
    return a + b;
}

function logPerson(people) {
    for (var i = 0; i < people.length; i++) {
        return people[i];
    }
}


function sayHello(name) {
    if (name === undefined) {
        return "Hello you!";
    } else {
        return "Hello " + name;
    }
}


function greetings(greeting, subject) {

    return greeting + ' ' + subject + "!";
}


function countSheep(sheep) {

    let count = 0;

    for (let i = 0; i < sheep.length; i++) {
        if (sheep[i] === 'sheep') {
            count++
        }
        else {
            ''
        }
    }

    return count;
}

function pigLatinTranslator(str) {

    var pigLatin = []

    var strSplit = str.split(' ');

    for (let i = 0; i < strSplit.length; i++) {

        if (strSplit[i].charCodeAt() < 65 || strSplit[i].toUpperCase().charCodeAt() > 90) {
            pigLatin.push(strSplit[i])
        }
        else {
            pigLatin.push(strSplit[i].substring(1) + strSplit[i].charAt() + "ay")
        }
    }

    return pigLatin.join(' ')
}


function animal(obj) {

    var colour = obj.color;

    var name = obj.name;

    var legs = obj.legs;

    return "This " + colour + " " + name + " has " + legs + " legs."

}


function allTrees() {

    var trees = ['Birch', 'Oak', 'Pink Perfection'];

    var moreTrees = ['Apple', 'Lemon', 'Eucalyptus', 'Guava'];

    Array.prototype.push.apply(trees, moreTrees);

    return trees;
}

function inOrder(order) {

    var first = order[0];
    var second = order[1];
    var third = order[2];

    return (first + " " + second + " " + third);

}


const introduction = (person) => `Hello my name is ${person.name}, and I live in ${person.city} with ${person.pet}`;

// function introduction(person) {

//     var name = person.name;
//     var city = person.city;
//     var pet = person.pet;

//     return 'Hello my name is ' + name + ', '
//         + 'and I live in ' + city + ' with ' + pet;
// }





module.exports = { sum, logPerson, sayHello, greetings, countSheep, pigLatinTranslator, animal, allTrees, inOrder, introduction };