// @flow

import {
  defineComponent,
  type Component,
} from '@vue/composition-api';
import useCompositionCmp from './useCompositionCmp';
import useRender from './useRender';

// Component Properties
export type Props = {|
  initialCpt: number;
|};

// Composition arguments
export type CompositionCmp = Component<typeof useCompositionCmp, Props>;

export default defineComponent<Props>({
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
    return useRender(h, this);
  },
});
