import BaseRoute from "../classes/BaseRoute";
export default class AppRoute extends BaseRoute {
    static route = "/app/:action";

    on() {
        
        const { action } = this.req.params;

        if (!action) {
            this.mNotOk({ error: "no action" });
            return;
        }

        const mtd = `${action}Action`;
        
        if (!this[mtd]) {
            this.mNotOk({ error: "no action" });
            return;
        }

        this[mtd]();
    }

    setAction() {
        const { width, height, username } = this.req.body;
        
        const userIndex = this.db.username2userindex[username];
        
        if (userIndex === undefined) {
            const newUsersCount = this.db.users.push({
                username,
                width,
                height,
            });
            this.db.username2userindex[username] = newUsersCount - 1;
        }
        else {
            this.db.users[userIndex] = {
                ...this.db.users[userIndex],
                width,
                height,
            };
        }

        this.mOk({ width, height });
    }
}
