/*
What is the probability that a basketball player will score three or
more baskets in five shots from a certain spot, if on the average she
succeeds with 25 percent of her shots from that spot?
*/

var basketball_probabillity = function(n) {
	var success, sum, basket, count, j, i;
	count = 0; 
	for (i = 0; i < n; i++) {
		sum = 0;
		for (j = 0; j < 5; j++) { // 5 shots 
			basket = Math.floor(Math.random()*4) //her success rate is 25%, so 1 out of 4 times it's a succes, we pick a random number from 0 to 3.
			if (basket < 2) sum++; // say, first out of 4 shots is a success
			if (sum === 3) {
				count++; 
				break;
			}
		}
	}
	return count/n;
}
// alternatively, the following function will also allow us to change the percent 

var basketball_probabillity1 = function(n) {
	var success, sum, basket, count, j, i;
	count = 0; 
	for (i = 0; i < n; i++) {
		sum = 0;
		for (j = 0; j < 5; j++) { // 5 shots 
			basket = Math.floor(Math.random()*100) //her success rate is 25%, so 1 out of 4 times it's a succes, we pick a random number from 0 to 3.
			if (basket < 50) sum++; // say, first out of 4 shots is a success
			if (sum === 3) {
				count++; 
				break;
			}
		}
	}
	return count/n;
}
