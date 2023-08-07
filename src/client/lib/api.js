//sending post request to server

export default function send(route, body) {
    return fetch(route, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...body }),
    })
        .then((r) => r.json());
}

export function adminGetUsersList() {
    return send("/admin/getUsersList");
}

export function adminDeleteUser(username) {
    return send('/admin/delete', { username });
}
