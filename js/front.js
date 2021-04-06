/////////////////////////////////////////////////*****************parallax effect */
const cartIcon = document.getElementById('cart');
let parallaxImg = document.querySelector('.img__parallax');



    window.addEventListener('wheel', (e) => {   
        let scrolled = window.pageYOffset;
        let parallaxRate = (scrolled)*.6; 
        parallaxImg.style.bottom = `${parallaxRate}px`;
        let rotateRate = (scrolled)*.01; 
        const actualTransform = parallaxImg.style.transform;
        let scrollTop = parallaxImg.getBoundingClientRect().top;
        if(window.innerWidth > 860){
            parallaxImg.style.transform = `translateY(30%) rotate3d(1, .5, .5,${rotateRate}deg)`;
        }else if(window.innerWidth <= 860 && window.innerWidth>600){
            parallaxImg.style.transform = `translateY(0%) rotate3d(1, .5, .5,${rotateRate}deg)`;
        }
    });

    window.addEventListener('scroll', (e) => {
        const fadeItms = document.querySelectorAll('.fade-itm');
        fadeItms.forEach(item => {
            let scrollTop = item.getBoundingClientRect().top;
            if(scrollTop <= -30){
                item.style.opacity = '0';
            }else{
                item.style.opacity = '100';
            }
        })
    });

    cartIcon.addEventListener('click', () => {
        orderWrap.classList.toggle('cart__wrap--open');
    })
