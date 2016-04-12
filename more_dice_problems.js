/* Here are some cool questions! (AOPS Counting & Probability)

a) suppose we have 2 fair six-sided dice. if we roll them both what is the probabilty the two nubers shown sum up to 7?
*/

var sum_two_dice = function(dice, sum, n) { //where sum is the sum of the dice; dice is # of dice & n is # of cases we roll the dice simultaneously
	var dice_outcome, count, i, j, add; 
	count = 0;
	for (i = 0; i < n; i++) { // should be atleast dice*30000 cases
		add = 0; 
		for (j = 0; j < dice; j++){
			dice_outcome = Math.floor(Math.random()*(6 - 1 + 1)) + 1; //the numbers on each side;
			add = dice_outcome + add; 
		}
		if (add === sum) count++; // count of desired outcomes
	}
	return count/n;
}
