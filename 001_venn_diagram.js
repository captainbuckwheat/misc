/* 
At scholl there are 12 players on the basketball team. All of the players are taking at least one foreign language class. 
The school offers only Spanish and French as its foreign languages. 8 of the players are taking Spanish 
and 5 of the players are taking both, how many players are taking French?
(AOPS Counting & Probability)
/*

var french = function(total, both, spanish_all){
	var spanish_only; 
	spanish_only = spanish_all - both;
	return total - spanish_only; 
}
