/* 
Get number of sets of b consecutive positive integers product of wich is less than a. 
Example:
how many sets of four consecutive positive integers are there such that the product of the four integers is less than 100 000?
 (AOPS Counting & Probability)
*/

var sets_of_integers = function(a,b){ //(a = less than;  and b = #of integers)		
 	var i, j, product, sets;
	sets  = 0;
 	for (i = 1; i <= a - b; i++) { 																																
			product = 1;															
			for (j=i; j<i+b; j++) product *= j;											
			if (product < a) sets++;
			else break;
	}
	return sets; 
} 
 
var test_sets  = function() {
	var i, input, got, want, cases, nfailed;
	cases = [
		[0,0, 0],
		[1,1, 0],
		[2,1, 1],
		[3,2, 1],
		[7,2, 2],
		[100,3, 3],
		[10000, 4, 8],
	];
	nfailed = 0;
	for (i = 0; i < cases.length; i++) {
		a = cases[i][0];
		b = cases[i][1];
		got = sets_of_integers(a,b);
		want = cases[i][2];
		if (got !== want) {
			nfailed++;
			console.log("sets_of_integers(" +cases[i][0],cases[i][1]+ "): got " + got + "; want " + want)
		} 
	} 
	if (nfailed === 0) console.log('it works like a fkn clock!');
} 
