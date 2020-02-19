// @flow

import {
  reactive,
  ref,
  watch,
} from '@vue/composition-api';
import { type Props } from './CompositionCmp'; // eslint-disable-line import/no-cycle

const useCompositionCmp = (props: Props) => {
  const cpt = ref<number>(props.initialCpt);

  const state = reactive({
    cpt,
  });

  const incrementCpt = () => {
    cpt.value += 1;
  };

  // sync `initialCpt` and cpt
  watch(
    () => props.initialCpt,
    () => {
      cpt.value = props.initialCpt;
    },
  );

  // watch cpt changes
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

export default useCompositionCmp;
