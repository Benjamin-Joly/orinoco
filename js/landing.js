
 //////////////////set a delay before loading the product page so the product.id can be saved in localStorage
  function delay(URL) {
    setTimeout( function() { window.location = URL }, 200 );
  }
 //////////////////build the landing page articles with product img, name, descr, price and cta.
  const createNewItem = () => {
    const productSection = document.getElementById('product__section');
    const newItem = document.createElement('div');
    newItem.classList.add("product__container");
    const dataMap = productList.map(x => {
      const dataName = x.name;
      const dataId = x._id;
      const dataPrice = x.price;
      const dataDescr = x.description;
      const dataUrl = x.imageUrl;
      const dataOpt = x.lenses;
      return (
        `
    <div class="product__wrap">
        <a class="${dataId} product__link link__select" data-link="${dataId}" href="javascript:delay('pages/produit.html')">
        <img id="img__${dataId}" class="product__img" src="${dataUrl}" alt="${dataName}">
        </a>
      <div class="product__item--type-container">
        <a class="${dataId} product__link--type link__select" data-link="${dataId}" href="pages/produit.html">
        <h3 class="product__item--heading">
        ${dataName}
        </h3>
        <p class="product__item--descr">
        ${dataDescr}
        </p>
        </a>
        <p class="product__item--price">
        ${dataPrice} €
        </p>
        <button class="product__btn product__btn--${dataId} cta product__cta" value ="${dataId}">
        <svg id="picto__cart" class ="picto__cart" xmlns="http://www.w3.org/2000/svg" width="50" height="51" viewBox="0 0 50 51">
            <g class="picto__cart--g" transform="translate(8.395 14.307)">
              <path class="picto__cart--line" d="M1321.733,48.628h-13.978a3.581,3.581,0,0,1-3.519-2.958l-2.346-13.7a2.946,2.946,0,0,0-2.932-2.465H1297.1" transform="translate(-1297.1 -29.5)" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.337"/>
              <path class="picto__cart--basket" data-name="cart" d="M1302.2,33.1h24.046a.727.727,0,0,1,.684.986l-2.346,7.592a3.788,3.788,0,0,1-3.617,2.662h-16.812Z" transform="translate(-1297.215 -29.551)"/>
              <ellipse class="picto__cart--wheel2" cx="1.955" cy="1.972" rx="1.955" ry="1.972" transform="translate(7.918 20.804)" fill="#dedede"/>
              <ellipse class="picto__cart--wheel" cx="1.955" cy="1.972" rx="1.955" ry="1.972" transform="translate(20.723 20.804)" fill="#dedede"/>
            </g>
        </svg>
        </button>
        <div class="product__opt"></div>
        <a class="${dataId} product__link--type link__select" data-link="${dataId}" href="pages/produit.html">
          <button class="cta--white product__item--btn" value ="${dataId}">
            En savoir +
          </button>
        </a>
      </div>
    </div>
  `
      );
    });
     //////////////////store the product ID in localStorage in case user click on a product so the product page can build itself from the ID.
      newItem.innerHTML = dataMap.join('');
      productSection.appendChild(newItem);
      btnProduct = Array.from(document.querySelectorAll('.product__btn'));
      const linkSelect = Array.from(document.querySelectorAll(".link__select"));
      linkSelect.forEach(el => {
          el.addEventListener('click', (e) => {
            delay();
            const trackedId = el.dataset.link;
            console.log(trackedId);
            localStorage.setItem(['trackedLink'] , trackedId);
          })
      })           
  }
 //////////////////add new product to cart on click, store it in localStorage and update client visibility of the order.
  const cartBtnBhvr = () => {
    btnProduct.forEach(item => {
      item.addEventListener('click', (e) => {
        resultOrder.push(item.value);
        console.log(resultOrder);
        localStorage.setItem('order', resultOrder);
        clientResult(); 
        activeValidBtn();
        displayCartNotif();  
        cartAnimLaunch();
      }) 
    });
  }



  