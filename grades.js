console.log("hello");

//logical operators- multiple if and conditional statements

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
//console.log(scores);



for (var i = 0; i < scores.length; i++) {

	//console.log("scores?",scores[i]);

		if (scores[i] >= 91 && scores[i] <= 100 ){
		console.log("You got an A", scores[i]);
			if(scores[i] > 95) {
				console.log("you have the highest grade", scores[i]);
			}
	}
		else if (scores[i] >= 81 && scores[i] <= 90 ) {
		console.log("you got a B", scores[i]);
	} 
		else if (scores[i] >= 71 && scores[i] <= 80) {
		console.log("you go a C", scores[i]);
	} 
		else if (scores[i] >= 61 && scores[i] <= 70) {
		console.log("you got a D", scores[i]);
	}
		 else if (scores[i] >= 51 && scores[i] <= 60){

		 	if (scores[i] <= 55) {
		 		console.log("you have the lowest grade", scores[i] );
		 	}
		 	console.log("you got an F", scores[i]);
	}
		else {
		console.log("you have the lowest grade", scores[i]);
	}
}



//console.log how many of each grade

//console.log what is the lowest grade

//console.log what is the highest grade

