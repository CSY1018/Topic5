function diceClick() {
        var numbers = [];
        numbers[1] = 'One';
        numbers[2] = 'Two';
        numbers[3] = 'Three';
        numbers[4] = 'Four';
        numbers[5] = 'Five';
        numbers[6] = 'Six';

        var diceRoll = Math.ceil(Math.random() * 6);
        this.className = 'side' + diceRoll;

        this.nextSibling.nextSibling.firstChild.nodeValue = 'You rolled a ' + numbers[diceRoll];
}

function myLoadEvent() {
        var elements = document.getElementsByTagName('div');
        for (var i = 0; i < elements.length; i++) {
                elements[i].addEventListener('click', diceClick);
        }
}

document.addEventListener('DOMContentLoaded', myLoadEvent);
