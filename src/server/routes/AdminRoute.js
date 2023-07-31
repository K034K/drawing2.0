import BaseRoute from "../classes/BaseRoute";

export default class AdminRoute extends BaseRoute {
    static route = ["/admin/:action","/admin"];

    on() {
        const { action, username } = this.req.params;

        

        if (!action && !username) {
            this.mOk({ users: this.db.users });
            return;
        }

        const mtd = `${action}Action`;

        if (!this[mtd]) {
            this.mNotOk({ error: "no action" });
            return;
        }

        this[mtd]();
        this.res.send("admin");
    }

    //get all users

    getUsersListAction() {
        this.mOk({ users: this.db.users });
    }

    //delete user

    deleteAction() {
        const { username } = this.req.params;

        const userIndex = this.db.username2userindex[username];

        if (userIndex === undefined) {
            this.mNotOk({ error: "no user" });
            return;
        } else {
            //delete user
            this.db.users.splice(userIndex, 1);
            //delete username
            delete this.db.username2userindex[username];

            //save user to db
            this.db._save();

            //send ok
            this.mOk();
        }
    }
}
