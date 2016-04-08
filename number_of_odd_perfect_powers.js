 /*
 What is the number of perfect odd powers of c between a and b?
 Example: how many odd perfect squares are between 5 and 211?
 (AOPS Counting & Probability)
*/
 
 var number_of_odd_powers = function(a,b,c){ // a - starting digit, b - ending digit, c - power
 	var i, j, sum; 
 	sum = 0;
 	for (i = b; i >= a; i--){
		if (i%2 === 0) continue;
 		for (j = 1; j <= i; j++) if (Math.pow(j,c) === i) sum = sum + 1;
 	} 
 	return sum; 
 }
