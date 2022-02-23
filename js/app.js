'use strict';

console.log('hello world');

let username = prompt('Hello there. What is your name?');
alert('Ah, just as I thought; ' + username + '. A wonderful name!');

//Adds score variable to count for correct answers
let score = 0;

function quiz(score){

  //Question 1:
  function startGame(score){
    let game = prompt('Would you like to play a game? All responses should be \'yes\' or \'no\'.').toLowerCase();
    if (game === 'yes') {
    //console.log('Eggselent');
      alert('Eggselent');
      score++;
    } else if (game === 'no') {
    //console.log('Too bad! We\'re playing anyway!');
      alert('Too bad! We\'re playing anyway!');
    } else {
    //console.log('Hmm, I don\'t understand. Let\'s play anyways.');
      alert('Hmm, I don\'t understand. Let\'s play anyways.');
    }
    return score;
  }
  score = startGame(score);

  //Question 2:
  function militaryStatus(score){
    let military = prompt('Was I in the Navy?').toLowerCase();

    if (military === 'yes') {
    //console.log('Nope. I was in the Air Force');
      alert('Nope. I was in the Air Force.');
    } else if (military === 'no') {
      //console.log('That\'s right! I was in the Air Force.');
      alert('That\'s right! I was in the Air Force.');
      score++;
      //return score;
    } else {
      //console.log('I see you\'re playing hardball. Let\'s move on.');
      alert('I see you\'re playing hardball. Let\'s move on.');
    }
    return score;
  }

  score = militaryStatus(score);
  console.log(score);


  //Question 3:
  function myHomeTown(score){
    let hometown = prompt('Am I from Western New York?').toLowerCase();
    if (hometown === 'yes') {
      //console.log('That\'s right! From the southern shores of Lake Ontario.');
      alert('That\'s right! From the southern shores of Lake Ontario.');
      score++;
    } else if (hometown === 'no') {
      //console.log('WHAT?! Do you even know me at all? Of course I am!');
      alert('WHAT?! Do you even know me at all? Of course I am!');
    } else {
      //console.log('Don\'t like to follow the rules? That\'s okay.');
      alert('Don\'t like to follow the rules? That\'s okay.');
    }
    return score;
  }
  score = myHomeTown(score);
  console.log(score);

  //Question 4:
  function playPeach(score){
    let peach = prompt('Did I play in peach orchards as a kid?').toLowerCase();
    if (peach === 'yes') {
      //console.log('I sure did. The climate of the great lakes helps to enable fruit tree orchards in such a cold climate.');
      alert('I sure did. The climate of the great lakes helps to enable fruit tree orchards in such a cold climate.');
      score++;
    } else if (peach === 'no') {
      //console.log('Uhm, I actually did. Awkward.');
      alert('Uhm, I actually did. Awkward.');
    } else {
      //console.log('At a loss for words, eh?');
      alert('At a loss for words, eh?');
    }
    return score;
  }
  score = playPeach(score);
  console.log(score);

  //Question 5:
  function daughterCount(score){
    let daughters = prompt('Do I have three daughters?').toLowerCase();
    if (daughters === 'yes') {
      //console.log('Not yet, but you never know in the future! The answer is two.');
      alert('Not yet, but you never know in the future! The answer is two.');
    } else if (daughters === 'no') {
      //console.log('You\'re a keen observer! That\'s right, I have two.');
      alert('You\'re a keen observer! That\'s right, I have two.');
      score++;
    } else {
      //console.log('You are a rebel, ain\'t ya?');
      alert('You are a rebel, ain\'t ya?');
    }
    return score;
  }

  score = daughterCount(score);
  console.log(score);

  //Question 6:
  //Where does swiss cheese rank on my Top 10 List of favorite cheeses? hint: 1-10

  //Define number of attempts
  function cheeseRank(score){
    let attempts = 4;

    //Define the answer
    let swiss = 6;

    for (let i = 0; i < attempts; i++) {
      let favoriteCheese = prompt('Where does swiss rank on my top 10 list of favorite cheeses? You have four attempts! Hint: 1-10');
      if (favoriteCheese === '6') {
        //console.log('That\'s correct!');
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
    return score;
  }
  score = cheeseRank(score);
  console.log(score);

  //Question 7 Guessing game with an array
  //colors:  red, orange, yellow, green, blue, indigo, violet
  function favoriteRainbow(score){
    let rainbow = ['red','orange','yellow','blue','indigo','violet'];

    let j = 1;

    while (j < 7) {
      let color = prompt('What is one of my two favorite colors of the rainbow?'); {
        //console.log(color);
        //console.log(rainbow[1]);
        if (color === rainbow[1]) {
          //console.log('That is correct.');
          alert('That is correct! Oranges are also a delicious fruit.');
          score++;
          break;
        }
        if (color === rainbow[2]) {
          //console.log('That is correct.');
          alert('That is correct! Yellow is mellow.');
          score++;
          break;
        }
        else {
          //console.log(`Nope, try again. You have ${6 - j} attempts remaining.`);
          alert(`Nope, try again. You have ${6 - j} attempts remaining.`);
          j++;
        }
      }
    }
    if (j > 6) {
      alert('You have failed this task. There aren\'t even that many colors to pick from!');
    }
    return score;
  }
  score = favoriteRainbow(score);
  console.log(score);

  alert('Your final score is ' + score + ' out of 7! Read my website and try again?');

}
quiz(score);
