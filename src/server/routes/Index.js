import BaseRoute from "../classes/BaseRoute";
export default class IndexRoute extends BaseRoute {
    static route = "/";

    

    on() {
        //send ok
        this.mOk();
    }
}
