async function addItemCart(data) {
    let jwt =  document.cookie
    .split("; ")
    .find((row) => row.startsWith("jwt="))
    ?.split("=")[1];

    const response = await fetch('http://localhost:8081/add/cart', {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + jwt
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data)
    });
    return response.json();
}

export default addItemCart;