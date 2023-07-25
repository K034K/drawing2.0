import express from "express";
//import IndexRoute from "../routes/Index";
import AppRoute from "../routes/AppRoute";

//cookies
import cookieParser from "cookie-parser";

//port and host
const EXPRESS_HOST = "localhost";
const EXPRESS_PORT = 3000;

const db = {
    users: [],
    username2userindex: {
    }
};

export default class Express {
    run() {
        this.app = express();
        this.app.use(express.static("public"));
        this.app.use(express.json());

        // Routes
        //  this.get(IndexRoute);
        this.post(AppRoute);

        // Cookies
        this.app.use(cookieParser());

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
        this.app[type](ClassRoute.route, (req, res, next) => {
            console.log(req.url);
            try {
                new ClassRoute(req, res, next).onRequest({ db });
            } catch (e) {
                console.log(e);
                res.status(500).json({ error: e.message });
            }
        });
    
    }
}
