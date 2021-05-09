var readLineSync = require('readline-sync')

var userName = readLineSync.question("What's your name? ")

var score = 0;

console.log('Welcome ' + userName)
var gameAnswer = readLineSync.question("Now let's begin shall we? ")

if(gameAnswer === "yes"){

  function quizGame(question, answer){
    var userAnswer = readLineSync.question(question)
    
    if(answer === userAnswer){
      console.log("yippie that's a right answer")
      score += 1;
    } else {
      console.log("Sorry that's a wrong answer!")
    }
    console.log("current score: " + score)
    console.log('-------------')
  }

  var questions = [{
    question: `Who is a founding Titan among these?
    a: Reiner
    b: Mikasa
    c: Eren
    d: Levi 
     `,
    answer: 'c'
  }, {
    question: `who is a traitor among these
    a: Reiner 
    b: Hanji
    c: Erwin
    d: Armin
    `,
    answer: 'a'
  }, {
    question: `What is in the basement
    a: Book of truth
    b: Titan converting power
    c: Entry to the titan world
    d: Grisha Yeagers biggest secret
     `,
     answer: 'a'
  }, {
    question: `What is Kenny's last name
    a: Ackreman
    b: Ýeager
    c: Tyblur
    d: no last name
     `,
     answer: 'a'
  }, {
    question: `How many types of titans are there
    a: 10
    b: 9
    c: 5
    d: 7
    `,
    answer: 'b'
  }]

   for(let i =0; i< questions.length; i ++){
    let currentQuestion = questions[i]
    quizGame(currentQuestion.question, currentQuestion.answer)
    
  }
} else {
  console.log("I guess it's some other time then")
}



