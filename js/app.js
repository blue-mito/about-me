'use strict';

console.log('hello world');


let username = prompt('Hello there. What is your name?');
alert('Ah, just as I thought; ' + username + '. A wonderful name!');

let game = prompt('Would you like to play a game? All responses should be \'yes\' or \'no\'.').toLowerCase();

if (game === 'yes') {
  console.log('Eggselent');
  alert('Eggselent');
} else if (game === 'no') {
  console.log('Too bad! We\'re playing anyway!');
  alert('Too bad! We\'re playing anyway!');
} else {
  console.log('Hmm, I don\'t understand. Let\'s play anyways.');
  alert('Hmm, I don\'t understand. Let\'s play anyways.');
}

let military = prompt('Was I in the Navy?');

if (military === 'yes') {
  console.log('Nope. I was in the Air Force');
  alert('Nope. I was in the Air Force.');
} else if (military === 'no') {
  console.log('That\'s right! I was in the Air Force.');
  alert('That\'s right! I was in the Air Force.');
} else {
  console.log('I see you\'re playing hardball. Let\'s move on.');
}

let hometown = prompt('Was I born in Buffalo, NY?')
