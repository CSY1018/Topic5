function diceClick() {
        this.className = 'side3';
}

function myLoadEvent() {
        var elements = document.getElementsByTagName('div');
        for (var i = 0; i < elements.length; i++) {
                elements[i].addEventListener('click', diceClick);
        }
}

document.addEventListener('DOMContentLoaded', myLoadEvent);
