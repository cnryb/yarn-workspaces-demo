import packageJson from "./package.json" assert { type: "json" }

export function add(a, b) {
  return a + b
}

export function version() {
  return packageJson.version
}


// const temp = require("axios") 
// console.log(temp)