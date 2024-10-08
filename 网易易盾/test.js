function unique2DArray(X) {
    // var Av = vO;
    var P;
    if (arguments['length'] > 1 && void 0 !== arguments[1]) {
        P = arguments[1];
    } else {
        P = 0;
    }
    if (!Array['isArray'](X))
        return X;
    for (var s = {}, M = [], S = 0, q = X['length']; S < q; S++) {
        var G = X[S][P];
        null === G || void 0 === G || s[G] || (s[G] = !0,
            M['push'](X[S]));
    }
    return M;
}
