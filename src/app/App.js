// @flow

import { defineComponent } from '@vue/composition-api';
import useRender from './useRender';

export default defineComponent({
  render(h) {
    return useRender(h);
  },
});
