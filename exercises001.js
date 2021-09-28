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

    var count = 0;

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

    return "This " + colour + " " + name + " has " + legs + " legs.";

}

function checkElementExists(needle, haystack) {

    return haystack.indexOf(needle) !== -1;
}

function allTrees() {

    var trees = ['Birch', 'Oak', 'Pink Perfection'];
    var moreTrees = ['Apple', 'Lemon', 'Eucalyptus', 'Guava'];

    Array.prototype.push.apply(trees, moreTrees);

    return trees;
}


function favouriteFoods() {
    
    var foods = ['🍕', '🥓', '🍟']
    var pizza = foods[0];
    var veganBacon = foods[1];
    var fries = foods[2];

    return `My favourite foods are ${pizza}, ${veganBacon} and ${fries} - yuummmy!`
}


function favFoodObjects() {

    var foodItems = {
        banana: "🍌",
        apple: "🍎",
        pear: "🍐"
    }

    var banana = foodItems.banana;
    var apple = foodItems.apple;
    var pear = foodItems.pear;


    return `In my fruit salad I like ${banana}s, ${apple}s and ${pear}s`
}


module.exports = { sum, logPerson, sayHello, greetings, countSheep, pigLatinTranslator, animal, allTrees, introduction, checkElementExists, favouriteFoods, favFoodObjects };