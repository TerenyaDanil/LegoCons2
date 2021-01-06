

var swiper = new Swiper('.slider-rev', {

    loop: true,
    spaceBetween: 30,

    speed: 1000,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },
});


let header = gsap.timeline({
    scrollTrigger: {
        trigger: ".header",   // pin the trigger element while active
        start: "top center",




    }
});

if (window.innerWidth > 737) {
    header.from(".header__title", { duration: 1.2, ease: "power4.out", opacity: 0, x: -100 })
        .from(".header__btn", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
        .from(".header__img", { duration: 0.8, ease: "power4.out", opacity: 0, x: 100 }, "-=0.6")
} else {
    header.from(".header__title", { duration: 0.9, ease: "power4.out", opacity: 0, y: 50 })
        .from(".header__btn", { duration: 0.9, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
        .from(".header__img", { duration: 0.9, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
}



///////////////////////////////////////


let about = gsap.timeline({
    scrollTrigger: {
        trigger: ".about",   // pin the trigger element while active
        start: "top center",




    }
});

if (window.innerWidth > 737) {
    about.from(".about__title", { duration: 1.2, ease: "power4.out", opacity: 0, x: -100 })
        .from(".about__inner-box", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
        .from(".about__inner-item-1", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
        .from(".about__inner-item-2", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
        .from(".about__inner-item-3", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
} else {
    about.from(".about__title", { duration: 1.2, ease: "power4.out", opacity: 0, y: -50 })
        .from(".about__inner-box", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
        .from(".about__inner-item-1", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
        .from(".about__inner-item-2", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
        .from(".about__inner-item-3", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
}

////////////////////////////////


let programOne = gsap.timeline({
    scrollTrigger: {
        trigger: ".program__inner",   // pin the trigger element while active
        start: "top center",




    }
});

if (window.innerWidth > 737) {
    programOne.from(".program__text-title", { duration: 1.2, ease: "power4.out", opacity: 0, y: 50 })
        .from(".program__inner-img", { duration: 0.8, ease: "power4.out", opacity: 0, x: -100 }, "-=0.6")

} else {
    programOne.from(".program__text-title", { duration: 1.2, ease: "power4.out", opacity: 0, y: 50 })
        .from(".program__inner-img", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
}






let programTwo = gsap.timeline({
    scrollTrigger: {
        trigger: ".program__wrap",   // pin the trigger element while active
        start: "top center",




    }
});


programTwo.from(".program__title", { duration: 1.2, ease: "power4.out", opacity: 0, y: 50 })
    .from(".wrap-program__item-1", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
    .from(".wrap-program__item-2", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
    .from(".wrap-program__item-3", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")


let cases = gsap.timeline({
    scrollTrigger: {
        trigger: ".cases",   // pin the trigger element while active
        start: "top center",




    }
});


cases.from(".cases__title", { duration: 1.2, ease: "power4.out", opacity: 0, y: 50 })
    .from(".cases__inner-item-1", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
    .from(".cases__inner-item-2", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
    .from(".cases__inner-item-3", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
    .from(".cases__inner-item-4", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")





let inside = gsap.timeline({
    scrollTrigger: {
        trigger: ".inside",   // pin the trigger element while active
        start: "top center",




    }
});


inside.from(".inside__title", { duration: 1.2, ease: "power4.out", opacity: 0, y: 50 })
    .from(".inside__inner-img", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")

