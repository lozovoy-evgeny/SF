/* let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = 0;
    maxValue = 100;
    orderNumber = 0;
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = `Вы загадали число ${answerNumber }?`;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        answerField.innerText = `Я всегда угадываю\n\u{1F60E}`
        gameRun = false;
    }
})
 */
let minValue;
let maxValue;
let gameRun = true;
let orderNumber = 1;
let answerNumberLetters;
let answerNumber;
let flag = 1;

var alertPlaceholder = document.getElementById('liveAlertPlaceholder');
var alertTrigger = document.getElementById('liveAlertBtn');
const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

function viewAction() {
    if (flag === 1) {
        runGame();
        flag = 2;
    } else {
        answerNumber  = Math.floor((maxValue - Math.abs(minValue)) / 2);

        document.querySelector('#questionsToAnswer').style.display = 'none';
        document.querySelector('#orderNumberField').style.display = 'block';
        document.querySelector('#cardHeader').style.display = 'block';
        document.querySelector('#cardBody1').style.display = 'block';
        document.querySelector('#cardBody2').style.display = 'block';
        document.querySelector('#answerField').style.display = 'block';
        document.querySelector('.card-footer').style.display = 'block';
    
        orderNumberField.innerText = orderNumber;
    
        translationRange(answerNumber);   
    
        answerField.innerText = `Вы загадали число ${answerNumberLetters}?`;
    }
}

function retry() {
    document.querySelector('#orderNumberField').style.display = 'none';
    document.querySelector('#cardHeader').style.display = 'none';
    document.querySelector('#cardBody1').style.display = 'none';
    document.querySelector('#cardBody2').style.display = 'none';
    document.querySelector('#answerField').style.display = 'none';
    document.querySelector('.card-footer').style.display = 'none';
    runToMinMaxValue();
    orderNumber = 1;
}

function translatingNumbers (value) {
    let firstPlace = ['сто' , 'двести' , 'триста' , 'четыреста', 'пятьстот' ,  'шетьсот' , 'семьсот' , 'восемьсот', 'девятсот'];
    let secondPlace = ['десять' , 'двадцать' , 'тридцать' , 'сорок', 'пятьдесят' ,  'шетьдесят' , 'семьдесят' , 'восемьдесят', 'девяносто'];
    let thirdPlace = ['один' , 'два' , 'три' , 'четыре', 'пять' ,  'шеть' , 'семь' , 'восемь', 'девять'];
    let invalidNumber = ['одинадцать' , 'двенадцать' , 'тринадцать' , 'четырнадцать' , 'пятнадцать' , 'шестнадцать' , 'семнадцать' , 'восемнадцать' , 'девятнадцать'];
    let returnValue = "";
    let returnValue1 = "";
    let returnValue2 = "";
    let returnValue3 = "";
    let minus = "";
    let answerNumberReversed;

    var obStr=new String(value);

    let numReversed = obStr.split("");

    if (numReversed[0] == '-') {
        numReversed.shift();
        minus = "минус";
    }
    
    answerNumberReversed = Math.abs(answerNumber);

    console.log(numReversed);
    if ((answerNumberReversed < 10)&&(answerNumberReversed > 0))  {
        for (i=0; i < thirdPlace.length; i++) {
            if (numReversed[0] == (i+1)) {
                returnValue1 = thirdPlace[i];
            }
        }
    } else if ((answerNumberReversed > 10)&&(answerNumberReversed < 20)) {
        for (i=0; i < invalidNumber.length; i++) {
            if (numReversed[1] == (i+1)) {
                returnValue1 = invalidNumber[i];
            }
        }
    } else if ((answerNumberReversed >= 10)&&(answerNumberReversed < 100)) {
        for (i=0; i < secondPlace.length; i++) {
            if (numReversed[0] == (i+1)) {
                returnValue2 = secondPlace[i];
            }
        }
        for (i=0; i < thirdPlace.length; i++) {
            if (numReversed[1] == (i+1)) {
                returnValue1 = thirdPlace[i];
            }
        }
    } else if ((answerNumberReversed > 110)&&(answerNumberReversed < 120)) {
        for (i=0; i < firstPlace.length; i++) {
            if (numReversed[0] == (i+1)) {
                returnValue3 = firstPlace[i];
            }
        }
        for (i=0; i < invalidNumber.length; i++) {
            if (numReversed[2] == (i+1)) {
                returnValue1 = invalidNumber[i];
            }
        }
    } else if ((answerNumberReversed >= 100)&&(answerNumberReversed <= 200)) {
        for (i=0; i < firstPlace.length; i++) {
            if (numReversed[0] == (i+1)) {
                returnValue3 = firstPlace[i];
            }
        }
        for (i=0; i < secondPlace.length; i++) {
            if (numReversed[1] == (i+1)) {
                returnValue2 = secondPlace[i];
            }
        }
        for (i=0; i < thirdPlace.length; i++) {
            if (numReversed[2] == (i+1)) {
                returnValue1 = thirdPlace[i];
            }
        }
    }
    
    returnValue = `${minus} ${returnValue3} ${returnValue2} ${returnValue1}`;
    console.log(returnValue);
    return returnValue;
}

