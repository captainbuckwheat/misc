/*  Mr. Smith has two children. At least one of them is a boy. What is the probability that both children are boys?
 (Boy or Girl paradox)
Based on n cases. The higher the n - the more reliable and accurate the answer.  
*/
 
var probability = function(n){
	var x, i, min, max, sum, big, little, count;
	count = 0; 
	sum = 0; 
	min = 0;  
	max = 1; 
	while (count < n) {
		 big = Math.floor(Math.random() * (max - min + 1)) + min;
		 little = Math.floor(Math.random() * (max - min + 1)) + min;
		 if (big === 0 && little === 0){ //boy is zero
		 	  continue; 
		 } else {count = count + 1; }
		 if (big === 1 && little === 1) { sum  = sum + 1; }
	}
	return sum/count; 
}
