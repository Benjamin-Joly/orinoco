
////////////////////////////////contact API get and save DATA on separated arrays
/*
const saveData = (data) => {
  productList = data;
}
*/

async function loadData() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  return data;
}

document.addEventListener('DOMContentLoaded', async () => {
  try{
    productList = await loadData();
  }catch(e){
    console.log(e);
  }
  parsePriceUnit();
  if(typeof(createNewItem) !== 'undefined'){
    createNewItem();
    cartBtnBhvr();
  }
  clientResult();
  supprBuiltItems();
  buildSelectedItems();
  sumFromOrder();
  activeValidBtn();

  if(typeof(buildSummaryFromOrder)!== "undefined"){
    return buildSummaryFromOrder();
  }
})


/*
const loadData = () => {
  fetch(url)
  .then((response) => {
    if(response.ok){
      return response.json()
    }else{
      throw new Error('something went wrong');
    }
  }).then((data) => {
    console.log(data);
    return saveData(data);
  }).catch((error) => {
    console.log(error);
    alertHeading.textContent = "une erreur s'est produite, veuillez recharger la page.";
    return alertHeading.style.display = 'inline';
  });
}
*/
 

/*
.then(() => {
  ////////////loadData.js//////Get data from API and after short loading time create them on the landing page HTML.
    return parsePriceUnit();   
}).then(() => {
  ////////////cart.js/////////build product articles if the function is correctly defined
    if(typeof(createNewItem) === 'function'){
      return createNewItem();
    }  
}).then(() => {
  ////////////cart.js/////////init addToCart btns if there are any
  if(typeof(cartBtnBhvr) === 'function'){
    return cartBtnBhvr();
  }
}).then(() => {
  ////////////cart.js/////////update the order on a client side preview
  return clientResult();
}).then(() => {
  ////////////cart.js/////////suppr ordered items on the cart page
  return supprBuiltItems();
}).then(() => {
  ////////////cart.js/////////build ordered items on the cart page
  return buildSelectedItems();
}).then(() => {
  ////////////cart.js/////////update cart value in €
  return sumFromOrder();
}).then(() => {
  ////////////cart.js/////////activate validation if there is any product ordered
  return activeValidBtn();
}).then(() => {
  ////////////cart.js/////////activate validation if there is any product ordered
  if(typeof(buildSummaryFromOrder)!== "undefined"){
    return buildSummaryFromOrder();
  }
})
*/

/*
fetch(url).then((response) => {
  if(response.ok){
    response.json()
    .then((data) => {
      console.log(data);
      productList = data;
      console.log(productList);
    }).then(() => {
      ////////////loadData.js//////Get data from API and after short loading time create them on the landing page HTML.
        return parsePriceUnit();   
    }).then(() => {
      ////////////cart.js/////////build product articles if the function is correctly defined
        if(typeof(createNewItem) === 'function'){
          return createNewItem();
        }  
    }).then(() => {
      ////////////cart.js/////////init addToCart btns if there are any
      if(typeof(cartBtnBhvr) === 'function'){
        return cartBtnBhvr();
      }
    }).then(() => {
      ////////////cart.js/////////update the order on a client side preview
      return clientResult();
    }).then(() => {
      ////////////cart.js/////////suppr ordered items on the cart page
      return supprBuiltItems();
    }).then(() => {
      ////////////cart.js/////////build ordered items on the cart page
      return buildSelectedItems();
    }).then(() => {
      ////////////cart.js/////////update cart value in €
      return sumFromOrder();
    }).then(() => {
      ////////////cart.js/////////activate validation if there is any product ordered
      return activeValidBtn();
    }).then(() => {
      ////////////cart.js/////////activate validation if there is any product ordered
      if(typeof(buildSummaryFromOrder)=== "function"){
        return buildSummaryFromOrder();
      }
    }).then(() => {
      ////////////////////////////if data is correctly loaded
      return alertHeading.style.display = 'none';
    })
  }else{
    throw new Error('Something went wrong');
  } 
}).catch((error) => {
  console.log(error);
});
*/