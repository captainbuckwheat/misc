/* Here are some cool dice questions! 

a) suppose we have 2 fair six-sided dice. if we roll them both what is the probabilty the two nubers shown sum up to 7? (AOPS Counting & Probability)
b) on average, how many times must a 6-sided die be rolled until a 6 turns up?
c) on average, how many times must a 6-sided die be rolled until a 6 turns up twice in a row?
d) On average, how many times must a 6-sided die be rolled until the sequence 65 appears (i.e., a 6 followed by a 5)?
*/

//a)
var sum_dice = function(dice, sum, n) { //where sum is the sum of the dice; dice is # of dice & n is # of cases we roll the dice simultaneously
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
// alternatevely a more advanced version where you can get the probability for all the possible sums of any # dice: 

var sum_dice_1 = function(dice, n) { //where dice is # of dice & n is # of cases we roll the dice simultaneously
	var dice_outcome, i, j, sum, count;
	count = []; 
	for (i = 0; i <= dice * 6; i++) count[i] = 0; //initialize all histogram elements to 0
	for (i = 0; i < n; i++) { // should be atleast dice*30000 cases
		sum = 0; 
		for (j = 0; j < dice; j++){
			dice_outcome = Math.floor(Math.random()*(6 - 1 + 1)) + 1; //the numbers on each side;
			sum = dice_outcome + sum; 
		}
		count[sum]++; 
	}
	for (i = 0; i < count.length; i++) count[i] /= n; //returns an array of all probabilities for sums 0 through through 6 * # of dice
	return count;
}

//b)

var dice_side = function (a,sides,n) {
	var i, side, roll, sum; 
	sum = 0;
	for (i = 0; i < n; i++) { 
		roll = 0; 
		while(true) {
			side = Math.floor(Math.random()*sides + 1); //assuming all sides are distinct and consecutive from 1 to sides
			roll++; //counting every time we roll
			if (side === a) { //in a fair dice a is irrelevant, but we leave it as a variable for a sake of an actual problem
				sum+= roll; // the roll on which side a showed up
				break;
			}
		}
	}
	return sum/n; 
}
//the simple answer: for a fair dice in which there's an equally likely chance of landing on any face; 
//the answer should always be the number of the sides for any face. 

//c)

var dice_side_in_a_row = function (a,sides,n) {
	var i, side, roll, sum, count; 
	sum = 0;
	for (i = 0; i < n; i++) { 
		roll = 0;
		count_roll = undefined;  
		while(true) {
			roll++; //counting every time we roll
			side = Math.floor(Math.random()*sides + 1); //assuming all sides are distinct and consecutive from 1 to sides
			if (side === a && roll === count_roll+1){
				sum+= roll; // the roll on which side a showed up 2nd time in a row
				break
			} else if (side === a) count_roll = roll; 
			
		}
	}
	return sum/n; 
}


//d)

var dice_a_b = function (a,b,sides,n) { //a is the first face, b is the second distinct face
	var i, side, roll, sum, count; 
	sum = 0;
	for (i = 0; i < n; i++) { 
		roll = 0;
		count_roll = undefined;  
		while(true) {
			roll++; //counting every time we roll
			side = Math.floor(Math.random()*sides + 1); //assuming all sides are distinct and consecutive from 1 to sides
			if (side === b && roll === count_roll+1) {
				sum+= roll; // the roll on which side a showed up 2nd time in a row
				break
			} else if (side === a) count_roll = roll; 
		}
	}
	return sum/n; 
}
