const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("What is your name? ")
console.log("Hello " + candidateName + "!");
}

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question;
let questions = ['1) Who was the first American woman in space?', '2) True or false: 5 kilometer = 5000 meters?', '3) (5 + 3)/2 * 10 = ?', "4) Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?",'5) What is the minimum crew size for the ISS?'];
let correctAnswer = '';
let candidateAnswer;
let correctAnswers = ['Sally Ride', 'true', '48', 'trajectory', '3'];
let candidateAnswers = [];
let candidateGrade;
let i = 0;




function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let i = 0; i < questions.length; i++) {
    candidateAnswer = input.question(questions[i]);
    candidateAnswers.push(candidateAnswer);

    //console.log(candidateAnswers);
    console.log(`Your answer: ${candidateAnswers[i]}`);
    console.log(`Correct answer: ${correctAnswers[i]}`);
  }
}

function gradeQuiz(candidateAnswers) {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //
  let grade = 0;
    for (let i = 0; i < questions.length; i++) {
      if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()){
       grade = grade + 1;
      }

    }
    let finalGrade = grade /5*100
      console.log(`>>>Overall Grade: ${finalGrade} (${grade}) of 5 responses correct`);
    if (finalGrade > 80) {
      console.log('>>>Status: Passed<<<');
    }else{
      console.log('>>>Status: Failed<<<');
    }
      //let grade = 0;
      //return grade;
    }

 



function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};