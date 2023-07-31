import express from "express";

//import routes
import AppRoute from "../routes/AppRoute";
import AdminRoute from "../routes/AdminRoute";

//cookies
import cookieParser from "cookie-parser";

//import files
import fs from "fs";

//port and host
const EXPRESS_HOST = "localhost";
const EXPRESS_PORT = 3000;

const db = {
    users: [],
    username2userindex: {},
    _load() {
        
        const data = fs.existsSync("./db.json") && fs.readFileSync("./db.json");
        const json = JSON.parse(data || "{}");
        Object.assign(this, json);
    },
    _save() {
        fs.writeFileSync("./db.json", JSON.stringify(this));
    }
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
        //  this.get(IndexRoute);
        this.post(AppRoute);
        this.get(AppRoute);

        this.post(AdminRoute);
        this.get(AdminRoute);

        this.app.listen(EXPRESS_PORT, EXPRESS_HOST, () => {
            console.log(`Express listening on ${EXPRESS_HOST}:${EXPRESS_PORT}`);
        });
    }

    //get for routes
    get(ClassRoute) {
        this.listen("get", ClassRoute);
    }

    // post for routes
    post(ClassRoute) {
        this.listen("post", ClassRoute);
    }

    listen(type, ClassRoute) {
        console.log("listen", type, ClassRoute.route);
        for (const route of ClassRoute.route) {
            this.app[type](route, (req, res, next) => {
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
