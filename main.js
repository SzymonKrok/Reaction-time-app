// Get variables

const circle = document.querySelector('.circle'),
      result = document.querySelector('.result'),
      button = document.querySelector('.operation-button');

let randomNumber = 0,
    startTime = 0,
    endTime = 0;

// Function start game - change button, rand number and set circle class
const startGame = () => {
    button.innerText = 'STOP!';
    randomNumber = Math.floor(Math.random() * 5000) + 500;
    circle.classList.add('red');
    setTimeout(() => {
        circle.classList.remove('red');
        circle.classList.add('green');
        startTime = new Date().getTime();
        console.log('Start time: ' + startTime)
    }, randomNumber)
}

//

const ReactionTime = () => {
    if(circle.classList.contains('green')){
        endTime = new Date().getTime();
        console.log('End time: ' + endTime);

    }
    resultFn()
}

const resultFn = () => {
    console.log(endTime - startTime);
    let timeLeft = endTime - startTime;
    result.innerText = timeLeft + 'ms';

}




button.addEventListener('click', startGame);
circle.addEventListener('click', ReactionTime);