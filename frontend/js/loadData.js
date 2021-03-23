/////////////////////////////////////////////////*****************Get the product ID and iterate a button and a css class for each ID it receives. */

let url = 'http://localhost:3000/api/cameras';

const productId = [];

fetch(url).then((response) => response.json().then((data) => {
      data.forEach(element => {
        productId.push(element._id);
      });
}));
console.log(productId);

const orderWrap = document.getElementById('order-wrap');
let btnProduct;

const createNewBtn = () => {
  productId.forEach(item => {
    const btnNumber = productId.indexOf(item);
    const newBtn = document.createElement('button');
    newBtn.textContent = `ajouter au panier`;
    newBtn.classList.add("product__btn", `product__${btnNumber}`);
    orderWrap.appendChild(newBtn);
  });
  btnProduct = Array.from(document.querySelectorAll('.product__btn'));
  console.log(btnProduct);
}

  const loadDataFirst = new Promise((resolve, reject) => {
      window.addEventListener('load', () => {
        setTimeout(() => {
          resolve()
        }, 10)
      });
  });

  loadDataFirst.then(() => {
    return createNewBtn();   
}).then((result) => {
  return cartBtnBhvr();
})

 


