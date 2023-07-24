import express from "express";
import IndexRoute from "../routes/Index";

const EXPRESS_HOST = "localhost";
const EXPRESS_PORT = 3000;

export default class Express {
    run() {
        this.app = express();
        this.app.use(express.static("public"));
        this.app.use(express.json());

        // Routes
        this.get(IndexRoute);

        this.app.listen(EXPRESS_PORT, EXPRESS_HOST, () => {
            console.log(`Express listening on ${EXPRESS_HOST}:${EXPRESS_PORT}`);
        });
    }

    get(ClassRoute) {
        this.app.get(ClassRoute.route, (req, res, next) => {
            console.log(req)
            try {
                new ClassRoute(req, res, next).onRequest();
            } catch (e) {
                console.log(e);
                res.status(500).json({ error: e.message });
            }
        });
    }
}
