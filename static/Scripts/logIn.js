
window.addEventListener('load', pageLoad)
function pageLoad() {
    debugger
    document.getElementById("connect").addEventListener('click', get)
    document.getElementById("connectPost").addEventListener('click', post)
}
function display() {
    document.getElementById("newUser").style.display = "block";
}

function get() {

    debugger;

    let Password = document.getElementById("inp2").value
    let Email = document.getElementById("inp1").value
    fetch("/api/user/" + Email + '/' + Password)
        // .then(res => res.json())
        .then(data =>
            data.json())
        .then(x => {
            sessionStorage.clear()
            sessionStorage.setItem('user', JSON.stringify(x))
        })
        .then(document.location.href = "products.html")


    // .catch(e => alert("ERROR"))
}
async function post() {
    let address1 = {
        Street: document.getElementById("street").value,
        City: document.getElementById("city").value
    }

    let user = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        name: document.getElementById("name").value,
        address: address1


    };

    const data = await fetch("/api/user", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    })

    const data2 = await data.json()
    sessionStorage.clear()
    sessionStorage.setItem('user', JSON.stringify(data2))

    document.location.href = "products.html"
}

