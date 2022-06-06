
window.addEventListener('load', pageLoad)
function pageLoad() {
    debugger
if(!sessionStorage.getItem("sum")){
    sessionStorage.setItem("sum",'0')
}
    loadtotalQuantity()
    loadCategories();
    loadProducts();
}
function loadtotalQuantity(){

    let totalQuantity=sessionStorage.getItem('totalQuantity');
    if(!totalQuantity){
        sessionStorage.setItem('totalQuantity','0');
        totalQuantity='0';
    }
    document.getElementById("ItemsCountText").innerText=totalQuantity;
}
function loadCategories() {
    fetch('/api/category/')
        .then(res => res.json())
        .then(res => drawCategory(res))
        .catch(err => alert(err))
}
function loadProducts() {
    fetch('/api/product/')
        .then(res => res.json())
        .then(res => drawProduct(res))
        .catch(err => alert(err))
}
function drawCategory(categories) {
    tempCategory = document.getElementById("temp-category");
    categories.forEach(category => {

        const clonCategory = tempCategory.content.cloneNode(true);
        clonCategory.getElementById("OptionName").textContent = category.name;

        clonCategory.getElementById("category").addEventListener("click", (event) => {
            if (event.target.checked) {
                getProductsByCategory(category._id)
            }
            else {
                debugger;
                loadProducts();
            }


        });
        document.getElementById('filters').appendChild(clonCategory)
    });
}
function drawProduct(products) {
    temp = document.getElementById("temp-card");
    document.getElementById('PoductList').innerHTML = "";
    products.forEach(product => {
        const clonProducts = temp.content.cloneNode(true);
        clonProducts.querySelector("img").src = "../Images/" + product.img;
        clonProducts.querySelector("h1").innerText = product.name;
        clonProducts.querySelector(".price").innerText = "₪" + product.price;
        clonProducts.querySelector(".description").innerText = product.desc;

        clonProducts.querySelector("button").addEventListener("click", () => {
            addToCart(product);

        });

        document.getElementById('PoductList').appendChild(clonProducts)

    })
}
function getProductsByCategory(categoryId) {
    fetch('/api/product/' + categoryId)
        .then(res => res.json())
        .then(res => drawProduct(res))
        .catch(err => alert(err))
}
function setCountString() {
    
    let countString = document.getElementById("ItemsCountText").innerText;
    let countNumber = parseInt(countString)
    countNumber++
    countString = countNumber.toString()
    document.getElementById("ItemsCountText").innerText = countString;
    sessionStorage.setItem('totalQuantity',countString)
}
function setSum(price) {
    let sumString = sessionStorage.getItem('sum');
   
    let sumNumber = parseInt(sumString)
    sumNumber+=price
    sumString = sumNumber.toString()
    sessionStorage.setItem('sum',sumString);
}
function addToCart(product) {
    setSum(product.price)
    setCountString()
    let cart = sessionStorage.getItem('cart');
    console.log(typeof (cart));
    if (!cart) {
        cart = []
        let prod = {
            'product': product,
            'quantity': 1
        }
        cart.push(prod);

    }
    else {
        cart = JSON.parse(sessionStorage.getItem('cart'))

        let ind = cart.findIndex(p => p.product._id == product._id);
        if (ind != -1) {
            cart[ind].quantity++;

        }
        else {
            let prod = {
                'product': product,
                'quantity': 1
            }
            cart.push(prod);
        }
    }

    sessionStorage.setItem('cart', JSON.stringify(cart));
}

