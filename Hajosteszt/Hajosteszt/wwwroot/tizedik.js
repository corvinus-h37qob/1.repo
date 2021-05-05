var k�rd�sek;
function vissza() {
    if (k�rd�ssz�m == 0) {
        k�rd�ssz�m = k�rd�sek.length - 1;
        let�lt�s();
    }
    else {
        k�rd�ssz�m--;
        let�lt�s();
    }
}

function elore() {
    if (k�rd�ssz�m == k�rd�sek.length - 1) {
        k�rd�ssz�m = 0;
        let�lt�s();
    }
    else {
        k�rd�ssz�m++;
        let�lt�s();
    }
    //innen van a 9.�ra anyaga
    fetch('/questions/4')
        .then(response => response.json())
        .then(data => console.log(data)
        );
    function k�rd�sMegjelen�t�s(k�rd�s) {
        console.log(k�rd�s);
        document.getElementById("k�rd�s_sz�veg").innerText = k�rd�s.questionText
        document.getElementById("v�lasz1").innerText = k�rd�s.answer1
        document.getElementById("v�lasz2").innerText = k�rd�s.answer2
        document.getElementById("v�lasz3").innerText = k�rd�s.answer3
        document.getElementById("k�p").src = "https://szoft1.comeback.hu/hajo/" + k�rd�s.image;
    };
    function k�rd�sBet�lt�s(questionNumber, destination) {
        fetch(`/questions/${questionNumber}`)
            .then(
                result => {
                    if (!result.ok) {
                        console.error(`Hib�s let�lt�s: ${response.status}`)
                    }
                    else {
                        return result.json()
                    }
                }
            )
            .then(
                q => {
                    hotList[destination].question = q;
                    hotList[destination].goodAnswers = 0;
                    console.log(`A ${questionNumber}. k�rd�s let�ltve a hot list ${destination}. hely�re`)
                }
            );
    }
    function init() {
        for (var i = 0; i < questionsInHotList; i++) {
            let q = {
                question: {},
                goodAnswers: 0
            }
            hotList[i] = q;
        }

        //Els� k�rd�sek let�lt�se
        for (var i = 0; i < questionsInHotList; i++) {
            k�rd�sBet�lt�s(nextQuestion, i);
            nextQuestion++;
        }
    }
    function el�re() {
        clearTimeout(timeoutHandler)
        displayedQuestion++;
        if (displayedQuestion == questionsInHotList) displayedQuestion = 0;
        k�rd�sMegjelen�t�s()
    }
    function v�laszfeldolgoz�s(v�lasz) {
        if (!v�lasz.ok) {
            console.error(`Hib�s v�lasz: ${response.status}`)
        }
        else {
            return v�lasz.json()
        }
    }
}