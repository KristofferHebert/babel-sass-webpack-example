require("./Main.sass")

import Lib from './Lib.js'
import PromiseExample from './PromiseExample.js'

var promise = new PromiseExample
promise.timeout(3000).then(() => {
	console.log("3000 milliseconds spent")
})

Array.from(document.querySelectorAll("*"))