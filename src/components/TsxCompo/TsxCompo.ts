import { defineComponent } from '@vue/composition-api';
import useRender from './useRender';

export default defineComponent({
  // eslint-disable-next-line no-unused-vars
  render(h) {
    return useRender(h);
  },
});
