let smallStars = 25;
let largeStars = 10;
let container = document.querySelector('.bg');

function randomVal(max, min) {
    return Math.floor((Math.random() * (max - min)) + min);
}

for (let i = 0; i < smallStars; i++) {
    let star = document.createElement('div');

    star.className = 'stars';
    star.style.height = randomVal(2, 1) + 'px';
    star.style.width = randomVal(2, 1) + 'px';
    star.style.top = randomVal(100, 5) + 'vh';
    star.style.left = randomVal(100, 5) + 'vw';
    container.appendChild(star);
}

for (let i = 0; i < largeStars; i++) {
    let star = document.createElement('div');

    star.className = 'large-stars';
    star.style.height = randomVal(5, 4) + 'px';
    star.style.width = randomVal(5, 4) + 'px';
    star.style.top = randomVal(80, 5) + 'vh';
    star.style.left = randomVal(80, 5) + 'vw';
    container.appendChild(star);
}