async function getCart(jwtToken) {
    try{
        const response = await fetch('http://localhost:8081/get/cart', {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${jwtToken}`
            }
        });
        const parsed = response.json()
        return parsed;
    } catch (error) {
        console.error(`Error adding item to cart: ${error}`);
    }
}

export default getCart;