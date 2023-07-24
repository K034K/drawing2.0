import BaseRoute from "../classes/BaseRoute";

export default class IndexRoute extends BaseRoute {
    static route = "*";

    on(req, res) {
        this.mOk();
    }
}
