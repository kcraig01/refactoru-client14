//Part 1. Object literal
var Repeater = {
	repeatString: function repeatString(str,n){
		for (i=0;i<n;i++){
			console.log(str)
		}
	},
	repeatFunction: function repeatFunction(f,n){
		for(i=0;i<n;i++){
			(f())
		}
	}
}

var hello = function(){
	console.log(2+4)
}
Repeater.repeatString("It is snowing!", 3);
Repeater.repeatFunction(hello,4);