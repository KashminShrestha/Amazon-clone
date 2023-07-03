export const placeorder = (order) => {
    return fetch(`http://localhost:5000/order/placeorder`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(order)
    })
        .then(res => res.json())
        .catch(err => console.log(err))

}