/////////////////////////////////////////////////*****************parallax effect */
const cartIcon = document.getElementById('cart');
let parallaxImg = document.querySelector('.img__parallax');



    window.addEventListener('scroll', (e) => {   
        let scrolled = window.pageYOffset;
        let parallaxRate = (scrolled)*.6; 
        let rotateRate = (scrolled)*.01; 
        const actualTransform = parallaxImg.style.transform;
        let scrollTop = parallaxImg.getBoundingClientRect().top;
        if(window.innerWidth > 860){
            parallaxImg.style.bottom = `${parallaxRate}px`;
            parallaxImg.style.transform = `translateY(30%) rotate3d(1, .5, .5,${rotateRate}deg)`;
        }else if(window.innerWidth <= 860 && window.innerWidth>600){
            parallaxImg.style.bottom = `${parallaxRate}px`;
            parallaxImg.style.transform = `translateY(0%) rotate3d(1, .5, .5,${rotateRate}deg)`;
        }else if(window.innerWidth < 600){
            parallaxImg.style.transform = `scale(.9) translateY(40%)`;
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

    const cartAnimLaunch = () => {
        orderResultsWrap.classList.add('cart__animation--launch');
        setTimeout(() => {
            orderResultsWrap.classList.remove('cart__animation--launch');
        }, 1100)
      }


alertHeading.addEventListener('click', () => {
    alertHeading.style.display = "none";
})