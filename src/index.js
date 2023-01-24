// ITERATION 1

function updateSubtotal(product) {

  let price = product.querySelector(".price span");
  let quantity = product.querySelector(".quantity input");

  let subtotal = Number(price.innerText) * quantity.value

  let htmlSubtotal = product.querySelector(".subtotal span")

  htmlSubtotal.innerText = subtotal;

  return subtotal;

}

function calculateAll() {
 
  // ITERATION 2
  let arrProduct = document.querySelectorAll(".product")

  arrProduct.forEach(element => {
    updateSubtotal(element);
    return element.subtotal
  });

  // ITERATION 3
  
  let unaCosa = document.querySelectorAll(".subtotal span");
  let total = document.querySelector("#total-value span");

  unaCosa.forEach(element => {

    total.innerText = Number(total.innerText) + Number(element.innerText)

  })

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
