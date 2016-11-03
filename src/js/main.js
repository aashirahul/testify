function fizz (number) {
	var num;
	if(number%3==0&& number%5==0){
		num = 'fizzbuzz';
	} else if (number%3==0){
		num = 'fizz';
	}else if (number%5==0){
		num = 'buzz';
	}else {
		num = number;
	}
	return num;
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
