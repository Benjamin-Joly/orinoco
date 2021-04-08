const pageId = localStorage.getItem('trackedLink').split(',')[0];
console.log(pageId);
const urlProductPage = `http://localhost:3000/api/cameras/${pageId}`;
const urlProductPageT =`https://ab-p5-api.herokuapp.com/api/teddies/${pageId}`;
let productPageObj;


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
})
);


//////////////////////////////////////build HTML with product data.
const buildProductPage = () => {

}