window.addEventListener('load', pageLoad)
function pageLoad() {
    let user = sessionStorage.getItem('user')
    user = JSON.parse(user)

    loadUserDetails(user)
document.querySelector("button").addEventListener('click',()=>{update(user)})
}

function loadUserDetails(user) {
    document.getElementById("street").value = user.address.street
    document.getElementById("city").value = user.address.city
    document.getElementById("email").value = user.email
    document.getElementById("password").value = user.password
    document.getElementById("name").value = user.name
}
async function update(user) {

    debugger
   let userToUpdate = {
        _id:user._id,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        name: document.getElementById("name").value,
        address: user.address
    };

    const data = await fetch("/api/user/"+ user._id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userToUpdate)
    })

    // const data2 = await data.json()
    //sessionStorage.clear()
    sessionStorage.setItem('user', JSON.stringify(userToUpdate))

    document.location.href = "products.html"
}





