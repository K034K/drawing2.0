import BaseRoute from "../classes/BaseRoute";
export default class IndexRoute extends BaseRoute {
    static route = "/";

    

    on() {
        //cookie test
        this.res.cookie("hello", "world status check", {
            maxAge: 1000 * 60 * 60 * 24 * 30,
        });

        //send ok

        this.mOk();
    }
}
