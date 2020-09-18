// @flow

import {
  defineComponent,
  type Component,
  type UseProps,
} from '@vue/composition-api';
import useCompositionCmp from './useCompositionCmp';
import useRender from './useRender';

// Component Properties
export type Props = {|
  initialCpt: number;
|};

// Composition arguments
export type CompositionCmp = UseProps<typeof useCompositionCmp, Props>;

const cmp: Component = defineComponent<Props>({
  props: {
    initialCpt: {
      type: Number,
      default() {
        return 100;
      },
    },
  },
  setup(props) {
    return useCompositionCmp(props);
  },
  render(h) {
    return useRender.call(this, h, this); // call fix v-model
  },
});

export default cmp;
