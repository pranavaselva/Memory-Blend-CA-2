// name display funciton  

let nickName = document.querySelector('.player-name');
nickName.textContent = localStorage.getItem('nickname')


// play again button

let playAgain = document.getElementById('play-again-btn');
playAgain.addEventListener('click', function() {
    location.href = "index.html"
})


//  score  display 

let score = document.querySelector('.score');
score.textContent = localStorage.getItem('score')


// background sound 

let sound = new Audio("./assets/kung fu panda.mp3");
sound.loop = true;
sound.play();
sound.volume= 0.3;


// Generating random pharse 
let array=["Good Try", "Try Again", "Nailed it", "Not Bad", "Great Job"]

let State = document.querySelector('.state');
let randomState = Math.floor(Math.random()*5);
State.innerText = array[randomState]