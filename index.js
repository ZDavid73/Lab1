console.log("hola")

const orcMe = require('orc-me');

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const orcThreeNames = capitalizeFirstLetter(orcMe()) + ' ' + capitalizeFirstLetter(orcMe()) + ' ' + capitalizeFirstLetter(orcMe());
const orcTwoNames = capitalizeFirstLetter(orcMe()) + ' ' + capitalizeFirstLetter(orcMe());

console.log('Orc battle started!');
console.log(orcThreeNames + orcTwoNames);

const containsEmoji = require('contains-emoji');

const textWithEmoji = 'I love pizza 🍕';

if (containsEmoji(textWithEmoji)) {
    console.log('Text contains one or more emojis!');
}

var { hex, rgb, rgba, hsl, hsla, name } = require('@vid3v/random-color');
console.log(hex());  
console.log(rgb());  
console.log(rgba()); 
console.log(hsl());
console.log(hsla());
console.log(name());