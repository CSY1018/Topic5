function diceClick() {
        var diceRoll = Math.ceil(Math.random() * 6);
        this.className = 'side' + diceRoll;
        alert('You rolled a ' + diceRoll);
}

function myLoadEvent() {
        var elements = document.getElementsByTagName('div');
        for (var i = 0; i < elements.length; i++) {
                elements[i].addEventListener('click', diceClick);
        }
}

document.addEventListener('DOMContentLoaded', myLoadEvent);
