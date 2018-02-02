var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');

var sum = document.getElementById('sum');
var ev = document.getElementById('bbb');

//num1.addEventListener("input", add);
//num2.addEventListener("input", add);

ev.addEventListener("click", add);


function add(){

	var one = parseFloat(num1.value);
	var two = parseFloat(num2.value);
	
	document.getElementById('sum').innerHTML = one + two;


}