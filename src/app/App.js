// @flow

import {
  defineComponent,
  type Component,
} from '@vue/composition-api';
import useRender from './useRender';

const cmp: Component = defineComponent({
  render(h) {
    return useRender(h);
  },
});

export default cmp;
