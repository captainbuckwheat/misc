/*
Two players, each with a stake of ten pennies, engage in the following
game: A coin is tossed, and if it is (say) heads(0), player A gives
player B a penny; if it is tails, player B gives player A a penny.
What is the probability that one player will lose his or her entire
stake of 10 pennies if they play for 200 tosses?
*/

var ten_pennies = function(n, max) {
	var player_a, player_b, count, toss; 
	count = 0;
	for (i = 0; i < n; i++){ 
		player_a = 10; 
		player_b = 10; 
		for (j = 0; j < max; j++) {
			toss = Math.floor(Math.random()*2)
			if (toss < 1) {
				player_a--; 
				player_b++;
			} else {
				player_b--; 
				player_a++;
			}
			if (player_a <= 0 || player_b <= 0) {
				count++
				break;
			}
		}
	}
	return count/n
}
