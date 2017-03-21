//1

var niz = [7, 4, 52, 10, 4, 5, 12, 1, 3, 6];

var trazenaVrednost = 4;

var vrednostZaZamenu = 25;

noviNiz = [];

function zamena(niz, trazenaVrednost, vrednostZaZamenu) {

	for (var i = 0; i < niz.length; i++) {

		if (niz[i] == trazenaVrednost) {

			niz[i] = vrednostZaZamenu; 
			noviNiz.push(vrednostZaZamenu);
		} else {
			noviNiz.push(niz[i]);
		}
	} 
	console.log(noviNiz);
} 

zamena(niz,4,25);

//2

var niz = [3, 6, 7, 8];

function provera (niz) {
	
	for (i=0;i<niz.length;i++) {
		for (j=i+1;j<niz.length;j++) {
			if (niz[i]===niz[j]) {
				return true;
			} else {
				return false;
			}
		}

	}
}

console.log(provera(niz));

//3

var weight1;
var weight2;
var maxWeight;

function nosivost(weight1,weight2,maxWeight) {

	if (weight1+weight2<=maxWeight){
		return "nosimo oba";
	} else if (weight1> maxWeight && weight2>maxWeight) {
		return "ne možemo ni jedan da ponesemo";
	} else if (weight1>maxWeight && weight2<=maxWeight) {
		return  "možemo drugi";
	} else if (weight1<=maxWeight && weight2>maxWeight) {
		return  "možemo prvi";
	} else if (weight1<=maxWeight && weight2<=maxWeight && weight1+weight2>maxWeight){
		return "možemo da biramo koji ćemo ali ne možemo oba";
	} else {
		return "mozemo oba";
	}
}

console.log(nosivost(1,15,20));