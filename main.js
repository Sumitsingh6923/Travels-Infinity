// -----------------OFFERS----------------------------

Array.from(document.getElementsByTagName('input')).forEach((e, i) => {
    e.addEventListener('keyup', (el) => {
        if (e.value.length > 0) {
            document.getElementsByClassName('bi-caret-down-fill')[i].style.transform = "rotate(180deg)";
        } else {
            document.getElementsByClassName('bi-caret-down-fill')[i].style.transform = "rotate(0deg)";
        }
    })
})

// -----------------MENU----------------------------

function openmenu() {
    document.getElementById("navbar").style.right = "0";
}

function closemenu() {
    document.getElementById("navbar").style.right = "-200px";
}

// -----------------REVIEW----------------------------
var swiper = new Swiper("swiper-slide", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

