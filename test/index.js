let noOver = document.getElementById('no');
let yesOver = document.getElementById('yes');
let answerBox = document.getElementsByClassName('answer');

noOver.addEventListener('mouseover', reverseAns);
yesOver.addEventListener('click', yesss);

function reverseAns (){
    if(answerBox[0].style.flexDirection === 'row-reverse'){
        answerBox[0].style.flexDirection = 'row';
    }
    else {
        answerBox[0].style.flexDirection = 'row-reverse';
    }
}

function yesss (){
    alert('I love u');
}