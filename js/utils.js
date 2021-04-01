let url = 'https://oc-p5-api.herokuapp.com/api/cameras';

const productId = [];
let productList ;

///////////////////////////////////////////////////////////////////GET DATA utils 
  function clientResult(){
   if(localStorage.length === 0){
       totalCartField.textContent=="0";
   }else if(localStorage.getItem('order') == null){
    totalCartField.textContent=="0";
   }else if(localStorage.length > 0){
    resultOrder = localStorage.getItem('order').split(',');
    totalCartField.textContent==resultOrder.length;
    }else{
    totalCartField.textContent=="0";
   }
  }

///////////////////////////////////////////////////////////////////Init. Cart functions utils



const sumFromOrder = () => {
    resultOrder.forEach(element => {
      let objFromOrder = getCommonId(element);
      let cartResult = totalCart += objFromOrder[0].price;
      totalCart==cartResult;
    })
      totalCartField.textContent = `${totalCart} €`;
  }