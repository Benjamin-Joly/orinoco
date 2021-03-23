/////////////////////////////////////////////////*****************Add/suppress products in the cart by using localStorage. Updates on live the product number. Still need to refresh the page to erase the order*/

const orderResults = document.getElementById('order-results');
const rmvProduct = document.getElementById('remove-product');
let resultOrder = [];

function displayResult(){
  if(localStorage.length !==0){
    resultOrder = localStorage.getItem('order').split(',');
        if(localStorage.length !== 0){
          return orderResults.textContent = `vous avez commandé ${resultOrder.length} produits`;
        }else if (localStorage.length == 0){
        return orderResults.textContent = `vous n'avez pas sélectionné d'articles`;
        }else{
          return orderResults.textContent = `choisissez un produit`;
        }        
  } 
}


/*
const waitOrderUpdate = new Promise((resolve, reject) => {
    resolve(() => {
        displayResult();
    });
});

waitOrderUpdate.then(() => {
    cartBtnBhvr();
}).then((result) => {
    console.log(resultOrder);
    let test = `${url}/${resultOrder[2]}`;
    console.log(test);
});
*/



window.addEventListener('load', () => {
  displayResult();
});


let order = localStorage.length <= 0 ? [] : [localStorage.getItem('order').split(',')];


const cartBtnBhvr = () => {
  btnProduct.forEach(item => {
    item.addEventListener('click', (e) => {
      let clickNumb = btnProduct.indexOf(item);
      console.log(clickNumb);
      order.push(productId[clickNumb]);
      localStorage.setItem('order', order);
      displayResult(); 
    }) 
  });
}

//////////////////////////////////////////////////////////To display LocalStorage state after clear() method page needs to be refreshed.

  rmvProduct.addEventListener('click', () => {
    localStorage.clear();
    orderResults.textContent = `choisissez un produit`;
    document.location.reload();
});

//console.log(order);