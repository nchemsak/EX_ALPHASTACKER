

//this prints letters of alphabet out and adds the next on each iteration
//var alphabet[i] = String.fromCharCode(65 + i);

// var alphabet = [];
// var newAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// for (var i = 0; i < 26; i+=1 ) {
//   alphabet.push(newAlpha[i]);
//   newAlpha.push(alphabet.concat());
//   console.log(alphabet.join(""));
// } 
    



var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function stackLetters() {
	count = [];
	newAlpha = [];
	for ( var i = 0; i <= alphabet.length -1; i+=1 ) {
		newAlpha += alphabet[i];
		count += 1;
	if ( count % 3 === 0 ) {
			newAlpha += " ";
		} 
		console.log(newAlpha);
	}
}

stackLetters(alphabet);



// var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// function stackLetters(alphabet) {
// 	for (var i = 0; i <= alphabet.length - 1; i++) {
// 		// console.log(alphabet);
// 		// console.log(i);
// 		if ( i % 3 === 0 ) {
// 	console.log(alphabet.join("") + alphabet.push(" "));
// } else {
// 	console.log(alphabet.join(""));
// 	}
// }
//   // console.log(alphabet.join(""));
// 	}


// stackLetters(alphabet);






//this prints the letters backwards
      
// var alpha = [" a", " b", " c", " d", " e", " f", " g", " h", " i", " j", " k", " l", " m", " n", " o", " p", " q", " r", " s", " t", " u", " v", " w", " x", " y", " z"];
// for (var i = 0; i < 26 ;i += 1) {
//  var nick = alpha.join("");
//   // document.write("<p>" + nick + "</p>");
//   console.log(nick);
//   var remove = alpha.pop();
// }
      
//this prints numbers in order, adding 1 each time  

// var alpha2 = [];
// var newAlpha2 = [];
// for (var i = 0; i < 26; i+=1 ) {
//   alpha2.push(i);
//   newAlpha2.push(alpha2.concat());
//   // document.write("<p>" + alpha2.join("") + "</p>");
//   console.log(alpha2.join(""));
// }

   
