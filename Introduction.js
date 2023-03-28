const leftArrow = document.querySelectorAll('#leftArrow path');
const rightArrow = document.querySelectorAll('#rightArrow path');

leftArrow.forEach(i => {
    let l = i.getTotalLength();
    i.style.strokeDasharray = l;
    i.style.transition = 'stroke-dashoffset 2s';

    let ani = null;
    i.style.strokeDashoffset = (l*2).toString();
    ani = setInterval(function(){
        i.style.transition = 'none';
        i.style.strokeDashoffset = 0;
        setTimeout(function(){
            i.style.transition = 'stroke-dashoffset 2s';
            i.style.strokeDashoffset = (l*2).toString();
        },100);
    },5000);
});

rightArrow.forEach(i => {
    let l = i.getTotalLength();
    i.style.strokeDasharray = l;
    i.style.transition = 'stroke-dashoffset 2s';

    let ani = null;
    i.style.strokeDashoffset = (l*2).toString();
    ani = setInterval(function(){
        i.style.transition = 'none';
        i.style.strokeDashoffset = 0;
        setTimeout(function(){
            i.style.transition = 'stroke-dashoffset 2s';
            i.style.strokeDashoffset = (l*2).toString();
        },100);
    },5000);
});

