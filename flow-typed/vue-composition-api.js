// @flow

import type Vue from 'vue';

type ObjType = { [id: string]: any }; // eslint-disable-line no-unused-vars

type VNode = {|
  data: {
    style: Object,
    class?: { [id: string]: boolean },
    directives?: Array<{|
      name: string,
      value: any,
    |}>,
    attrs: Object,
  },
  tag: string,
|};

type FunctionalRenderContext = {|
  scopedSlots: {
    [id: string]: () => Array<VNode>,
  },
  props: {
    [id: string]: any,
  },
  listeners: Array<HTMLElement>,
  children: Array<HTMLElement>,
  data: Object,
  slots: Function,
|}

declare module '@vue/composition-api' {
  declare export type Ref<T> = {| value: T |};
  declare export type Listeners = { [id: string]: Function };
  declare export type Emit = (string, ...any) => void;
  declare export type Slots = { [id: string]: Function };
  declare export type Computed<T> = $ReadOnly<Ref<T>>;
  declare export type Render = [(string, ObjType) => Vue, FunctionalRenderContext];
  declare export type Context = {|
    root: Vue,
    emit: Emit,
    slots: Slots,
    listeners: Listeners,
    $router: {
    },
  |};

  declare export function provide(symbol, ?Ref<any>): void;
  declare export function inject<T>(symbol, Ref<T>): Ref<T>;
  declare export function ref<T>(defaultValue?: ?T): Ref<T>;
  declare export function defineComponent({|
    functional?: boolean,
    render?: (...Render) => Vue,
    name?: string,
    inheritAttrs?: boolean,
    // custom attribute to build route before launch of webpack
    route?: {|
      path: string,
      name: string,
    |},
    components?: {[id: string]: Vue},
    directives?: {[id: string]: Vue},
    props?: $ReadOnly<ObjType>,
    setup?: (
      Object,
      Context,
    ) => { [id: string]: mixed } | void,
  |}): any;
  declare export function reactive(ObjType): ObjType;

  // it's possible to have one parameter to listen all changes
  declare export function watch<T = mixed>(
    () => T, ?(T, T) => void | Promise<any>, ?{|
      deep?: boolean,
      immediate?: boolean,
    |}
  ): any;

  declare export function onBeforeMount(Function): void | Promise<any>;
  declare export function onBeforeUnmount(Function): void | Promise<any>;
  declare export function onUnmounted(Function): void | Promise<any>;
  declare export function onMounted(Function): void | Promise<any>;
  declare export function computed<T = mixed>(() => T): Computed<T>;
  declare export function isRef(any): boolean;
  declare export function onErrorCaptured(Function): boolean;
  declare export default any;
}
