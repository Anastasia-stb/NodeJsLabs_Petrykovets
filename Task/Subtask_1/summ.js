function summOfNumbers(Array) {
  var result = 0;

  for (var i = 0; i < Array.length; i++) {
    result += Array[i];
  }
  return result;
}
module.exports.summ = summ;