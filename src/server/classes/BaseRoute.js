// Base Route Class? any other route should extend this class

export default class BaseRoute {
    req = null;
    res = null;
    next = null;

    // constructor for BaseRoute
    constructor(req, res, next) {
        this.req = req;
        this.res = res;
        this.next = next;
    }

    // all ok
    mOk(add) {
        this.res.json({ ok: true, ...add });
    }

    // not ok error occured
    mNotOk(add) {
        this.res.json({ ok: false, ...add });
    }

    // 400 bad request error
    e500(add) {
        this.res.status(500);
        this.mNotOk(...add);
    }

    // on request do this
    onRequest({ db }) {
        this.db = db;
        this.on();
    }
}
