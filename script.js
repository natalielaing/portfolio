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


    button.addEventListener('click', () => {
        nav.classList.toggle('show');
        icon.classList.toggle('hide');
        close.classList.toggle('present');
    })


}

// document.addEventListener("click", function(event) {
// 	// If user clicks inside the element, do nothing
// 	if (event.target.closest(".box")) return;

// 	// If user clicks outside the element, hide it!
// 	box.classList.add("js-is-hidden");
// });

// function hamburgerMenu () {
//     navList.classList.add("showNav");
// }

// //function to remove the drop-down menu when user clicks off the drop-down
// function hamburgerClose (event) {
//     if (event.target.closest("#hamburger")=== null) {
//         navList.classList.remove("showNav");
//     }
// }

// //event listener functions to add and remove drop down from click on hamburger icon 
// hamburger.addEventListener ("click", hamburgerMenu);
// document.addEventListener ("click", hamburgerClose);

    // function hamburgerClose (event) {
    //     if (event.target.closest("#burger")=== null) {
    //         nav.classList.remove("show");
    //     }
    // }




app.init = () => {
app.stickyNav();
app.hamburger();
};

app.init();

// ScrollReveal().reveal('.headline')

