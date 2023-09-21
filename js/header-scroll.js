let lastScroll = 0;
const defaultOffset = 200;
const header = document.querySelector('.header');
const intro = document.querySelector('.intro');

const scrollPosition = () => window.pageYOffset || window.scrollY;
const containHide = () => header.classList.contains('_scroll');

window.addEventListener('scroll', () => {
    if(scrollPosition() - 10 > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
        //scroll down
        header.classList.add('_scroll');
        intro.classList.add('_scroll');
        console.log(lastScroll);
    }
    
    if(scrollPosition() + 10 < lastScroll && containHide()){
        //scroll up
        header.classList.remove('_scroll');
        intro.classList.remove('_scroll');
        console.log(lastScroll);
    }

    lastScroll = scrollPosition();
})