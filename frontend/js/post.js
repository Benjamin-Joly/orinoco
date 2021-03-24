/////////////////////////////////////////////////*****************Write the Data in the right format and POST a contact form with the order */
const btn = document.getElementById('btn');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  //////////////////////////////////////////////////////////////////get the input values
  const firstName = document.getElementById('first-name').value;
  const lastName = document.getElementById('last-name').value;
  const address = document.getElementById('address').value;
  const city = document.getElementById('city').value;
  const email = document.getElementById('email').value;
  //////////////////////////////////////////////////////////////////write the fetch request with the right format
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  
  var raw = JSON.stringify({
    "contact": {
      "firstName": firstName,
      "lastName": lastName,
      "address": address,
      "city": city,
      "email": email
    },
    "products": resultOrder
  });
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  fetch("http://localhost:3000/api/cameras/order", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

  let resultArea = document.getElementById('result-text');
  resultArea.textContent = `Te llamas ${firstName} ${lastName}, te podemos encontrar a ${address} en la ciudad de ${city}. Te escribiremos a esta direccion ${email}, asi que ojos sobre tu puta bandeja de entrada cabron`;
});
