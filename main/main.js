module.exports = function main(s) {
  /*Write your cade here
  var length = s.length
  var sum = 0;
  for(var i = 0; i<length; i++){
    sum = sum + Number(console.log(s.charCode80At(i)))*/
    var sum = 0
    var num = Number(s)
    var arr = new Array()
    for(var i = 0; i<s.length; i++){
      arr[i] = num%10
      num = Math.floor(num/10)
    }
    for(var j = 0; j<s.length; j++){
      sum = sum + arr[j]
    }
    return sum
  };
