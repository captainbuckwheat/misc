var split = function(s, t){
	var i, k, p;
	k = 0;
	p = [];
	p[k] = '';
	for (i = 0; i < s.length; i++){
		if(s[i]===t){
			k = k + 1;
			p[k] = '';
		} else {
			p[k] = p[k] + s[i];
		}
	}
	return p;
};

var test = function(){
	if (JSON.stringify(split('ak sa na', ' '))!=='["ak","sa","na"]'){
		console.log("failed split #1");
	} else 	if (JSON.stringify(split('z.z.z.z', '.'))!=='["z","z","z","z"]'){
		console.log("failed split #2");
	} else 	if (JSON.stringify(split(' p', 'p'))!=='[" ",""]'){
		console.log("failed split #3");
	} else {
		console.log('it works like a fkn clock!');
	}		
};
