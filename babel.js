module.exports = {
    "extends": ["./index.js"],
    "parser": "babel-eslint",
    "plugins": ["babel"],
    "rules": {
        // Re-implemented eslint rules
        "babel/generator-star-spacing": [2],
        "babel/new-cap": [2],
        "babel/array-bracket-spacing": [2],
        "babel/object-curly-spacing": [2],
        "babel/object-shorthand": [2, "consistent"],
        "babel/arrow-parens": [2, "as-needed"],
        // Corresponding eslint rules (they're turned off to prevent conflicts)
        "generator-star-spacing": [0],
        "new-cap": [0],
        "array-bracket-spacing": [0],
        "object-curly-spacing": [0],
        "object-shorthand": [0],
        "arrow-parens": [0],
        // babel only rules
        "babel/no-await-in-loop": [2],
        "babel/flow-object-type": [0],
        "babel/func-params-comma-dangle": [2]
    }
};
