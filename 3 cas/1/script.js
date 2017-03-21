var cene = [5, 145, 69, 56, 13, 456, 78, 4, 30];

function racunanjePoreza(cene) {

	var porezi = [];

	for (var i = 0; i < cene.length; i++) {
		if (cene[i] < 50) {
			porezi.push(Math.floor(cene[i]*1.18));
		} else {
			porezi.push(Math.floor(cene[i]*1.08));
		}
	}
	return console.log(porezi);
}

racunanjePoreza(cene);




