// @flow

// used to declare a Route in the Router
type RouteDeclaration = $Shape<{|
  name: string,
  meta?: Object,
|}>;

// instance of a route
type $RouteInstance = {|
  ...RouteDeclaration,
  fullPath: string,
  matched: {|
    some($RouteInstance => boolean): boolean,
  |},
|};

type RouterArgs = {|
  mode: 'history',
  base?: string,
  routes: Array<Object>,
  scrollBehavior?: () => {| x: number, y: number |};
|};

declare module 'vue-router' {
  declare export type Route = $RouteInstance;

  declare class Router {
    constructor(args: RouterArgs): Router;

    currentRoute: $RouteInstance;

    push(RouteDeclaration): void;

    beforeEach((to: $RouteInstance, from: $RouteInstance, next: Function) => any): void,

    afterEach((to: $RouteInstance, from: $RouteInstance, next: Function) => any): void,
  }

  declare export default typeof Router;
}
