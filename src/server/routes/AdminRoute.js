import BaseRoute from "../classes/BaseRoute";

import AdminRender from "../controllers/AdminRender";

import getStore from "../../client/store";

import { setUsers } from "../../client/store/reducers/app";
export default class AdminRoute extends BaseRoute {
    static route = ["/admin/:action", "/admin"];

    static getRoute = ["/admin"];
    
    static postRoute = ["/admin/:action"];

    on() {
        const { action, username } = this.req.params;

        if (!action && !username) {
            this.pageRender();
            return;
        }

        const mtd = `${action}Action`;

        if (!this[mtd]) {
            this.mNotOk({ error: "no action" });
            return;
        }

        this[mtd]();
    }

    //get all users
    pageRender() {
        const store = getStore();
        store.dispatch(setUsers(this.db.users));
        const html = new AdminRender().render(this.req.url, store);
        this.res.send(html);
    }

    getUsersListAction() {
        this.mOk({ users: this.db.users });
    }

    //delete user
    deleteAction() {
        const { username } = this.req.body;

        const index = this.db.username2userindex[username];

        if (index === undefined) {
            this.mNotOk({ error: "no user" });
            return;
        }
        
        //update db from strore
        this.db.users = this.db.users.filter((user) => user.username !== username);
        this.db._save();
    
        this.mOk();

    }
}
