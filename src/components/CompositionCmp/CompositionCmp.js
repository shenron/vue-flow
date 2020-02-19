// @flow

import { defineComponent } from '@vue/composition-api';
import renderHelper from '@/renderHelper';
import useCompositionCmp from './useCompositionCmp';
import useRender from './useRender';

export type Props = {|
  initialCpt: number;
|};

export type CompositionCmp = {|
  ...ExtractReturn<typeof useCompositionCmp>,
  ...Props,
|};

export default defineComponent({
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
    return useRender(h, renderHelper<CompositionCmp>(this));
  },
});
