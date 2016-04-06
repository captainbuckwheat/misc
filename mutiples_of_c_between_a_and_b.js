/* 
How many multiples of c are between two positive integers?
Example question: 
	How many multiples of 3 are between 62 and 215 (from AOPS Counting & Probability)
*/ 

var multiples = function(a,b,c){ // a - first digit; b - last digit; c - divisor
	var sum,i;
	sum = 0; 
	for (i = a; i <= b; i++){
		if (i % c === 0){ sum = sum + 1; }
	}
	return sum;  
}

var test_multiples  = function(){
	var i, input, got, want, cases;
	cases = [
		[0,0,0, 0],
		[1,1,1, 1],
		[1,1,2, 0],
		[62,215,3, 51],
		[9,101,10, 10],
		[11,103,10, 9],
	];
	for (i = 0; i < cases.length; i++) {
		a = cases[i][0];
		b = cases[i][1];
		c = cases[i][2];
		got = multiples(a,b,c);
		want = cases[i][3];
		if (got !== want) {
			console.log("multiples(" +cases[i][0],cases[i][1],cases[i][2]+ "): got " + got + "; want " + want)
		} else { console.log('it works like a fkn clock!');}
	} 
}
