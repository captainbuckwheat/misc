/* suppose we roll a standard fair 6-sided die. what is the probability that 
a) 3 is rolled 
b) an odd number is rolled 
c) a perfect sqaure number is rolled
(AOPS Counting & Probability)
*/


var dice_probability = function(outcome_sides, sides) {
	return console.log(outcome_sides+'/'+sides); 
}

var dice_odd_probability = function(sides) {
	var i, outcome_sides;
	outcome_sides = 0;
	for (i = 1; i <= sides; i++) {
		if (i % 2 !== 0) outcome_sides++; 
	}
	return console.log(outcome_sides+'/'+sides); 
}	

var dice_sq_probability = function(sides) {
	var i, outcome_sides;
	outcome_sides = 0;
	for (i = 1; i <= sides; i++) {
		for (j=1; j<=i; j++) if (j*j === i) outcome_sides++; 
	}
	return console.log(outcome_sides+'/'+sides); 
}		

var test_dice_a = function() {
	var a, b, i, input, got, want, cases, nfailed;
	cases = [
		[1,6, "1/6"],
		[4,6, "4/6"],
	];
	nfailed = 0;
	for (i = 0; i < cases.length; i++) {
		console.log("cases[i][0] is "+cases[i][0]+ " and cases[i][1] is "+ cases[i][1]+" and cases[i][2] is "+cases[i][2]);
		a = cases[i][0];
		b = cases[i][1];
		console.log("a is "+a+" and b is "+b);
		got = dice_probability(a,b);
		want = cases[i][2];
		if (got !== want) {
			nfailed++;
			console.log("dice_probability(" +cases[i][0]+" , "+cases[i][1]+ "): got " + got + "; want " + want)
		} 
	} 
	if (nfailed === 0) console.log('it works like a fkn clock!');
} 

var test_dice_b = function() {
	var i, input, got, want, cases, nfailed;
	cases = [
		[6, "3/6"],
		[10, "5/10"],
	];
	nfailed = 0;
	for (i = 0; i < cases.length; i++) {
		console.log("a is "+a+" and b is "+b);
		got = dice_odd_probability(cases[i][0]);
		want = cases[i][1];
		if (got !== want) {
			nfailed++;
			console.log("dice_odd_probability(" +cases[i][0]+"): got " + got + "; want " + want)
		} 
	} 
	if (nfailed === 0) console.log('it works like a fkn clock!');
} 

var test_dice_c = function() {
	var i, input, got, want, cases, nfailed;
	cases = [
		[6, "2/6"],
		[10, "3/10"],
	];
	nfailed = 0;
	for (i = 0; i < cases.length; i++) {
		console.log("a is "+a+" and b is "+b);
		got = dice_sq_probability(cases[i][0]);
		want = cases[i][1];
		if (got !== want) {
			nfailed++;
			console.log("dice_sq_probability(" +cases[i][0]+"): got " + got + "; want " + want)
		} 
	} 
	if (nfailed === 0) console.log('it works like a fkn clock!');
} 
