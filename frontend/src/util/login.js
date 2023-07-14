async function loginUser(data) {
    const response = await fetch('http://localhost:8081/login', {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {
            "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data)
    });
    return response.json();
}

export default loginUser;