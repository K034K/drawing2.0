function send(route, body) {
    return fetch(route, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...body }),
    })
        .then((r) => r.json());
}

export default send;
