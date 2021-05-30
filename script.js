'use strict';

//generating random number
let secretnum=Math.trunc(Math.random()*20)+1;

//keeping track of score
let score=20;
let highscore=0;
const displayMessage= function(message) {
	document.querySelector('.message').textContent=message;
}

document.querySelector('.check').addEventListener('click',function() {
	//guess variable value will be by default string so we have to convert to number
	const guess=Number(document.querySelector('.guess').value);
	console.log(guess);

	//we have to check if there actually is a value or the field is not empty
	//if nothing is entered then guess=0 which is a falsy value
	if(!guess){
		// document.querySelector('.message').textContent='⛔ No number !';
		displayMessage('⛔ No number !');
	} else if(guess === secretnum){
		// document.querySelector('.message').textContent='🎉 Correct Number !';
		displayMessage('🎉 Correct Number !');

		//changing question mark to the number when guessed correctly
		document.querySelector('.number').textContent=secretnum;
		//******changing css style********
		//changing background color 
		document.querySelector('body').style.backgroundColor='rgb(96,179,91)';

		//increasing width of the question mark box
		document.querySelector('.number').style.width='30rem';

		//setting high score 
		if(score>highscore){
			highscore=score;
			document.querySelector('.highscore').textContent=highscore;
		}

	//wrong guess
	}else if(guess !== secretnum){
		if(score>1){
		// document.querySelector('.message')
		// .textContent=guess>secretnum ? '📈 Too high !' : '📉 Too low !' ;
		displayMessage(guess>secretnum ? '📈 Too high !' : '📉 Too low !');
		//decreasing value each time guess is wrong
		score--;
		document.querySelector('.score').textContent=score;
	} else{
		// document.querySelector('.message').textContent='🎇 You lost the game !'
		displayMessage('🎇 You lost the game !');
		document.querySelector('.score').textContent=0;
	} 
}

//without removing duplicates in code
	// else if(guess > secretnum){
	// 	if(score>1){
	// 	document.querySelector('.message').textContent='📈 Too high !';
	// 	//decreasing value each time guess is wrong
	// 	score--;
	// 	document.querySelector('.score').textContent=score;
	// } else{
	// 	document.querySelector('.message').textContent='🎇 You lost the game !'
	// 	document.querySelector('.score').textContent=0;
	// }
	// }else if(guess < secretnum){
	// 	if(score>1){
	// 	document.querySelector('.message').textContent='📉 Too low !';
	// 	//decreasing value each time guess is wrong
	// 	score--;
	// 	document.querySelector('.score').textContent=score;
	// }else{
	// 	document.querySelector('.message').textContent='🎇 You lost the game !'
	// 	document.querySelector('.score').textContent=0;
	// }
	// }
});

document.querySelector('.again').addEventListener('click',function() {
	score=20;
	secretnum=Math.trunc(Math.random()*20)+1;
	document.querySelector('.score').textContent=score;
	document.querySelector('.number').textContent='?';
	document.querySelector('body').style.backgroundColor='#222';
	// document.querySelector('.message').textContent='Start guessing...';
	displayMessage('Start guessing...');
	document.querySelector('.number').style.width='15rem';
	document.querySelector('.guess').value=null;

});