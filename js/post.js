/////////////////////////////////////////////////*****************Write the Data in the right format and POST a contact form with the order */
const postFormBtn = document.querySelector('.post-form__btn');
const inputs = Array.from(document.querySelectorAll('.order-input'));
  
inputs.forEach((input) => {
  input.addEventListener('invalid', () => {
    postFormBtn.style.opacity = 0.5;
    postFormBtn.style.pointerEvents = 'none';
  })
})

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
    .then((response) => {
      if(response.ok === true){
        response.text()
        console.log('stylé');
        redirectToconfirm();
      }
    })
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
});


const redirectToconfirm = () => {
  setTimeout(() => {
    window.location.href = "../pages/confirm.html";
  }, 300)
}