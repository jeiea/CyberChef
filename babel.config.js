module.exports = function(api) {
    api.cache.forever();

    return {
        "sourceType": "unambiguous",
        "presets": [
            ["@babel/preset-env", {
                "modules": false,
                "useBuiltIns": "entry",
                "corejs": 3
            }]
        ],
        "plugins": [
            "dynamic-import-node",
            "@babel/plugin-syntax-import-assertions",
            [
                "babel-plugin-transform-builtin-extend", {
                    "globals": ["Error"]
                }
            ],
            [
                "@babel/plugin-transform-runtime", {
                    "regenerator": true
                }
            ]
        ]
    };
};
