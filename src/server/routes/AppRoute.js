import BaseRoute from "../classes/BaseRoute";
import Render from "../controllers/Render";

//import react-router-dom

export default class AppRoute extends BaseRoute {
    static route = ["/app/:action", "/show/:username"];

    on() {
        const { action, username } = this.req.params;

        if (!action && username) {
            this.show(username);
            return;
        }

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

    //set user's dimension on request or create new user
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

        //save user to db
        this.db._save();

        //save username in cookie
        this.res.cookie("username", username, {
            maxAge: 60 * 60 * 24 * 1000,
            sameSite: "strict",
            httpOnly: true,
        });

        this.mOk({ width, height });
    }

    //get user's dimenstion on request (not used)
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

    //set user's grid on request
    setGridAction() {
        const { grid } = this.req.body;
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

    //get user's grid on request
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

    //show user's grid on request
    //request get username from url
    show(username) {
        const userIndex = this.db.username2userindex[username];
        if (userIndex === undefined) {
            this.mNotOk({ error: "no user" });
            return;
        } else {
            const { grid, width } = this.db.users[userIndex];
            this.res.send(new Render().render(width, grid));
        }
    }
}
