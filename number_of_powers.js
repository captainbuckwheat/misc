/* Example:
  How many 4-digit numbers are perfect cubes?
(AOPS Counting & Probability)
*/

var number_of_powers = function(a,b,c){ // a - starting digit, b - ending digit, c - power
	var i, j, sum; 
	sum = 0;
	if (c===1){return b};
	for (i = b; i >= a; i--){
		for (j = 2; j <= i; j++){
			if (Math.pow(j,c) === i){
				sum = sum + 1;
			}
		}
	} 
	return sum; 
}

var tests = function(){
	var i, input, got, want, cases;
	cases = [
		[0,0,0, 0],
		[1,1,1, 1],
		[1,1,2, 0],
		[1000,9999,3, 12],
		[1,16,2, 3],
		[1, 16, 3, 1],
	];
	for (i = 0; i < cases.length; i++) {
		a = cases[i][0];
		b = cases[i][1];
		c = cases[i][2];
		got = number_of_powers(a,b,c);
		want = cases[i][3];
		if (got !== want) {
			console.log("number_of_powers(" +cases[i][0],cases[i][1],cases[i][2]+ "): got " + got + "; want " + want)
		} else { console.log('it works like a fkn clock!');}
	} 
}
