_Node JS library with Mobile Legends API._

# Installation

> NPM
```sh
npm i -s karriejs
```
> YARN
```sh
yarn add karriejs
```

# Usage

```javascript
const Karrie = require('karriejs');

Karrie.Heroes.getAll()
	.then(res => console.log(res));
```
