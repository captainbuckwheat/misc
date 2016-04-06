/*
“I have two children. One is a boy born on a Tuesday. What is the probability I have two boys?”
(Gary Foshee @G4G9)
Based on n cases. The higher the n - the more reliable and accurate the answer.  
*/

var probability = function(n){
	var x, i, min, max, sum, big, little, count;
	count = 0; 
	sum = 0; 
	min = 0;  //boy 
	max = 1;  //girl
	while (count < n){
 		big = Math.floor(Math.random() * (max - min + 1)) + min;
 		little = Math.floor(Math.random() * (max - min + 1)) + min;
		bigday = Math.floor(Math.random() * (7 - 1 + 1)) + 1;
		littleday = Math.floor(Math.random() * (7 - 1 + 1)) + 1;
		if ((big === 0 && bigday === 2) || (little === 0 && littleday === 2)){
			count++; 
			if (little === 0 && big === 0){
				sum++; 
			}
		}
	}
	return sum/count; 
}
