var hotList = [];
var questionsInHotList = 3;
var displayedQuestion;
var numberofQuestions;
var nextQuestion = 1;

function init() {
    for (let i = 0; i < QusteionsInHotList; i++) {
        hotlist[i] = {
            question: {},
            goodAnswers: 0
        }
    }

    for (let i = 0; i < questionsInHotList; i++) {
        kérdésbetöltés(nextQuestion, i);
        nextQuestion++;

    }

}

function kérdésbetöltés(questionnumber, destination) {
    fetch('/questions/${questionumber}')
        .then(result => {
            if (!result.ok) {
                conolse.error('hibás letöltés: ${result.status}');
                return null;
            }
            else {
                return result.json();
            }
        })
        .then(q => {
            hotlist[destination] = q;
        })
}