module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
        es6: true,
    },
    globals: {
        Vue: true,
        _: true,
        mapGetters: true,
        mapState: true,
        types: true,
        Velocity: true,
        moment: true,
        Raven: true,
        code: true,
        api: true,
        consts: true,
        tenant: true,
        ApiCache: true,
        TweenLite: true,
        TweenMax: true,
        TimelineMax: true,
        Power0: true,
        Power1: true,
        Power2: true,
        Power3: true,
        Power4: true,
        Elastic: true,
        Back: true,
        Expo: true,
        Quad: true,
        Quart: true,
        PIXI: true,
        RoughEase: true,
        process: true,
    },
    extends: ["prettier"],
    plugins: ["prettier"],
    rules: {
        "prettier/prettier": "error",
        "arrow-body-style": "off",
        "prefer-arrow-callback": "off",
    },
};