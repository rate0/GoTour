function checkAnswer(answer) {
    var quiz = event.target.closest('.quiz');
    var feedback = quiz.querySelector('.feedback');
    var question = quiz.querySelector('.question').textContent;
    var audio = new Audio('sound/correct.mp3');
    var correctAnswer;
    switch (question) {
        case 'Question 1: What is the capital of France?':
            correctAnswer = ['Paris'];
            break;
        case 'Question 2: What is the tallest mountain in the world?':
            correctAnswer = ['Mount Everest'];
            break;
        case 'Question 3: What country is known as the Land of the Rising Sun?':
            correctAnswer = ['Japan'];
            break;
        case 'Question 4: What is the official language of Brazil?':
            correctAnswer = ['Portuguese'];
            break;
        case 'Question 5: Where is the Great Barrier Reef located?':
            correctAnswer = ['Australia'];
            break;
        default:
            correctAnswer = [];
    }

    if (correctAnswer.includes(answer)) {
        feedback.innerHTML = 'Correct!';
        feedback.style.color = 'green';
        audio.play();
    } else {
        feedback.innerHTML = 'Incorrect! The correct answer is ' + correctAnswer.join(', ') + '.';
        feedback.style.color = 'red';
    }
    
}
