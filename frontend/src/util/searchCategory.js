async function searchCategory(search, jwtToken) {
    try{
        console.log(search)
        const response = await fetch(`http://localhost:8081/get/category/${search}`, {
            method: "GET",
        });
        console.log(response)
        return response;
    } catch (error) {
        console.error(`Error getting item from cart: ${error}`);
    }
}

export default searchCategory;