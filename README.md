[![npm version](https://badge.fury.io/js/eslint-config-staticdeploy.svg)](https://badge.fury.io/js/eslint-config-staticdeploy)
[![Dependency Status](https://david-dm.org/staticdeploy/eslint-config-staticdeploy.svg)](https://david-dm.org/staticdeploy/eslint-config-staticdeploy)

# eslint-config-staticdeploy

Staticdeploy eslint configuration.

## Install

```sh
npm i --save-dev eslint-config-staticdeploy
```

## Usage

Add to your `.eslintrc`:

  * plain javascript projects (base config):
    ```json
    {
        "extends": ["eslint-config-staticdeploy"]
    }
    ```

  * babel projects (extends the base config):
      ```json
      {
          "extends": ["eslint-config-staticdeploy/babel"]
      }
      ```

  * react projects projects (extends the babel config):
    ```json
    {
        "extends": ["eslint-config-staticdeploy/react"]
    }
    ```
