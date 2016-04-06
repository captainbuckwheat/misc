/*
 There is a certain number of chambers with the certain number of bullets in some of the chambers. 
    We can mark empty chambers as " - " and chambers with bullets as " + ", 
    so 3 chambers with 2 bullets will look like a = -++ or a = ++- or a = +-+
    
A) What are the chances of being shot after spinning the cylinder 1 time and then pulling the trigger?
B) What are the chances of being shot after spinning the cylinder n times and pulling the trigger after each spin?
C) What are the chances of being shot after surviving the first empty shot and pulling the trigger again w/o a spin?
D) What are the chances of being shot after surviving the first empty shot n times and pulling the trigger again w/o a spin?
E) I know that there are 3 bullets in a revolver: 2 are adjacent and 1 is surrounded by empty chambers.
      I survive the first shot. I am told that it won't matter if the cylinder would be spun or not, chances of survivng are the same. 
      How many chambers are in the cylinder?
F) What are the chances of being shot after spin vs shot after surviving an empty shot and not spin?
    - In other words: 
      I was shot at and survived. Knowing how many chambers are in a revolver and the order of chambers with bullets, 
      should I ask for a spin for more chances of surviving the next shot or not?
(Dick Hess @G4G12 2016)
*/

//A
var shot_if_spin = function(a){
	var i, sum;
	sum = 0; 
	if (a===""){return undefined};
	for (i = 0; i < a.length; i++){
		if (a[i]==="+"){
			sum = sum + 1; 
		}
	}
	return sum/a.length;
}
var test = function() {
	var i, input, got, want, cases;
	cases = [
		["", undefined],
		["+", 1/1],
		["-", 0/1],
		["-+", 1/2],
		["--+", 1/3],
		["+-+++", 4/5],
	];
	for (i = 0; i < cases.length; i++) {
		input = cases[i][0];
		got = shot_if_spin(input);
		want = cases[i][1];
		if (got !== want) {
			console.log("shot_if_spin(" + input + "): got " + got + "; want " + want)
		} else { console.log('it works like a fkn clock!');}
	} 
}

//B
var random_char = function(a){
	var max, min, i; 
	max = a.length - 1; 
	min = 0;  
	i = Math.floor(Math.random() * (max - min + 1)) + min;
	return a[i]; 
}
var shot_if_spin_for_n = function(a,n){
	var pluses, minuses, i; 
	pluses = 0; 
	minuses = 0;
	for (i = 0; i < n; i++){
		r = random_char(a);
		if (r === "+"){pluses = pluses + 1;}
		else {minuses = minuses + 1;}
	}
	return console.log("chance of being shot after every spin is "+ pluses/n);
}

//C
var shot_if_survived = function(a){
	var i, minuses, pluses, next, count; 
	pluses = 0; 
	minuses = 0;
	count = 0;
	for (i = 0; i < a.length; i++){
		if (a[i] === "-"){
			count = count + 1;
			if (i === a.length - 1){
				next = a[0];
			} else { 
				next = a[i+1];
			}
			if (next === "-"){ 
				minuses = minuses + 1;
			} else {
				pluses = pluses + 1;
			}
		}
	} 
	return pluses/count;
}

//D
var shot_in_no_spin_for_n = function(a,n){
	var max, min, i, z, minuses, pluses, next, count; 
	pluses = 0; 
	minuses = 0;
	count = 0;
	max = a.length - 1; 
	min = 0;  
	for (i = 0; i < n; i++){
		z = Math.floor(Math.random() * (max - min + 1)) + min;
		if (a[z] === "-"){
			count = count + 1;
			if (z === max){
				next = a[0];
			} else { next = a[z+1];}
			if (next === "-"){ 
				minuses = minuses + 1;
			} else {
				pluses = pluses + 1;
			}
		}
	}
	return console.log("chance of being shot after every surviving is "+ pluses/count);
}

//E
var equal_chances = function(a){
	while (a.length <100){
		if (shot_if_spin(a) === shot_if_survived(a)){
			return a.length; 
		} else {
			a = a + "-";
		}
	}
}

//F
var chances = function(a){
	while (a.length <100){
		if (shot_if_spin(a) === shot_if_survived(a)){
			return a.length; 
		} else {
			a = a + "-";
			console.log("For a = "+a+" chances of being shot after spin vs shot after surviving and no spin are "+ shot_if_spin(a)+" vs "+shot_if_survived(a));
		}
	}
}
