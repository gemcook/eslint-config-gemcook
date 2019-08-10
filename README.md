# eslint-config-gemcook

- [Getting Start](#getting-start)
	* [Install](#install)
		+ [If your project is Web on Plain JS](#if-your-project-is-web-on-plain-js)
		+ [If your project is Web on TypeScript](#if-your-project-is-web-on-typescript)
		+ [If your project is Node on Plain JS](#if-your-project-is-node-on-plain-js)
		+ [If your project is Node on TypeScript](#if-your-project-is-node-on-typescript)
- [Usage](#usage)
	* [Web on Plain JS](#web-on-plain-js)
	* [Web on TypeScript](#web-on-typescript)
	* [Web on Plain JS](#web-on-plain-js-1)
	* [Web on TypeScript](#web-on-typescript-1)
- [License](#license)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>

## Getting Start

### Install

#### If your project is Web on Plain JS

```Shell
yarn add --dev \
	eslint-config-gemcook \
	eslint \
	eslint-config-prettier \
	eslint-plugin-prettier \
	eslint-plugin-jest \
	eslint-plugin-react \
	eslint-plugin-react-hooks
```

#### If your project is Web on TypeScript

```Shell
yarn add --dev \
	eslint-config-gemcook \
	eslint \
	eslint-config-prettier \
	eslint-plugin-prettier \
	eslint-plugin-jest \
	eslint-plugin-react \
	eslint-plugin-react-hooks \
	@typescript-eslint/eslint-plugin \
	@typescript-eslint/parser
```

#### If your project is Node on Plain JS

```Shell
yarn add --dev \
	eslint-config-gemcook \
	eslint \
	eslint-config-prettier \
	eslint-plugin-prettier \
	eslint-plugin-jest \
	eslint-plugin-node \
	eslint-plugin-react \
	eslint-plugin-react-hooks
```

#### If your project is Node on TypeScript

```Shell
yarn add --dev \
	eslint-config-gemcook \
	eslint \
	eslint-config-prettier \
	eslint-plugin-prettier \
	eslint-plugin-jest \
	eslint-plugin-node \
	eslint-plugin-react \
	eslint-plugin-react-hooks \
	@typescript-eslint/eslint-plugin \
	@typescript-eslint/parser
```

## Usage

Set `.eslintrc.json`

### Web on Plain JS

```JSON
{
  "extends": "gemcook"
}
```

### Web on TypeScript

```JSON
{
  "extends": "gemcook/ts"
}
```

### Web on Plain JS

```JSON
{
  "extends": "gemcook/node"
}
```

### Web on TypeScript

```JSON
{
  "extends": "gemcook/node-ts"
}
```

## License

[MIT](https://github.com/gemcook/eslint-config-gemcook/blob/master/LICENSE)
