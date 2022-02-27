'use strict';

console.log('hello world');

let username = prompt('Hello there. What is your name?');
alert(`Ah, just as I thought; ${username}. A wonderful name!`);

let score = 0;

function startQuiz() {
  startGame();
  militaryStatus();
  myHomeTown();
  playPeach();
  daughterCount();
  cheeseRank();
  favoriteRainbow();
}
startQuiz();

//Question 1:
function startGame() {
  let game = prompt('Would you like to play a game? All responses should be \'yes\' or \'no\'.').toLowerCase();
  if (game === 'yes') {
    alert('Eggselent');
    score++;
  } else if (game === 'no') {
    alert('Too bad! We\'re playing anyway!');
  } else {
    alert('Hmm, I don\'t understand. Let\'s play anyways.');
  }
}


//Question 2:
function militaryStatus() {
  let military = prompt('Was I in the Navy?').toLowerCase();

  if (military === 'yes') {
    alert('Nope. I was in the Air Force.');
  } else if (military === 'no') {
    alert('That\'s right! I was in the Air Force.');
    score++;
  } else {
    alert('I see you\'re playing hardball. Let\'s move on.');
  }
}
console.log(score);


//Question 3:
function myHomeTown() {
  let hometown = prompt('Am I from Western New York?').toLowerCase();
  if (hometown === 'yes') {
    alert('That\'s right! From the southern shores of Lake Ontario.');
    score++;
  } else if (hometown === 'no') {
    alert('WHAT?! Do you even know me at all? Of course I am!');
  } else {
    alert('Don\'t like to follow the rules? That\'s okay.');
  }
}
console.log(score);

//Question 4:
function playPeach() {
  let peach = prompt('Did I play in peach orchards as a kid?').toLowerCase();
  if (peach === 'yes') {
    alert('I sure did. The climate of the great lakes helps to enable fruit tree orchards in such a cold climate.');
    score++;
  } else if (peach === 'no') {
    alert('Uhm, I actually did. Awkward.');
  } else {
    alert('At a loss for words, eh?');
  }
}
console.log(score);

//Question 5:
function daughterCount() {
  let daughters = prompt('Do I have three daughters?').toLowerCase();
  if (daughters === 'yes') {
    alert('Not yet, but you never know in the future! The answer is two.');
  } else if (daughters === 'no') {
    alert('You\'re a keen observer! That\'s right, I have two.');
    score++;
  } else {
    alert('You are a rebel, ain\'t ya?');
  }
}
console.log(score);

//Question 6:
function cheeseRank() {
  let attempts = 4;

  let swiss = 6;

  for (let i = 0; i < attempts; i++) {
    let favoriteCheese = prompt('Where does swiss rank on my top 10 list of favorite cheeses? You have four attempts! Hint: 1-10');
    if (favoriteCheese === '6') {
      alert('That\'s correct! Maybe it should be higher?');
      score++;
      break;
    }
    if (favoriteCheese < swiss) {
      //console.log(`Just a little low! You have ${attempts - i - 1} attempts remaining.`);
      alert(`Just a little low! You have ${attempts - i - 1} attempts remaining.`);
    }
    if (favoriteCheese > swiss) {
      //console.log(`Too high! You have ${attempts - i - 1} attempts remaining.`);
      alert(`Too high! You have ${attempts - i - 1} attempts remaining.`);
    }
  }
}
console.log(score);

//Question 7 Guessing game with an array

function favoriteRainbow() {
  let favoriteRainbowColors = ['red', 'orange'];

  let j = 1;

  while (j < 7) {
    let color = prompt('What is one of my two favorite colors of the rainbow?').toLowerCase(); {
      if (color === favoriteRainbowColors[0] || color === favoriteRainbowColors[1]) {
        //console.log('That is correct.');
        alert('That is correct! Red and orange are my favorite colors of the rainbow.');
        score++;
        break;
      } else {
        //console.log(`Nope, try again. You have ${6 - j} attempts remaining.`);
        alert(`Nope, try again. You have ${6 - j} attempts remaining.`);
        j++;
      }
    }
  }
  if (j > 6) {
    alert('You have failed this task. There aren\'t even that many colors to pick from!');
  }
}
console.log(score);


alert(`Your final score is ${score} out of 7! Read my website and try again?`);
