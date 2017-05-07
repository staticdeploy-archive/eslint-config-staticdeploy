module.exports = {
    "extends": ["./index.js"],
    "parser": "babel-eslint",
    "plugins": ["babel"],
    "rules": {
        // Re-implemented eslint rules
        "babel/new-cap": [2],
        "babel/object-curly-spacing": [2],
        "babel/no-invalid-this": [2],
        "babel/semi": [2],
        // Corresponding eslint rules (they're turned off to prevent conflicts)
        "new-cap": [0],
        "no-invalid-this": [0],
        "object-curly-spacing": [0],
        "semi": [0]
    }
};
