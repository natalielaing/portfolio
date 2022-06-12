const app = {};

app.stickyNav = function () {
    const handleNavScroll = function () {
        nav.classList.toggle("sticky", window.scrollY > 0);
    }
    
    document.addEventListener ("scroll", handleNavScroll);

    const nav = document.querySelector('#nav');
    
}

app.init = () => {
app.stickyNav();
};

app.init();

ScrollReveal().reveal('.headline')

