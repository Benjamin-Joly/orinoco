const pageId = localStorage.getItem('trackedLink').split(',')[0];

const getPageId = () => {
    if(pageId !== "undefined"){
        return pageId
    }else{
        return window.location.href = "../index.html";
    }
}

const productWrap = document.createElement('div');
console.log(pageId);
const urlProductPage = `https://oc-p5-api.herokuapp.com/api/cameras/${getPageId()}`;
const urlProductPageT =`https://ab-p5-api.herokuapp.com/api/teddies/${pageId}`;
let productPageObj;
const productPageSection = document.getElementById('product-page__section');
const productHero = document.getElementById('product-p__hero');
let submitBtn;


const parsePriceProductP = () => {
    productPageObj.price == (productPageObj.price/=100);
  }

//////////////////////////////////////load-data from API+productID stored in localStorage
fetch(urlProductPage).then((response) => response.json().then((data) => {
    console.log(data);
    productPageObj = data;
    console.log(productPageObj);
    return productPageObj;
}).then(() => {
    //////////////////////////////////////set new document name from ID.name
    const setDocumentName = () => {
        document.title = `orinoco | ${productPageObj.name}`
    }
    return setDocumentName();
}).then(() => {
    //////////////////////////////////////set new document name from ID.name
    return parsePriceProductP();
}).then(() => {
    //////////////////////////////////////set new document name from ID.name
    return buildProductPage();
})
); 

const productBtnBhvr = () => {
    resultOrder.push(submitBtn.value);
    localStorage.setItem('order', resultOrder);   
}

const buildOptionForm = () => {
    const lenses = productPageObj.lenses;
    let inputWrap;
    console.log(lenses);
    const optForm = document.createElement('form');
    optForm.classList.add('product-p__form');
    productWrap.appendChild(optForm);
    submitBtn = document.createElement('button');
    submitBtn.classList.add('cta', 'opt__btn', 'product__btn');
    submitBtn.setAttribute('value', productPageObj._id);
    submitBtn.textContent = "ajouter au panier";
    submitBtn.addEventListener('click', (e) => {
        e.preventDefault(submitBtn);
        productBtnBhvr();
        clientResult(); 
        buildSelectedProduct(productPageObj);
        displayCartNotif(); 
        cartAnimLaunch();
        activeValidBtn();
    })
    const buildInputs = () => {
        lenses.forEach(el => {
           inputWrap = document.createElement('div');
           inputWrap.classList.add('product-p-input__wrap');
           inputWrap.innerHTML = `
           <input type="radio" id="lense-${lenses.indexOf(el)}" name="lense" value="${lenses[lenses.indexOf(el)]}" checked>
            <label for="lense-${lenses.indexOf(el)}" class="check__label">
                <div class="check__btn"></div>
                <p class="check__descr">${lenses[lenses.indexOf(el)]}</p>
            </label>
           `;
           optForm.appendChild(inputWrap);
        });
        optForm.appendChild(submitBtn);
    }
    return buildInputs();
}    
//////////////////////////////////////build HTML with product data.
const buildProductPage = () => {
    productHero.innerHTML = `
    <div class="product-p__heading-wrap">
        <h1 class="first-heading">${productPageObj.name}</h1>
        <p class="first-heading__descr">${productPageObj.description}</p>
    </div>
    `;  
    productWrap.classList.add('product-p__wrap');
    productWrap.innerHTML = `
    <img class="product-p__img" src="${productPageObj.imageUrl}">
    <h2 class="product-p__low-heading second-heading">Choisissez votre optique</h2>
    `;
    buildOptionForm();
    productHero.appendChild(productWrap);
}

//////////////////////////////////fix unload bug on productPage

window.addEventListener('popstate', (e) => {
    window.location.href ='../index.html';
});