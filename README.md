# Use Flow with project generated by vue-cli@3

- babel: `flow/jsx` added in [presets](./babel.config.js)
- eslint: display errors with [`flowtype`/`flowtype-errors`](./.eslintrc.js)
- `@vue/composition-api` used to create component with [hook style](./src/components/CompositionCmp/CompositionCmp.js)
- `vue-property-decorator` used to create component with [class style](./src/components/HelloWorld/HelloWorld.js)
- `jsx` has been used to be able to [check types in "html"](./src/components/CompositionCmp/useRender.js)
- [scoped style in](src/components/CompositionCmp/useRender.js) `jsx`

## TC39 Specifying
- https://github.com/tc39/proposal-optional-chaining
- https://github.com/tc39/proposal-decorators

### Related projects: 
- https://github.com/shenron/babel-node-starter
- https://github.com/shenron/flow-node-boilerplate
