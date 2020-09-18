/* eslint-disable no-unused-vars */
import { VNode } from 'vue';
import { ComponentRenderProxy } from '@vue/composition-api';
/* eslint-disabled */

// eslint-disable-next-line max-len
// eslint-disable-next-line @typescript-eslint/no-namespace,@typescript-eslint/no-unused-vars,no-unused-vars
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends ComponentRenderProxy {}
    interface ElementAttributesProperty {
      $props: any; // specify the property name to use
    }
    interface IntrinsicElements {
      [elem: string]: any
    }
  }
}
