ScrollReveal({ reset: true });
ScrollReveal().reveal('.navbar', { duration: 2300, origin: 'bottom',distance: '30px'});
ScrollReveal().reveal('.header-content-left', { delay: 500, duration: 2300, origin: 'top',distance: '300px'});
ScrollReveal().reveal('.header-content-right', { delay: 500, duration: 2300, origin: 'right',distance: '300px'});
ScrollReveal().reveal('.header-btn', { delay: 1500, duration: 2300, origin: 'bottom',distance: '30px'});
ScrollReveal().reveal('#testimonio', { delay: 500, duration: 1000, origin: 'left',distance: '300px', viewFactor: 0.2});
ScrollReveal().reveal('.info-one-left', { delay: 500, duration: 2300, origin: 'bottom',distance: '20px'});
ScrollReveal().reveal('.info-one-right', { delay: 500, duration: 2300, origin: 'right',distance: '300px'});
ScrollReveal().reveal('.info-two-left', { delay: 500, duration: 2300, origin: 'left',distance: '300px'});
ScrollReveal().reveal('.info-two-right', { delay: 500, duration: 2300, origin: 'right',distance: '300px'});
ScrollReveal().reveal('#formulario', { duration: 2000, origin: 'bottom',distance: '50px', viewFactor: 0.2});


document.querySelectorAll('a[href^="#"]').forEach(anchor =>{
    anchor.addEventListener('click', function(e){
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

