module.exports = {
  "mode": "file",
  "out": "docs/api",
  "theme": "default",
  "ignoreCompilerErrors": "true",
  "experimentalDecorators": "true",
  "emitDecoratorMetadata": "true",
  "target": "ES6",
  "moduleResolution": "node",
  "preserveConstEnums": "true",
  "stripInternal": "true",
  "suppressExcessPropertyErrors": "true",
  "suppressImplicitAnyIndexErrors": "true",
  "externalPattern": "**/node_modules/**",
  "exclude": "**/__tests__/**",
  "module": "commonjs",
  "readme": "./README.md",
  "tsconfig": "./tsconfig.json"
}
