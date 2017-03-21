do {
	var racun = prompt("Koliko imas ske?");
} while ((racun % 1!= 0)||(racun<=0))
racun!=Number(racun);

do {
	var cena = prompt("Koliko kosta to sto hoces da kupis?");
} while ((cena<=0)||(cena>racun))
cena!=Number(cena);
	var sum = 0;
function kes() {
	var sum = racun / cena;
	var sumN = Math.round(sum);
	return (sumN);
}

document.write(kes(racun,cena));