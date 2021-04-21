/////////////////////////////////////////////////*****************Write the Data in the right format and POST a contact form with the order */
const postFormBtn = document.querySelector('.post-form__btn');
let inputs = Array.from(document.querySelectorAll('.order-input'));
inputs.pop();
const emailInput = document.getElementById('email');
const alphaNum = /^[A-Za-zÀ-ÖØ-öø-ÿ0-9- ]*$/;
const emailRegx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const allInputs = Array.from(document.querySelectorAll('.order-input'));

window.addEventListener('pageshow', () => {
  allInputs.forEach((input) => {
    input.value = "";
  })
})

postFormBtn.classList.add('invalid__btn');
postFormBtn.setAttribute('tabindex', '-1');
postFormBtn.setAttribute('disable', 'true');

const allInputsFilled = () => {
 let invalidInputs = Array.from(document.querySelectorAll('.invalid__input'));
 let requiredInputs = Array.from(document.querySelectorAll('.required__input'));
 if(invalidInputs.length === 0 && requiredInputs.length === 0 && resultOrder.length >0){
  postFormBtn.classList.remove('invalid__btn');
  postFormBtn.setAttribute('tabindex', '0');
  postFormBtn.setAttribute('disable', 'false');
 }
}

inputs.forEach((input) => {
  input.addEventListener('change', () => {
    inputValidation(input, alphaNum); 
    allInputsFilled();
  })
})

emailInput.addEventListener('change', () => {
  inputValidation(emailInput, emailRegx);
  allInputsFilled();
})

const inputValidation = (input, regX) => {
  if(input.value.length > 1 && input.value.length < 100 && regX.test(input.value) === true){
    input.classList.remove('invalid__input');
    input.classList.remove('required__input');
  }else{
    input.classList.add('invalid__input');
  }
}

postFormBtn.addEventListener('click', (e) => {
 //e.preventDefault(); 
  //////////////////////////////////////////////////////////////////get the input values
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const address = document.getElementById('address').value;
  const city = document.getElementById('city').value;
  const email = document.getElementById('email').value;
////////////////////////////////Regex and security.





//////////////////////////////////////////////////////////////////write the POST request with the right format and POST client side order data
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  let raw = JSON.stringify({
    "contact": { 
      "firstName": firstName,
      "lastName": lastName,
      "address": address,
      "city": city,
      "email": email
    },
    "products": resultOrder//Order list from client side => clientResult();
  });
  
  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  fetch("https://oc-p5-api.herokuapp.com/api/cameras/order", requestOptions)
    .then((response) => response.text())
    .then(result => console.log(result))
    //.then(() => {return redirectToconfirm()})
    .catch(error => console.log('error', error));
});


const redirectToconfirm = () => {
  setTimeout(() => {
    window.location.href = "../pages/confirm.html";
  }, 300)
}