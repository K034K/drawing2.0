import BaseRoute from "../classes/BaseRoute";

import EditRender from "../controllers/EditRender";

import getStore from "../../client/store";

import { setEditUser, setUsers } from "../../client/store/reducers/app";

/**
 * Represents a route for editing a user.
 * @extends BaseRoute
 */
export default class EditRoute extends BaseRoute {
    static Routes = [
        { type: "get", path: "/edit/:username" },
        { type: "post", path: "/edit/:action" },
    ];

    /**
     * Handles the request for the edit route.
     */
    on() {
        const { username, action } = this.req.params;

        if (!action) {
            this.editUserRender();
            return;
        }

        const mtd = `${action}Action`;

        if (!this[mtd]) {
            this.mNotOk({ error: "no action" });
            return;
        }

        this[mtd]();
    }

    /**
     * Renders the edit user page.
     */
    editUserRender() {
        const { username } = this.req.params;
        const store = getStore();

        const index = this.db.username2userindex[username];

        if (index === undefined) {
            this.mNotOk({ error: "no user" });
            return;
        }
        const user = this.db.users[index];

        store.dispatch(setEditUser(user));

        const html = new EditRender().render(this.req.url, store);

        this.res.send(html);
    }

    /**
     * Gets a user.
     */
    getUserAction() {
        const { username } = this.req.body;

        const index = this.db.username2userindex[username];

        if (index === undefined) {
            this.mNotOk({ error: "no user" });
            return;
        }

        const user = this.db.users[index];

        this.mOk({ user });
    }

    /**
     * Save a user in the database.
     */
    saveUserAction() {
        const { username, grid } = this.req.body;
       
        console.log("username: ", username);
        console.log("grid: ", grid);

        const index = this.db.username2userindex[username];

        if (index === undefined) {
            this.mNotOk({ error: "no user" });
            return;
        }
        
        this.db.users[index].grid = grid;

        this.db._save();

        this.mOk();
    }
}
