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
        const { width, height, username, gridInit } = this.req.body;

        const userIndex = this.db.username2userindex[username];

        if (userIndex === undefined) {
            const newUsersCount = this.db.users.push({
                username,
                width,
                height,
                grid: gridInit,
            });
            this.db.username2userindex[username] = newUsersCount - 1;
        } else {
            this.db.users[userIndex] = {
                ...this.db.users[userIndex],
                width,
                height,
                grid: gridInit,
            };
        }

        this.db._save();

        this.res.cookie("username", username, {
            maxAge: 60 * 60 * 24 * 1000,
            sameSite: "strict",
            httpOnly: true,
        });

        this.mOk({ width, height });
    }

    getDimensionAction() {
        const { localUsername } = this.req.body;

        //console.log("getDimensionAction", localUsername);

        const userIndex = this.db.username2userindex[localUsername];
        if (userIndex === undefined) {
            this.mNotOk({ error: "no user" });
            return;
        } else {
            const { width, height } = this.db.users[userIndex];
            //console.log("getDimensionAction Width and Height", width, height);
            this.mOk({ width, height });
        }
    }

    setGridAction() {
        const { grid } = this.req.body;
        console.log(this.req.cookies);
        const localUsername = this.req.cookies.username;

        const userIndex = this.db.username2userindex[localUsername];
        if (userIndex === undefined) {
            this.mNotOk({ error: "no user" });
            return;
        } else {
            this.db.users[userIndex].grid = grid;
            this.db._save();
            this.mOk();
        }
    }

    getGridAction() {
        const localUsername = this.req.cookies.username;

        const userIndex = this.db.username2userindex[localUsername];
        if (userIndex === undefined) {
            this.mOk({ grid: null });
            return;
        } else {
            const { grid, width, height } = this.db.users[userIndex];
            this.mOk({ grid, width, height });
        }
    }
}
