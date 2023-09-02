import express from "express";

//import routes
import AppRoute from "../routes/AppRoute";
import AdminRoute from "../routes/AdminRoute";
import { createStaticHandler } from "react-router-dom/server";

//cookies
import cookieParser from "cookie-parser";

//import files
import fs from "fs";
import EditRoute from "../routes/EditRoute";
import IndexRoute from "../routes/Index";

//port and host
const EXPRESS_HOST = "localhost";
const EXPRESS_PORT = 3000;

const db = {
    users: [],
    username2userindex: {},
    _init() {
        // creating dummy users
        for (let index = 0; index < 10; index++) {
            let number = this.users.push({
                username: Date.now().toString(36) + Math.random().toString(36).substr(2),
                width: 2,
                height: 2,
                grid: [],
            });
            this.username2userindex[this.users[number - 1].username] = number - 1;
        }
    },

    _load() {
        try {
            const data = fs.existsSync("./db.json") && fs.readFileSync("./db.json");
            const json = JSON.parse(data || "{}");
            Object.assign(this, json);
        } catch (error) {
            console.log(error);
            this._init;
        }
    },
    _save() {
        fs.writeFileSync("./db.json", JSON.stringify(this));
    },
};

export default class Express {
    run() {
        db._load();
        this.app = express();
        this.app.use(express.static("public"));
        this.app.use(express.json());

        // Cookies
        this.app.use(cookieParser());

        // Routes

        this.listen(IndexRoute);

        this.listen(AppRoute);

        this.listen(AdminRoute);

        this.listen(EditRoute);

        this.app.listen(EXPRESS_PORT, EXPRESS_HOST, () => {
            console.log(`Express listening on ${EXPRESS_HOST}:${EXPRESS_PORT}`);
        });
    }



    listen(ClassRoute) {
        for (const route of ClassRoute.Routes) {
            this.app[route.type](route.path, (req, res, next) => {
                console.log(req.url);
                try {
                    new ClassRoute(req, res, next).onRequest({ db });
                } catch (e) {
                    res.status(500).json({ error: e.message });
                }
            });
        }
    }
}
