var kérdések;
function vissza() {
    if (kérdésszám == 0) {
        kérdésszám = kérdések.length - 1;
        letöltés();
    }
    else {
        kérdésszám--;
        letöltés();
    }
}

function elore() {
    if (kérdésszám == kérdések.length - 1) {
        kérdésszám = 0;
        letöltés();
    }
    else {
        kérdésszám++;
        letöltés();
    }
    //innen van a 9.óra anyaga
    fetch('/questions/4')
        .then(response => response.json())
        .then(data => console.log(data)
        );
    function kérdésMegjelenítés(kérdés) {
        console.log(kérdés);
        document.getElementById("kérdés_szöveg").innerText = kérdés.questionText
        document.getElementById("válasz1").innerText = kérdés.answer1
        document.getElementById("válasz2").innerText = kérdés.answer2
        document.getElementById("válasz3").innerText = kérdés.answer3
        document.getElementById("kép").src = "https://szoft1.comeback.hu/hajo/" + kérdés.image;
    };
    function kérdésBetöltés(questionNumber, destination) {
        fetch(`/questions/${questionNumber}`)
            .then(
                result => {
                    if (!result.ok) {
                        console.error(`Hibás letöltés: ${response.status}`)
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
                    console.log(`A ${questionNumber}. kérdés letöltve a hot list ${destination}. helyére`)
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

        //Elsõ kérdések letöltése
        for (var i = 0; i < questionsInHotList; i++) {
            kérdésBetöltés(nextQuestion, i);
            nextQuestion++;
        }
    }
    function elõre() {
        clearTimeout(timeoutHandler)
        displayedQuestion++;
        if (displayedQuestion == questionsInHotList) displayedQuestion = 0;
        kérdésMegjelenítés()
    }
    function válaszfeldolgozás(válasz) {
        if (!válasz.ok) {
            console.error(`Hibás válasz: ${response.status}`)
        }
        else {
            return válasz.json()
        }
    }
}