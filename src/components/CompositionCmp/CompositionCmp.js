// @flow

import {
  createComponent,
  reactive,
  ref,
  watch,
} from '@vue/composition-api';

const useButton = () => {
  const cpt = ref<number>(0);

  const state = reactive({
    cpt,
  });

  const incrementCpt = () => {
    cpt.value += 1;
  };

  watch(cpt, (newValue: number) => {
    console.log(`cpt changed: ${newValue}`);
  });

  return {
    state,
    incrementCpt,
  };
};

export default createComponent({
  setup() {
    return useButton();
  },
});
