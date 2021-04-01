/////////////////////////////////////////////////*****************parallax effect */

    window.addEventListener('scroll', (e) => {
        console.log(e);
        const parallaxImg = document.querySelector('.img__parallax');
        let scrolled = window.pageYOffset;
        let parallaxRate = (scrolled)*.6; 
        parallaxImg.style.bottom = `${parallaxRate}px`;
        let rotateRate = (scrolled)*.01; 
        let scrollTop = parallaxImg.getBoundingClientRect().top;
        parallaxImg.style.transform = `translateY(30%) rotate3d(1, .5, .5,${rotateRate}deg)`;
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
