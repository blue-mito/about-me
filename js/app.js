'use strict';

/*console.log('hello world');*/


let username = prompt('Hello there. What is your name?');
alert('Ah, just as I thought; ' + username + '. A wonderful name!');

let game = prompt('Would you like to play a game? All responses should be \'yes\' or \'no\'.').toLowerCase();

if (game === 'yes') {
  /*console.log('Eggselent');*/
  alert('Eggselent');
} else if (game === 'no') {
  /*console.log('Too bad! We\'re playing anyway!');*/
  alert('Too bad! We\'re playing anyway!');
} else {
  /*console.log('Hmm, I don\'t understand. Let\'s play anyways.');*/
  alert('Hmm, I don\'t understand. Let\'s play anyways.');
}

let military = prompt('Was I in the Navy?').toLowerCase();

if (military === 'yes') {
  /*console.log('Nope. I was in the Air Force');*/
  alert('Nope. I was in the Air Force.');
} else if (military === 'no') {
  /*console.log('That\'s right! I was in the Air Force.');*/
  alert('That\'s right! I was in the Air Force.');
} else {
  /*console.log('I see you\'re playing hardball. Let\'s move on.');*/
  alert('I see you\'re playing hardball. Let\'s move on.');
}

let hometown = prompt('Am I from Western New York?').toLowerCase();

if (hometown === 'yes') {
  /*console.log('That\'s right! From the southern shores of Lake Ontario.');*/
  alert('That\'s right! From the southern shores of Lake Ontario.');
} else if (hometown === 'no') {
  /*console.log('WHAT?! Do you even know me at all? Of course I am!');*/
  alert('WHAT?! Do you even know me at all? Of course I am!');
} else {
  /*console.log('Don\'t like to follow the rules? That\'s okay.');*/
  alert('Don\'t like to follow the rules? That\'s okay.');
}

let peach = prompt('Did I play in peach orchards as a kid?').toLowerCase();

if (peach === 'yes') {
  /*console.log('I sure did. The climate of the great lakes helps to enable fruit tree orchards in such a cold climate.');*/
  alert('I sure did. The climate of the great lakes helps to enable fruit tree orchards in such a cold climate.');
} else if (peach = 'no') {
  /*console.log('Uhm, I actually did. Awkward.');*/
  alert('Uhm, I actually did. Awkward.');
} else {
  /*console.log('At a loss for words, eh?');*/
  alert('At a loss for words, eh?');
}

let daughters = prompt('Do I have three daughters?').toLowerCase();

if (daughters === 'yes') {
  /*console.log('Not yet, but you never know in the future! The answer is two.');*/
  alert('Not yet, but you never know in the future! The answer is two.');
} else if (daughters === 'no') {
  /*console.log('You\'re a keen observer! That\'s right, I have two.');*/
  alert('You\'re a keen observer! That\'s right, I have two.');
} else {
  /*console.log('You are a rebel, ain\'t ya?');*/
  alert('You are a rebel, ain\'t ya?');
}

alert(username + ', I don\'t know how well you really know me, but you\'re in for now.');
