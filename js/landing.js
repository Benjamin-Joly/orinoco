
 //////////////////set a delay before loading the product page so the product.id can be saved in localStorage
  function delay(URL) {
    setTimeout( function() { window.location = URL }, 200 );
  }
 //////////////////build the landing page articles with product img, name, descr, price and cta.
  const createNewItem = () => {
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
        <button class="product__btn product__btn--${dataId} cta--white" value ="${dataId}">
          <div class="cart__icon">ajouter au panier</div>
        </button>
      </div>
      <div class="product-form__wrap">
       <div>
          <label for="lense-1">${dataOpt}</label>
          <input type="radio" id="lense-1" name="lense" value="opt-1" checked>
        </div>
        <div>
        <label for="lense-2">${dataOpt}</label>
        <input type="radio" name="lense" id="lense-2" value="opt-2">
        </div>
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



  