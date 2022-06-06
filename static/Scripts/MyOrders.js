window.addEventListener('load', pageLoad)
function pageLoad() {

    getOrders()

}
function getOrders() {
    debugger
    let user=sessionStorage.getItem('user')
    const user1=JSON.parse(user)
    const userId=user1[0]._id

    fetch("/api/order/" + userId)

        .then(data =>
            data.json())
        .then(x => {
            const x1=JSON.stringify(x)
            document.querySelector('h1').innerHTML=x1
        })
        
}