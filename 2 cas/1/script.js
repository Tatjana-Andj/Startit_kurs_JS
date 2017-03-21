
do {
	var user = prompt("unesi ceo, nenegativan broj");
} while (user <= 0);
do {
	var user = prompt("unesi ceo, nenegativan broj");
} while (user!=Number(user));
	
	var sum = 0;

    function prirodniBrojevi () {
		for (i=0; i<=user; i++) {
 		sum = sum + i;
		}
		return sum; 
	}
document.write(prirodniBrojevi());