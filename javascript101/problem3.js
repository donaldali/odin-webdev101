/*
 * The prime factors of 13195 are 5, 7, 13 and 29.
 *
 * What is the largest prime factor of the number 600851475143 ?
 */

// Idea for largestPrimeFactor method gotten from the Primality Test
// wikipedia article (http://en.wikipedia.org/wiki/Primality_test)
// which was also used as the basis of the isPrime method below
var largestPrimeFactor = function(number){
	var primeFactors = [];
	var maxDivisor = parseInt(number / 2);

	if(number % 2 === 0){
		number = reduceByFactor(number, 2);
		primeFactors.push(2);
	}
	if(number % 3 === 0){
		number = reduceByFactor(number, 3);
		primeFactors.push(3);
	}

	var divisor = 5;
	while(divisor <= maxDivisor && number > 1){
		if((number % divisor === 0) && isPrime(divisor)){
			number = reduceByFactor(number, divisor);
			primeFactors.push(divisor);
		}
		if((number % (divisor + 2) === 0) && isPrime(divisor + 2)){
			number = reduceByFactor(number, divisor + 2);
			primeFactors.push(divisor + 2);
		}
		divisor += 6;
	}

	if(primeFactors.length === 0){
		return number;
	} else {
		return primeFactors[primeFactors.length - 1];
	}
}

var isPrime = function(number){
	if(number < 2){
		return false;
	} else if(number === 2 || number === 3){
		return true;
	} else if((number % 2 === 0) || (number % 3 === 0)){
		return false;
	}
	
	var maxDivisor = parseInt(Math.sqrt(number));
	var divisor = 5;
	while(divisor <= maxDivisor){
		if((number % divisor === 0) || (number % (divisor + 2) === 0)){
			return false;
		}
		divisor += 6;
	}
	return true;
}

var reduceByFactor = function(number, factor){
	while(number % factor === 0){
		number /= factor;
	}
	return number;
}

console.log(largestPrimeFactor(600851475143)); // 6857
