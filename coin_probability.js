/* suppose we flip four coins simultaneously: a penny, a nickle, a dime, and a quarter. 
What is the probability that: 
a) they all come up heads?
b) the penny and nickle both come up heads?
c) the penny and dime both come up the same?
d) at least 15 cents worth of coins come up heads?
(AOPS Counting & Probability)
Suggestions: 
-  good test for probability would be to raise the n cases number to the number of coins we are interested in * 10 000
- for case a) all_heads coins = 4; n = 40 000; for case b) some = the numbers of coins we are interested in (penny and nickle) = 2 & n = 20 000
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

var some_heads = function(some, n){
	var i, sum, tails, heads, num_all_heads; 
	heads = 1; // if you need to know probability of some tails switch 1 and 2; 1 is a succesful outcome
	tails = 2;
	num_some_heads = 0;
	for (j = 0; j < n; j++){
		sum = 0; 
		for (i = 0; i < some; i++){
			sum = (Math.floor(Math.random()*(tails - heads + 1)) + heads)+sum;
		} 
		if (sum === some) {
			num_some_heads++
		}	 
	}
	return num_some_heads/n;
}

var flip = function() {
	var heads, tails; 
	heads = 1; // if you need to know probability of all tails switch 1 and 2; 1 is a succesful outcome
	tails = 2;
	return Math.floor(Math.random()*(tails - heads + 1)) + heads;
}
	
var heads_worth = function(worth, n){
	var i, num_worth, qurter, dime, nickle, penny, sum; 
	num_worth = 0;
	for (j = 0; j < n; j++){
		sum = 0; 
		quarter = flip();
		dime = flip();
		nickle = flip();
		penny = flip(); 
		if (quarter === 1) sum  = sum + 25;
		if (dime === 1) sum  = sum + 10;
		if (nickle === 1) sum  = sum + 5;	
		if (penny === 1) sum  = sum + 1;
		if (sum >= worth) {
			num_worth++
		}
	}
	return num_worth/n;
}
