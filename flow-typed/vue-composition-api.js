type ObjType = { [id: string]: any }; // eslint-disable-line no-unused-vars
declare module '@vue/composition-api' {
  declare export function ref<T = any>(defaultValue?: T): { value: T };
  declare export function createComponent({|
    setup: () => ObjType,
  |}): any;
  declare export function reactive(ObjType): ObjType;
  declare export function watch(any, (any, any) => any): any;
  declare export default any;
}
