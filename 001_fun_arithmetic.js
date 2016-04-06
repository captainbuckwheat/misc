/* Find a,b,c,d,e,f,g  such that 
    a^2 * bcde / f^2 + g^2 = 2016
  !! where a,b,c,d,e,f,g are non repeating digits from 0 to 6
(!Look up the name of the mathematician! @G4G12)
*/

var find_2016 = function() {
    var i, j, a, b, c, d, digit, found, k;
	for (i = 1000000; i < 10000000; i++) { // all 7-digit numbers
	  j = String(i)
	  a = Number(j[0])
	  b = 1000 * Number(j[1]) + 100 * Number(j[2]) + 10 * Number(j[3]) + Number(j[4])
	  c = Number(j[5])
	  d = Number(j[6])
	  if (a*a * b / (c * c + d * d) === 2016) {
	    for (digit = 0; digit <= 6; digit++) {
		  found = false;
		  for (k = 0; k < j.length; k++) {
		    if (Number(j[k]) === digit) {
			  found = true;
			}
		  }
		  if (! found) break;
		}
		if (found) return i;
	  }
	}
	return undefined;
}
