const pageId = localStorage.getItem('trackedLink').split(',')[0];
console.log(pageId);
const urlProductPage = `http://localhost:3000/api/cameras/${pageId}`;
const urlProductPageT =`https://ab-p5-api.herokuapp.com/api/teddies/${pageId}`;
let productPageObj;
const productPageSection = document.getElementById('product-page__section');
const productHero = document.getElementById('product-p__hero');


//////////////////////////////////////load-data from API+productID stored in localStorage
fetch(urlProductPageT ).then((response) => response.json().then((data) => {
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
    return buildProductPage();
})
);


//////////////////////////////////////build HTML with product data.
const buildProductPage = () => {
    productHero.innerHTML = `
    <div class="product-p__heading-wrap">
        <h1 class="first-heading">${productPageObj.name}</h1>
        <p class="first-heading__descr">${productPageObj.description}</p>
    </div>
    `;  
    const productWrap = document.createElement('div');
    productWrap.classList.add('product-p__wrap');
    productWrap.innerHTML = `
    <img class="product-p__img" src="${productPageObj.imageUrl}">
    <h2 class="product-p__low-heading second-heading">Choisissez votre optique</h2>
    <form id="opt__form"></form>
    <button class="cta opt__btn">valider</button>
    `;
    productPageSection.appendChild(productWrap);
}