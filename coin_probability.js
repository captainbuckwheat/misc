/* suppose we flip four coins simultaneously: a penny, a nickle, a dime, and a quarter. 
What is the probability that: 
a) they all come up heads?
b) the penny and nickle both come up heads?
c) the penny and dime both come up the same?
d) at least 15 cents worth of coins come up heads?
*/



var all_heads = function(coins,n){ // the more coins you use, the higher n should be
	var i, sum, tails, heads, num_all_heads; 
	heads = 1; // if you need to know probability of all tails switch 1 and 2; 1 is a succesful outcome
	tails = 2;
	num_all_heads = 0;
	for (j = 0; j < n; j++){
		sum = 0; 
		for (i = 0; i < coins; i++){
			sum = (Math.floor(Math.random()*(tails - heads + 1)) + heads)+sum;
		} 
		if (sum === coins) {
			num_all_heads++
		}	 
	}
	return num_all_heads/n;
}
