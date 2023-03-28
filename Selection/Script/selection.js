var formula = document.querySelector('#formula');
var story = document.querySelector('#story');

formula.addEventListener('mouseover',onHoverFom);
story.addEventListener('mouseover',onHoverStr);

function onHoverFom() {
    let path = document.querySelector('#forPath');
    path.style.strokeDasharray = '150 769';
    path.style.strokeDashoffset = '470';
    path.style.stroke = '#00bcd4';

    formula.addEventListener('mouseleave',notHoverFom);
    formula.removeEventListener('mouseover',onHoverFom);
}

function notHoverFom() {
    let path = document.querySelector('#forPath');
    path.style.strokeDasharray = '769.3315429687';
    path.style.strokeDashoffset = '0';
    path.style.stroke = 'black';

    formula.addEventListener('mouseover',onHoverFom);
    formula.removeEventListener('mouseleave',notHoverFom);
}

function onHoverStr() {
    let path = document.querySelector('#strPath');
    path.style.strokeDasharray = '120 769';
    path.style.strokeDashoffset = '700';
    path.style.stroke = '#00bcd4';

    story.addEventListener('mouseleave',notHoverStr);
    story.removeEventListener('mouseover',onHoverStr);
}


function notHoverStr() {
    let path = document.querySelector('#strPath');
    path.style.strokeDasharray = '769.3315429687';
    path.style.strokeDashoffset = '0';
    path.style.stroke = 'black';

    story.addEventListener('mouseover',onHoverStr);
    story.removeEventListener('mousleave',notHoverStr);
}