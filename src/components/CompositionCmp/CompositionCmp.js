// @flow

import {
  defineComponent,
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

  watch(
    () => cpt.value,
    (newValue: number) => {
      console.log(`cpt changed: ${newValue}`);
    },
  );

  return {
    state,
    incrementCpt,
  };
};

export default defineComponent({
  setup() {
    return useButton();
  },
});
