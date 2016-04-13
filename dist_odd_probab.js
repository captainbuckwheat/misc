/*
suppose two distinct integers are chosen from between 1 and 9, inclusive. what is the probability that they are both odd?
(AOPS Counting & Probability)
*/

var two_odd = function(n) { // n is # of cases  
	var i, first, second, count, cases, equal; 
	count = 0;
	cases = n;  
	equal = 0;
	for (i = 0; i < cases; i++){ 
		first = Math.floor(Math.random()*(9 - 1 + 1)) + 1;
		//console.log("first is "+first);
		second = Math.floor(Math.random()*(9 - 1 + 1)) + 1;
		//console.log("second is "+ second);
		if (first === second) {
			cases++;
			equal++; // it counts how many times 2 digits are not distinct and replaces it with the distinct cases (cases - equal)
		} else {
			if (first%2 !== 0 && second%2 !== 0) count++; 
		}
	}
	return count/(cases-equal); 
}
