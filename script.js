const app = {};

app.stickyNav = function () {
    const handleNavScroll = function () {
        nav.classList.toggle("sticky", window.scrollY > 0);
    }
    
    document.addEventListener ("scroll", handleNavScroll);

    const nav = document.querySelector('#nav');
    
}

app.hamburger = function () {
    const button = document.querySelector("#burger");
    const nav = document.querySelector("#navMenu");
    const icon = document.querySelector("#burgerIcon");
    const close = document.querySelector("#burgerClose");
    const links = document.querySelectorAll('.special');


    button.addEventListener('click', () => {
        nav.classList.toggle('show');
        icon.classList.toggle('hide');
        close.classList.toggle('present');
    })

    links.forEach(item => {
        item.addEventListener ('click', () => {
            nav.classList.toggle('show');
            icon.classList.toggle('hide');
            close.classList.toggle('present');
        })
    })  
}


app.init = () => {
app.stickyNav();
app.hamburger();
};

app.init();