function runGame() {

    answerNumber  = Math.floor((maxValue - Math.abs(minValue)) / 2);
    console.log(answerNumber);
    let messagesVictory = [`Я всегда угадываю\n\u{1F60E}` , `У меня просто кибермозг\n\u{1F92F}`, `Машины рулят!!!\n\u{1F914}`];

    document.querySelector('#questionsToAnswer').style.display = 'none';
    document.querySelector('#orderNumberField').style.display = 'block';
    document.querySelector('#cardHeader').style.display = 'block';
    document.querySelector('#cardBody1').style.display = 'block';
    document.querySelector('#cardBody2').style.display = 'block';
    document.querySelector('#answerField').style.display = 'block';
    document.querySelector('.card-footer').style.display = 'block';

    orderNumberField.innerText = orderNumber;

    translationRange(answerNumber);   

    answerField.innerText = `Вы загадали число ${answerNumberLetters}?`;

    document.getElementById('btnLess').addEventListener('click', function () {

        maxValue = answerNumber - 1;
        answerNumber = (maxValue - Math.floor((maxValue - minValue) / 2)) ;
        orderNumber++;
        orderNumberField.innerText = orderNumber;

        translationRange(answerNumber);   

        let messagesloss = [`Вы загадали неправильное число!\n\u{1F914}` , `Я сдаюсь..\n\u{1F92F}`, `Как ты обманул меня хитрый человек?!\n\u{1F914}`];
        let messagesQuestion = [`Вы загадали число ${answerNumberLetters}?` , `А может это ${answerNumberLetters}?`, `По моему число ${answerNumberLetters} загаданное?`];
        
        if (maxValue < minValue){
            const randomIndex = Math.round(Math.random()*(messagesloss.length-1));
            answerField.innerText = messagesloss[randomIndex];
            document.querySelector('#cardBody2').style.display = 'none';
        } else {
            const randomIndex = Math.round(Math.random()*(messagesQuestion.length-1));
            answerField.innerText = messagesQuestion[randomIndex];
        }
        console.log(answerNumber, minValue, maxValue);
    });

    document.getElementById('btnOver').addEventListener('click', function () {

        minValue = answerNumber + 1;
        answerNumber = (maxValue - Math.floor((maxValue - minValue) / 2)) ;
        orderNumber++;
        orderNumberField.innerText = orderNumber;
        
        translationRange(answerNumber);   
    
        let messagesloss = [`Вы загадали неправильное число!\n\u{1F914}` , `Я сдаюсь..\n\u{1F92F}`, `Как ты обманул меня хитрый человек?!\n\u{1F914}`];
        let messagesQuestion = [`Вы загадали число ${answerNumberLetters }?` , `А может это ${answerNumberLetters}?`, `По моему число ${answerNumberLetters} загаданное?`];

        if (answerNumber > maxValue){
            const randomIndex = Math.round(Math.random()*(messagesloss.length-1));
            answerField.innerText = messagesloss[randomIndex];
            document.querySelector('#cardBody2').style.display = 'none';
        } else {
            const randomIndex = Math.round(Math.random()*(messagesQuestion.length-1));
            answerField.innerText = messagesQuestion[randomIndex];
        }
        console.log(answerNumber, minValue, maxValue);
    });

    document.getElementById('btnEqual').addEventListener('click', function () {
        if (gameRun){
            const randomIndex = Math.round(Math.random()*(messagesVictory.length-1));
            answerField.innerText = messagesVictory[randomIndex];
        };
        document.querySelector('#cardBody2').style.display = 'none';
        answerNumber = 0;
        maxValue = 0;
        minValue = 0;
    });
}

function alert(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  alertPlaceholder.append(wrapper)
}

function validateForm() {
    minValue = document.getElementById('minValue').value;
    maxValue = document.getElementById('maxValue').value;
    if((minValue < maxValue)&&(minValue >= -999)&&(maxValue <= 999)) {
        questionsToAnswer();
    } else  {
        alert('Вы не ввели значения диапазона!!!!','danger');
        minValue.value = -999;
        maxValue = 999;
    }
}

function questionsToAnswer() {
    document.querySelector('#minMaxValue').style.display = 'none';
    document.querySelector('#questionsToAnswer').style.display = 'block';
    let attempt = Math.ceil(Math.log2((maxValue - minValue) + 1));
    answerField1 = document.getElementById('answerField1');
    answerField1.innerText = `Число будет угадано за ${attempt} вопроса(ов)!`;

}

function runToMinMaxValue() {
    document.querySelector('#minMaxValue').style.display = 'block';
    document.querySelector('#greeting').style.display = 'none';
}

function translationRange() {
    if (answerNumber == 0) {   
        answerNumberLetters = 'ноль';
    } else  if  ((answerNumber > -200)&&(answerNumber < 200)){
        answerNumberLetters = translatingNumbers(answerNumber);
    } else {
        answerNumberLetters = answerNumber;
    }
}