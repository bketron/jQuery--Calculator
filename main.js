$(document).ready(function(){

var answer;
var displayVal = document.querySelector("#answer");
var oppSym = document.querySelector("#oppSymbol")
var firstVal;
var secondVal;
var operator = '0';
var currentEntry = "";
var previousAnswer;


isNumber = function(value) {
	return !isNaN(value);
}

isOperation = function(value) {
	return value === '/' || value === '*' || value === '+' || value === '-';
}

isSymbol = function(value){
	return value === '.';
}

math = function(val1 , val2 , operation) {
	val1 = parseFloat(val1);
	val2 = parseFloat(val2);

	if(operation === '+'){return (val1 + val2)}
	if(operation === '/'){return (val1 / val2)}
	if(operation === '-'){return (val1 - val2)}
	if(operation === '*'){return (val1 * val2)}


}

var entry = '';

$(".button").click(function(value){
	entry = $(this).html()

	if(isOperation(entry)){
		if(entry === '-' && operator === '0'){
			firstVal = currentEntry;
			operator = entry;
			currentEntry = "";

			oppSym.innerHTML = String(entry);

		} else if(entry === '*' && operator === '0'){
			firstVal = currentEntry;
			operator = entry;
			currentEntry = "";

			oppSym.innerHTML =  String(entry);

		} else if(entry === '/' && operator === '0'){
			firstVal = currentEntry;
			operator = entry;
			currentEntry = "";

			oppSym.innerHTML =  String(entry);

		} else if(entry === '+' && operator === '0'){
			firstVal = currentEntry;
			operator = entry;
			currentEntry = "";

			oppSym.innerHTML = String(entry);

		}
	} else if(isNumber(entry)){
		if(operator === '*' || operator === '-' || operator === '/' || operator === '+'){
			secondVal = secondVal + entry;
			currentEntry = currentEntry + entry;
			displayVal.innerHTML = currentEntry
		} else if(operator === '0'){
			previousAnswer = '';
			firstVal = firstVal + entry
			currentEntry = currentEntry + entry;
			displayVal.innerHTML = currentEntry
		}
	} else if(entry === '=' && operator !== '0'){
		if(operator === 'x'){
			secondVal = currentEntry;
			answer = ''
			displayVal.innerHTML = math(firstVal, secondVal, operator)
			firstVal = '';
			secondVal = '';
			operator = '0';
			currentEntry = "";
			previousAnswer = answer;
			oppSym.innerHTML = ''
		}	else {
			secondVal = currentEntry;
			answer = ''
			displayVal.innerHTML = math(firstVal, secondVal, operator)
			firstVal = '';
			secondVal = '';
			operator = '0';
			currentEntry = "";
			previousAnswer = answer;
			oppSym.innerHTML = ''
		}

	} 

	console.log(currentEntry)	

})


$("#clear").dblclick(function(value){
	var clear = $(this).html();

	if(clear === 'C'){
		firatVal = '';
		secondVal = '';
		operator = '0';
		answer = '';
		currentEntry = '';
		displayVal.innerHTML = ''
		oppSym.innerHTML = ''
	}

	console.log(currentEntry)
})

$("#clear").click(function(value){
	var clear = $(this).html();

	if(clear === 'C'){
		currentEntry = '';
		displayVal.innerHTML = ''
	}

	console.log(currentEntry)
})


$("#decimal").click(function(value){
	console.log(currentEntry)

	if(currentEntry.indexOf(".") === (-1)){
		currentEntry = currentEntry + "."
		displayVal.innerHTML = currentEntry
}

	console.log(currentEntry)
})
/*
$('.button').on('click' , function(value){

	var entry = $(this).html();
	console.log(entry);

	if(isOperation(entry)){
		if(entry === '-'){
			displayVal = arithmatic(firstVal , secondVal , entry);
		} else if(entry === '*'){
			displayVal = arithmatic(firstVal , secondVal , entry);
		} else if(entry === '/'){
			displayVal = arithmatic(firstVal , secondVal , entry);
		} else if(entry === '+'){
			displayVal = arithmatic(firstVal , secondVal , entry);
		}
	} else if(isNumber(entry)){


	}
})
*/

















})