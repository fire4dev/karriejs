_Node JS library with Mobile Legends API._

> ## Installation
####
```sh
	npm i -s karriejs
```
####

> ## Usage
<p>
<details><summary>Example of getting match information from 100 matches at once</summary>
####
```javascript
	const Karrie = require('karriejs');

	Karrie.Heroes.getAll()
		.then(res => console.log(res));
```
</p>
</details>
####
