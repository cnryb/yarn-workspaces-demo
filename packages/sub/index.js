import packageJson from "./package.json" assert { type: "json" }

export function sub(a,b) {
  return a - b
}

export function version() {
  return packageJson.version
}
