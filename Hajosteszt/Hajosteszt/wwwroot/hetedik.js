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
}