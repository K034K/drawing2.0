import BaseRoute from "../classes/BaseRoute";
export default class IndexRoute extends BaseRoute {
    static Routes = [{ type: "get", path: "/" }];


    on() {
        //send ok
        this.mOk();
    }
}
