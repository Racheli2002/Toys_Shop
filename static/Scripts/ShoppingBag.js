window.addEventListener('load', pageLoad)
function pageLoad() {
    loadCart()
}
function loadCart() {
    document.getElementById("totalAmount").innerText = sessionStorage.getItem('sum')
    document.getElementById("itemCount").innerText = sessionStorage.getItem('totalQuantity')
    let cart = JSON.parse(sessionStorage.getItem('cart'))
    temp = document.getElementById("temp-row");
    document.getElementById('items').innerHTML = "";
    cart.forEach(productObj => {
        const clonProducts = temp.content.cloneNode(true);
        //clonProducts.querySelector(".image") = "../Images/" + productObj.product.img;
        clonProducts.querySelector("h3").innerText = productObj.product.name;
        clonProducts.querySelector(".price").innerText = "₪" + productObj.product.price;
        clonProducts.querySelector(".itemNumber").innerText = productObj.quantity;

        clonProducts.querySelector(".image").style.backgroundImage = "../Images/" + productObj.product.img;

        //  clonProducts.querySelector(".description").innerText = productObj.product.desc;

        clonProducts.querySelector(".HideDeleteButtonshowText").addEventListener("click", () => {
            deleteProduct(productObj.product);


        });

        document.getElementById('items').appendChild(clonProducts)

    })
}
function deleteProduct(product) {
    debugger;
    let cart = JSON.parse(sessionStorage.getItem('cart'));
    let ind = cart.findIndex(p => p.product._id == product._id);
    let quantityToUpdate = parseInt(cart[ind].quantity)
    quantityToUpdate--
    if (quantityToUpdate == 0) {
        cart.splice(ind, 1);
    }
    else {
        cart[ind].quantity = quantityToUpdate.toString();
    }
    sessionStorage.setItem('cart', JSON.stringify(cart));
    setSum(product.price)
    setTotalQuantity()
    loadCart()
}
function setSum(price) {
    let sumString = sessionStorage.getItem('sum');

    let sumNumber = parseInt(sumString)
    sumNumber -= price
    sumString = sumNumber.toString()
    sessionStorage.setItem('sum', sumString);
}
function setTotalQuantity() {
    let totalQuantity = sessionStorage.getItem('totalQuantity');

    totalQuantity = parseInt(totalQuantity)
    totalQuantity--
    totalQuantity = totalQuantity.toString()
    sessionStorage.setItem('totalQuantity', totalQuantity);
}
async function placeOrder() {
    const cart = JSON.parse(sessionStorage.getItem('cart'))
    let productsId = []
    cart.forEach(product1 => productsId.push({
        'product': product1.product._id,
        'quantity': product1.quantity
    }))
    const user = JSON.parse(sessionStorage.getItem('user'))

    const id = user._id
    const order = {
        'user': id,
        'sum': Number(sessionStorage.getItem('sum')),
        'date': new Date(),
        'products': productsId
    };

    debugger


   let res=await fetch("/api/order", {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(order),
    })
    const data=await res.json()
        alert(`order successfully ${data._id}`)
        
    

}
