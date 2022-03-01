const TopSection = document.querySelector('.topSection');
const AnswerMessage = document.querySelector('.answerMessage');
const MiddleSection = document.querySelector('.middleSection');
const FirstNumberImage = document.querySelector('.firstNumberimage');
const MultiplicationSymbol = document.querySelector('.multiplicationSymbol');
const SecondNumberImage = document.querySelector('.SecondNumberimage');
const MiddleSection2 = document.querySelector('.middleSection2');
const DescriptionMessage = document.querySelector('.description');
const BottomSection = document.querySelector('.bottomSection');
const BottomSection2 = document.querySelector('.bottomSection2');
const ResetBtn = document.querySelector('.btn2');
const StartGameBtn = document.querySelector('.startButton');
const RemainingTimeBox = document.querySelector('.remainingTime');
const Score = document.querySelector('.score');
const FirstNumber = document.querySelector('.firstNumber');
const SecondNumber = document.querySelector('.secondNumber');
const Option1Parent = document.querySelector('.options1');
const Option2Parent = document.querySelector('.options2');
const Option3Parent = document.querySelector('.options3');
const Option4Parent = document.querySelector('.options4');
const Option1 = document.querySelector('.option1number');
const Option2 = document.querySelector('.option2number');
const Option3 = document.querySelector('.option3number');
const Option4 = document.querySelector('.option4number');
var SecondsNumber = 60;
var ScoreNumber = 0;
var FirstOperand = 0;
var SecondOperand = 0;
var Result = 0;
var OptionsArray = [];

window.onload = function(){
    TopSection.style.visibility = 'hidden';
    MiddleSection.style.backgroundImage = "none";
    MiddleSection.style.boxShadow = 'none';
    FirstNumberImage.style.visibility = 'hidden';
    MultiplicationSymbol.style.visibility = 'hidden';
    SecondNumberImage.style.visibility = 'hidden';
    MiddleSection2.style.visibility = 'hidden';
    BottomSection.style.visibility = 'hidden';
    BottomSection2.style.visibility = 'hidden';
    return;
}

function startGame(){
    StartGameBtn.style.visibility = 'hidden';
    TopSection.style.visibility = 'visible';
    MiddleSection.style.backgroundImage = 'linear-gradient(red, yellow)';
    MiddleSection.style.boxShadow = '2px 3px';
    FirstNumberImage.style.visibility = 'visible';
    AnswerMessage.style.visibility = 'hidden';
    MultiplicationSymbol.style.visibility = 'visible';
    SecondNumberImage.style.visibility = 'visible';
    MiddleSection2.style.visibility = 'visible';
    ResetBtn.value = "Reset Game";
    MiddleSection2.style.backgroundColor = "red";
    MiddleSection2.style.boxShadow = '2px 3px';
    DescriptionMessage.innerHTML = `<h3>Choose the correct basket of apples</h3>`;
    BottomSection.style.visibility = 'visible';
    BottomSection2.style.visibility = 'visible';
    RemainingTimeBox.innerHTML = `<h4>Time Remaining: 60s</h4>`;
    Score.innerHTML = `<h4>Score: ${ScoreNumber}</h4>`;
    generateNumbers();
    return;
}

var x = setInterval(function(){
    if(StartGameBtn.style.visibility == 'hidden')
    {
    RemainingTimeBox.innerHTML = `<h4>Time Remaining: ${SecondsNumber}s</h4>`;
        if(SecondsNumber < 0){
            TopSection.style.visibility = 'hidden';
            MiddleSection.style.backgroundImage = "none";
            MiddleSection.style.boxShadow = 'none';
            FirstNumberImage.style.visibility = 'hidden';
            MultiplicationSymbol.style.visibility = 'hidden';
            SecondNumberImage.style.visibility = 'hidden';
            MiddleSection2.style.backgroundColor = "transparent";
            MiddleSection2.style.boxShadow = 'none';
            DescriptionMessage.innerHTML = `<h1>Game Over!</h1><h2>Your Score is ${ScoreNumber}</h2>`;
            BottomSection.style.visibility = 'hidden';
            ResetBtn.value = "Start a New Game";
            AnswerMessage.style.visibility = 'hidden';
            return;  
        }
        SecondsNumber = SecondsNumber - 1;
    }
},1000);

