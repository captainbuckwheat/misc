/*
John has at least A cats and at most B cats. Betty has at least C cats and at most D cats. Is it possible that they both have he same number of cats? Write a function f(a,b,c,d) that returns true or false according to whether the answer is yes or no.
*/


var same_number = function(a,b,c,d) { 
	if (c <= b && d >= a) {
		return true;
	}
	return false;
}; 

var test = function() {
	if (same_number(1,5,1,5) !== true) {
		console.log('test #1 has failed'); 
	} else if (same_number(1,5,5,5) !== true) {
		console.log('test #2 has failed'); 
	} else if (same_number(1,5,2,4) !== true) {
		console.log('test #3 has failed'); 
	} else if (same_number(5,3,2,1) !== false){
		console.log('test #4 has failed'); 
	} else if (same_number(1,2,3,5) !== false){
		console.log('test #5 has failed'); 
	}else {
		console.log('it works like a fkn clock!');
	}
};
