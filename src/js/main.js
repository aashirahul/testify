function fizz (number) {
if(number%3==0&& number%5==0){
	var num = 'fizzbuzz';
} else if (number%3==0){
	var num = 'fizz';
}else if (number%5==0){
	var num = 'buzz';
}else {
var num = number;
}
return num;
  // TODO


};

function fizzBuzz (start, end) {
  // Write fizzBuzz here once fizz is finished.
  // loop, fizz. console
  var number;
for(number=start;number<=end; number++){
	var result =fizz(number);
	console.log(result);

}

};

export { fizz };
