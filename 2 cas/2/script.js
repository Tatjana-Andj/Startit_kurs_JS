do {
	var user = prompt("unesi broj");
} while (user<=0);

do {
	var user = prompt("unesi broj");
} while (user!=Number(user));	

	var sum = 1;

function faktorijel () {
	for (i=1; i<=user; i++) {
 	sum = sum * i;
	}
	return sum; 
}
document.write(faktorijel());