/*
You have a group of p people together in a room. What is the
probability that at least two of them share the same birthday? You may
assume that a person's birthday is a random number from 1 to 365. (birthday paradox)
*/

var birthday_in_a_room  = function(p, n) { // p is for people, n is for different cases 
	var birthday, i, j, sum; 
	birthday = []; 
	sum = 0;
	for (i = 0; i < n; i++){ 
		for (j = 0; j < p; j++) birthday[j] = Math.floor(Math.random()*365 + 1);
		if (has_duplicates(birthday)) sum++
	}
	return sum/n
}
