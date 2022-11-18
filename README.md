# yarn-workspaces-demo

yarn plugin import workspace-tools

yarn workspaces foreach run test

如何判断引用包的版本？  
以下方法不可行
import temp from "axios/package.json" assert { type: "json" };
const temp = require("axios") 