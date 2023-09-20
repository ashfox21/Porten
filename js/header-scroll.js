let lastScroll = 0;
const defaultOffset = 200;
const header = document.querySelector('.header');
const intro = document.querySelector('.intro');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide');

window.addEventListener('scroll', () => {
    if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
        //scroll down
        header.classList.add('_scroll');
        intro.classList.add('_scroll');
    }
    else if(scrollPosition() < lastScroll && header.classList.contains('_scroll')){
        //scroll up
        header.classList.remove('_scroll');
        intro.classList.remove('_scroll');
    }

    lastScroll = scrollPosition();
})