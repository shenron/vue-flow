declare module '@vue/composition-api' {
  declare export function ref<T = any>(defaultValue?: T): { value: T };
  declare export function createComponent({|
    setup: () => Object,
  |}): any;
  declare export function reactive(Object): Object;
  declare export function watch(any, (any, any) => any): any;
  declare export default any;
}
