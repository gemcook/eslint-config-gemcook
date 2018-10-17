# eslint-config-gemcook

## Usage

### Install:

#### `npm`

##### Web

```sh
npm install --save-dev \
  eslint-config-gemcook \
  eslint-config-fbjs \
  eslint-config-prettier \
  eslint-plugin-babel \
  eslint-plugin-import \
  eslint-plugin-flowtype \
  eslint-plugin-jsx-a11y \
  eslint-plugin-react \
  eslint-plugin-relay \
  eslint-plugin-prettier \
  eslint \
  babel-eslint \
  prettier-eslint
```

##### Node.js

```sh
npm install --save-dev \
  eslint-config-gemcook \
  eslint-config-fbjs \
  eslint-config-prettier \
  eslint-plugin-babel \
  eslint-plugin-import \
  eslint-plugin-flowtype \
  eslint-plugin-node \
  eslint-plugin-relay \
  eslint-plugin-prettier \
  eslint \
  babel-eslint \
  prettier-eslint
```


#### `yarn`

##### Web

```sh
yarn add --dev \
  eslint-config-gemcook \
  eslint-config-fbjs \
  eslint-config-prettier \
  eslint-plugin-babel \
  eslint-plugin-import \
  eslint-plugin-flowtype \
  eslint-plugin-jsx-a11y \
  eslint-plugin-react \
  eslint-plugin-relay \
  eslint-plugin-prettier \
  eslint \
  babel-eslint \
  prettier-eslint
```

##### Node.js

```sh
yarn add --dev \
  eslint-config-gemcook \
  eslint-config-fbjs \
  eslint-config-prettier \
  eslint-plugin-babel \
  eslint-plugin-import \
  eslint-plugin-flowtype \
  eslint-plugin-node \
  eslint-plugin-relay \
  eslint-plugin-prettier \
  eslint \
  babel-eslint \
  prettier-eslint
```

### Configure

Then create a file named .eslintrc with following contents in the root folder of your project:

Web

```js
{
  "extends": "gemcook"
}
```

Node.js

```js
{
  "extends": "gemcook/node"
}
```
