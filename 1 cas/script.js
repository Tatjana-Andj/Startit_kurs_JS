var user = prompt("papir, kamen ili makaze?").toLowerCase();

var computer = Math.random();

if (computer < 0.33) {
    computer = "papir";
} else if (computer <= 0.66) {
    computer = "makaze";
} else {
    computer = "kamen";
}

if (user == computer) {
    document.write("<h1>Nereseno, refresuj odmah!</h1>");
} else if ( user == "papir") {
    if (computer == "makaze") {
        document.write("<h1>Ha ha ha! Try again! :D</h1>");
    } else {
        document.write("<h1>Pobedio si.</h1>");
    }
} else if ( user == "kamen") {
    if (computer == "papir") {
        document.write("<h1>Ha ha ha! Try again! :D</h1>");
    } else {
        document.write("<h1>Pobedio si.</h1>");
    }
} else if ( user == "makaze") {
    if (computer == "kamen") {
        document.write("<h1>Ha ha ha! Try again! :D</h1>")
    } else {
        document.write("<h1>Nesto se desilo, nemam pojma, moras da refresujes.</h1>");
    }
} else if ( user == "kamen") {
    if (computer == "makaze") {
        document.write("<h1>Pobedio si covece!</h1>");
    } else {
        document.write("<h1>Ha ha ha! Try again! :D</h1>");
    }
} else if ( user == "papir") {
    if (computer == "kamen") {
        document.write("<h1>Pobedio si.</h1>");
    } else {
        document.write("<h1>Ha ha ha! Try again! :D</h1>");
    }
} else if ( user == "makaze") {
    if (computer == "papir") {
        document.write("<h1>Pobedio si.</h1>");
    } else {
        document.write("<h1>Nesto se desilo, nemam pojma, moras da refresujes.</h1>");
    }
}
