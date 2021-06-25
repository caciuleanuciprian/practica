//--------------------------Close button-----------------------------

document.querySelector('#closeBtn-1').onclick = closeNews1;

function closeNews1() {
    let news = document.querySelectorAll('.newsoverlay');
    news.forEach((elem) => {
        (elem.classList.add('hide'))
    });

    let space = document.querySelector('.space');
    space.classList.remove('hide');

    let overlay = document.querySelector('.newsoverlay-all');
    overlay.classList.add('hide');
}

document.querySelector('#closeBtn-2').onclick = closeNews2;

function closeNews2() {
    let news = document.querySelectorAll('.newsoverlay');
    news.forEach((elem) => {
        (elem.classList.add('hide'))
    });

    let space = document.querySelector('.space');
    space.classList.remove('hide');
    let overlay = document.querySelector('.newsoverlay-all');
    overlay.classList.add('hide');
}

document.querySelector('#closeBtn-3').onclick = closeNews3;

function closeNews3() {
    let news = document.querySelectorAll('.newsoverlay');
    news.forEach((elem) => {
        (elem.classList.add('hide'))
    });

    let space = document.querySelector('.space');
    space.classList.remove('hide');
    let overlay = document.querySelector('.newsoverlay-all');
    overlay.classList.add('hide');
    
}

//--------------------------Read More first aticle--------------------

document.querySelector('#readMoreBtn-1').onclick = readMore1;

function readMore1() {

    let overlay = document.querySelector('.newsoverlay-all');
    overlay.classList.remove('hide');

    let news = document.querySelectorAll('.newsoverlay');
    news.forEach(function (elem) { 
        elem.classList.add('hide');
    });

    let news2 = document.querySelector('#newsoverlay-1');
    news2.classList.remove('hide');

    let space = document.querySelector('.space');
    space.classList.add('hide');

    
}

//--------------------------Read More second aticle--------------------

document.querySelector('#readMoreBtn-2').onclick = readMore2;

function readMore2() {

    let overlay = document.querySelector('.newsoverlay-all');
    overlay.classList.remove('hide');

    let news = document.querySelectorAll('.newsoverlay');
    news.forEach((elem) => (elem.classList.add('hide')));

    let news2 = document.querySelector('#newsoverlay-2');
    news2.classList.remove('hide');

    let space = document.querySelector('.space');
    space.classList.add('hide');
}

//--------------------------Read More third aticle--------------------

document.querySelector('#readMoreBtn-3').onclick = readMore3;

function readMore3() {

    let overlay = document.querySelector('.newsoverlay-all');
    overlay.classList.remove('hide');

    let news = document.querySelectorAll('.newsoverlay');
    news.forEach((elem) => (elem.classList.add('hide')));

    let news2 = document.querySelector('#newsoverlay-3');
    news2.classList.remove('hide');

    let space = document.querySelector('.space');
    space.classList.add('hide');

    
}