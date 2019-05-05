let leftButton = document.getElementById('btn-left');
let rightButton = document.getElementById('btn-right');
let overlay = document.getElementById('overlay');
let leftText = document.getElementById('left-text');
let rightText = document.getElementById('right-text');
let rightTxt = document.getElementById('right-txt');
let leftTxt = document.getElementById('left-txt');




leftButton.addEventListener('click', ()=> {
    leftButton.classList.add('hidden');
    rightButton.classList.remove('hidden');
    overlay.classList.add('overlay-anime-right');
    overlay.classList.remove('overlay-anime-left');
    leftText.classList.remove('hidden');
    rightText.classList.add('hidden');
    rightTxt.classList.add('hide');
    leftTxt.classList.remove('hide');
    leftTxt.classList.add('slide-left');
    rightTxt.classList.remove('slide-right');
    leftTxt.classList.remove('x-slide-right');
    rightTxt.classList.add('x-slide-left');
})

rightButton.addEventListener('click', ()=> {
    leftButton.classList.remove('hidden');
    rightButton.classList.add('hidden');
    overlay.classList.add('overlay-anime-left');
    overlay.classList.remove('overlay-anime-right');
    leftText.classList.add('hidden');
    rightText.classList.remove('hidden');
    rightTxt.classList.remove('hide');
    leftTxt.classList.add('hide');
    leftTxt.classList.remove('slide-left');
    rightTxt.classList.add('slide-right');
    leftTxt.classList.add('x-slide-right');
    rightTxt.classList.remove('x-slide-left');
})