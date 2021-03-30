const pageId = localStorage.getItem('trackedLink').split(',')[0];
console.log(pageId);
const url = `http://localhost:3000/api/cameras/${pageId}`;
let product;

fetch(url).then((response) => response.json().then((data) => {
    console.log(data);
    product = data;
    console.log(product);
    return product;
}).then(() => {
    const setDocumentName = () => {
        document.title = `orinoco | ${product.name}`
    }
    return setDocumentName();
})
);
