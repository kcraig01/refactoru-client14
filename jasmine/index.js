//Part 1. Object literal

// var Repeater = {
// 	repeatString: function repeatString(str,n){
// 		var stringArray =[];
// 		for (i=0;i<n;i++){
// 		(stringArray.push(str));
// 		var newArray = stringArray.join("");
// 		// for (i=0;i<n;i++){
// 		// 	console.log(str)
// 		}
// 	return newArray;
// 	console.log(newArray)
// 	},
	
// 	repeatFunction: function repeatFunction(f,n){
// 		for(i=0;i<n;i++){
// 			(f())
// 		}
// 	}
// }

// var hello = function(){
// 	console.log(2+4)
// }
// console.log(Repeater.repeatString("cat", 3));
// Repeater.repeatFunction(hello,4);


// Part 2. Module Pattern 
//Add local counter variable that is not accesible outside of module
// var Repeater = (function Repeater(){
// 	var count = 1;
// 	return {
// 		repeatString: function repeatString(str,n){
// 			var stringArray =[];
// 			for (i=0;i<n;i++){
// 			(stringArray.push(str));
// 			var newArray = stringArray.join("");
// 			// for (i=0;i<n;i++){
// 			// 	console.log(str)
// 			}
// 		return newArray;
// 		console.log(newArray)
// 		},
	
// 		repeatFunction: function repeatFunction(f,n){
// 			for(i=0;i<n;i++){
// 				(f())
// 			}
// 		},

// 		repeatMore: function repeatMore(str){
			
// 			var repeatArray = [];
// 			for (i=0; i<count; i++){
// 			(repeatArray.push(str));
// 			var repeatMoreArray = repeatArray.join("");
// 			}
// 			count++;
// 			return repeatMoreArray;
// 		}
// }
// })
// ();

//Part 3. Revealing Module Pattern
var Repeater = (function Repeater(){
	var count = 1;
		var repeatString = function repeatString(str,n){
			var stringArray =[];
			for (i=0;i<n;i++){
			(stringArray.push(str));
			var newArray = stringArray.join("");
			// for (i=0;i<n;i++){
			// 	console.log(str)
			}
		return newArray;
		console.log(newArray)
		}
	
		var repeatFunction =function repeatFunction(f,n){
			for(i=0;i<n;i++){
				(f())
			}
			return repeatFunction;
		}

		var repeatMore =function repeatMore(str){
			
			var repeatArray = [];
			for (i=0; i<count; i++){
			(repeatArray.push(str));
			var repeatMoreArray = repeatArray.join("");
			}
			count++;
			return repeatMoreArray;
		}

		var repeatFunctionTwice = function repeatFunctionTwice(f){
		
				repeatFunction(f,2);

			return repeatFunctionTwice;
			}

		return {
			repeatString: repeatString,
			repeatFunction: repeatFunction,
			repeatMore: repeatMore,
			repeatFunctionTwice: repeatFunctionTwice
		};
})();
var test = 'oh';
var write = function() { test += 'hi'; };
console.log(Repeater.repeatFunction(write, 6));
console.log(test)
console.log(Repeater.repeatFunctionTwice(write));
console.log(test)
