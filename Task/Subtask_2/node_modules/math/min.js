 function getMinOfArray(Array) {
	min = Array[0];
	for (i = 1; i < Array.length; ++i) {
		if (Array[i] < min) min = Array[i];
	return min
  }
 module.exports.min = min;