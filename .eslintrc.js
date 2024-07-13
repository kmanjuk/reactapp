module.exports = {
  ignorePatterns: ["assets/","*.test.js"],
  env: {
    browser: true,
    node:true,
    es6: true,
    "jest/globals": true,
  },
  extends: [
    "eslint:recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    "ecmaVersion": "latest",
        "sourceType": "module"
  },
  plugins: ["react", "jest", "import"],
  rules: {
        "react/react-in-jsx-scope": "off",
        "prettier/prettier": [
            "error",
            {
              "trailingComma": "all",
              "tabWidth": 2,
              "semi": false,
              "singleQuote": true,
              "eslintIntegration": true,
              "printWidth": 100
            }
          ]
    }
};
