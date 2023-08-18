//sending post request to server

import axios from "axios";

export default function send(route, body) {
    if (!__isBrowser__) {
        route = `http://localhost:3000${route}`;
    }
    return axios
        .post(route, {
            ...body,
        })
        .then((r) => r.data);
}

export function adminGetUsersList() {
    return send("/admin/getUsersList");
}

export function adminDeleteUser(username) {
    return send("/admin/delete", { username });
}

export function adminGetUser(username) {
    return send("/edit/getUser", { username });
}
