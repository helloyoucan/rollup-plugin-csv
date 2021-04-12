how to use?
```js
/**
 * @type {import('vite').UserConfig}
 */
import loadCsv from 'rollup-plugin-csv';
 const config = {
    plugins:[
        loadCsv()
    ]
  }
  export default config

```
before:
```js
'1,2,3,4\n\r1,2,3,4\n\r'
```
after:
```js
[
  ["1","2","3","4"],
  ["1","2","3","4"]
]
```