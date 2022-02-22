module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js

.${componentName.toLowerCase()} {

}
`,
  extension: `.scss`,
});
