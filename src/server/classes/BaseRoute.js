export default class BaseRoute {
    req = null;
    res = null;
    next = null;

    constructor(req, res, next) {
        this.req = req;
        this.res = res;
        this.next = next;
    }

    mOk(...add) {
        this.res.json({ ok: true, ...add });
    }

    mNotOk(...add) {
        this.res.json({ ok: false, ...add });
    }

    e500(...add) {
        this.res.status(500);
        this.mNotOk(...add);
    }

    onRequest() {
        this.on();
    }
}
