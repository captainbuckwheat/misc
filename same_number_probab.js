/*
each person from p number of people draws a note from the hat with the number from 1 to x written on it.
It's done only one time per person, then the note is put back into the  hat. 
What is the probability for n number the same number from 1 to x will be drawn between p people?
*/

var same_number = function(p, x, n) { //where p number of people chose a random number from 1 to x. n = cases for probabaility
	var i, j, sum, seen, num; 
	sum = 0;
	for (i = 0; i < n; i++) {
	    seen = {} 
		for (j = 0; j < p; j++) {
		  num = Math.floor(Math.random()*x + 1);
		  if(seen[num]) {
		    sum++;
			break;
		  }
		  seen[num] = true;
	    }
	}
	return sum/n;
}