function resetGame(){
    startGame();
    SecondsNumber = 60;
    RemainingTimeBox.innerHTML = `<h4>Time Remaining: ${SecondsNumber}s</h4>`;
    ScoreNumber = 0;
    Score.innerHTML = `<h4>Score: ${ScoreNumber}</h4>`;
    generateNumbers();
}

function generateNumbers(){
    FirstOperand = Math.floor((Math.random()* 10) + 1);
    SecondOperand = Math.floor((Math.random()* 10) + 1);
    Result = FirstOperand * SecondOperand;
    FirstNumber.innerHTML = `<h1> ${FirstOperand} </h1>`;
    SecondNumber.innerHTML = `<h1> ${SecondOperand} </h1>`;
    OptionsArray[0] = FirstOperand * SecondOperand;
    for(var i = 1; i < 4; i++)
    {
        var optionNum = Math.floor(Math.random() * 100) + 1;
        if(i == 1){
            if(optionNum != OptionsArray[0]){
                OptionsArray[i]= optionNum
            }
            else{
                i = i - 1;
            }            
        }
        else if(i == 2){
            if(optionNum != OptionsArray[0] && optionNum != OptionsArray[1]){
                OptionsArray[i]= optionNum
            }
            else{
                i = i - 1;
            } 
        }
        else{
            if(optionNum != OptionsArray[0] && optionNum != OptionsArray[1] && optionNum != OptionsArray[2]){
                OptionsArray[i]= optionNum
            }
            else{
                i = i - 1;
            }  
        }       
    }

    for(var i= OptionsArray.length -1; i>0;i--){
        var j = Math.floor(Math.random() * (i+1));
        var temp = OptionsArray[i];
        OptionsArray[i] = OptionsArray[j];
        OptionsArray[j] = temp;
    }

    Option1.innerHTML = `${OptionsArray[0]}`;
    Option2.innerHTML = `${OptionsArray[1]}`;
    Option3.innerHTML = `${OptionsArray[2]}`;
    Option4.innerHTML = `${OptionsArray[3]}`;
    return;
}

Option1Parent.addEventListener('click', onSubmit1);
Option2Parent.addEventListener('click', onSubmit2);
Option3Parent.addEventListener('click', onSubmit3);
Option4Parent.addEventListener('click', onSubmit4);

function onSubmit1(){   

    if(Result == Option1.innerHTML){
        displayCorrectMessage();       
    }
    else{
        displayWrongMessage();
    }
}

function onSubmit2(){   
    if(Result == Option2.innerHTML){
        displayCorrectMessage();       
    }
    else{
        displayWrongMessage();
    }
}

function onSubmit3(){   
    if(Result == Option3.innerHTML){
        displayCorrectMessage();       
    }
    else{
        displayWrongMessage();
    }
}

function onSubmit4(){   
    if(Result == Option4.innerHTML){
        displayCorrectMessage();       
    }
    else{
        displayWrongMessage();
    }
}

function displayCorrectMessage(){
    ScoreNumber = ScoreNumber + 1;
    Score.innerHTML = `<h4>Score: ${ScoreNumber}</h4>`;
    AnswerMessage.style.visibility = 'visible'; 
    AnswerMessage.style.backgroundColor = 'green'; 
    AnswerMessage.innerHTML = '<h4>Correct</h4>';
    setTimeout(function empty() {generateNumbers();
    AnswerMessage.style.visibility = 'Hidden';}, 500);
}

function displayWrongMessage(){
    AnswerMessage.style.visibility = 'visible'; 
    AnswerMessage.style.backgroundColor = 'red'; 
    AnswerMessage.innerHTML = '<h4>Try Again</h4>';
    setTimeout(function empty() {
    AnswerMessage.style.visibility = 'Hidden';}, 1000);
}
