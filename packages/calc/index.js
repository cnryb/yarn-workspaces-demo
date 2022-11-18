import { add, version as v1 } from "@cnryb/add"
import { sub, version as v2 } from "@cnryb/sub"

console.log(add(1, 2))
console.log('add version',v1())

console.log(sub(1, 2))

console.log('sub version',v2())
