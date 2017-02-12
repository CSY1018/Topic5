var interval = 0;
var stopInterval = 0;
var currentDice = 0;

function animateDice() {
        var diceRoll = Math.ceil(Math.random() * 6);
        currentDice.className = 'side' + diceRoll;
}
function stopAnimation() {
        clearInterval(interval);
        clearInterval(stopInterval);

        var numbers = [];
        numbers[1] = 'One';
        numbers[2] = 'Two';
        numbers[3] = 'Three';
        numbers[4] = 'Four';
        numbers[5] = 'Five';
        numbers[6] = 'Six';

        var diceRoll = Math.ceil(Math.random() * 6);
        currentDice.className = 'side' + diceRoll;
        currentDice.nextSibling.nextSibling.firstChild.nodeValue = 'You rolled a ' + numbers[diceRoll];
}
function diceClick() {
        currentDice = this;
        interval = setInterval(animateDice, 100);
        stopInterval = setInterval(stopAnimation, 2000);
}
function myLoadEvent() {
        var elements = document.getElementsByTagName('div');
        for (var i = 0; i < elements.length; i++) {
                elements[i].addEventListener('click', diceClick);
        }
}
document.addEventListener('DOMContentLoaded', myLoadEvent);
