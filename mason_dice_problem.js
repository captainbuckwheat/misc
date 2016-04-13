
/* A fair die bearing the numbers 1, 2, 3, 4, 5, 6 is repeatedly thrown
until the running total first exceeds 12. What’s the most likely total
that will be obtained?
(04/11/16 Josh showed me the problem from Mason)
*/

var over_12 = function() {
	var sum; 
	sum = 0;
	while (true){
		sum = (Math.floor(Math.random()*(6 - 1 + 1)) + 1)+sum;
		if (sum > 12) return sum
	}
}

var run_over_12 = function(n) { //where n is the number of rolls (the higher is n the more accuarte probability will be)
	var i, count;
	count = [];
	for (i = 0; i < 6; i++) count[i] = 0; //because the only possible sums are 13 through 18, so there should be 6 slots for sums 
	for (i = 0; i < n; i++){
		count[over_12()-13]++ // since slots 0 through 5 are responsible for sums 13 through 18, so i in count[i] = sum-13
	}
	for (i = 0; i < count.length; i++) count[i] /= n; // which is 18-13+1 = 6,we can just say 6 instead of count.length
	return count; 
}

var probability_of = function(a, n) { //a is a sum from 13 to 18 inclusive; n is number of rolls - should be high for more accurate probab.
	var count, sum, i; 
	count = 0; 
	for (i = 0; i < n; i++) {
		sum = 0;
		for (j = 0; j < 13; j++) { // even if each time we roll we get 1 eye; after 13 times the sum that exceeds 12 will be reached
			sum = (Math.floor(Math.random()*(6 - 1 + 1)) + 1)+sum;
			if (sum > 12) {
				if (sum === a) count++; 
				break; 
			}
		}
	}
	return count/n
}

var test = function() {
	var i, input, got, want, cases, precision;
	precision = 0.02;
	cases = [
		[13,10000], //first is i in count[i] from run_over_12(); second is n for number of rolls; 3d is probability of i in count[i] from 
		[14,20000],
		[15,30000],
		[16,100000],
		[17,60000],
		[18,10000],
	];
	for (i = 0; i < cases.length; i++) {
		got = run_over_12(cases[i][1])[(cases[i][0])-13];
		want = probability_of(cases[i][0],cases[i][1]);
		if (got - want > precision || want - got > precision ) {
			console.log("run_over_12(" + Number(cases[i][1])+ ")[" + Number(cases[i][0]-13)+"]: got " + got + "; want " + want)
		} else { console.log('it works like a fkn clock!');}
	} 
}
