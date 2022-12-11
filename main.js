// Get variables

const circle = document.querySelector('.circle'),
      result = document.querySelector('.result'),
      button = document.querySelector('.operation-button');

let randomNumber = 0,
    startTime = 0,
    endTime = 0;

// Function start game - change button, rand number and set circle class
const startGame = () => {
    button.innerText = 'PLAY AGAIN!';
    result.innerText = '0';
    circle.classList.remove('green');
    circle.classList.add('red');
    randomNumber = Math.floor(Math.random() * 4000) + 500;

    setTimeout(() => {
        circle.classList.remove('red');
        circle.classList.add('green');
        startTime = new Date().getTime();
        console.log('Start time: ' + startTime)
    }, randomNumber);

}

// Function which save time when you click circle

const reactionTime = () => {
    if(circle.classList.contains('green')){
        endTime = new Date().getTime();
        console.log('End time: ' + endTime);
    }
    resultFn()
}

// Function which compares both times
const resultFn = () => {
    console.log(endTime - startTime);
    let timeLeft = endTime - startTime;
    result.innerText = timeLeft + 'ms';

    //     Check that user doesn't click red circle

    if (circle.classList.contains('red')){
        alert("Too fast!");
        result.innerText = '0ms'
    }

}




button.addEventListener('click', startGame);
circle.addEventListener('click', reactionTime);