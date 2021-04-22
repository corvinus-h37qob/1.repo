﻿var kérdések;
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
    function kérdésBetöltés(id) {
        fetch(`/questions/${id}`)
            .then(response => {
                if (!response.ok) {
                    console.error(`Hibás válasz: ${response.status}`)
                }
                else {
                    return response.json()
                }
            })
            .then(data => kérdésMegjelenítés(data));
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