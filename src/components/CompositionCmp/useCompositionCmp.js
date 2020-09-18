// @flow

import {
  ref,
  computed,
  watch,
} from '@vue/composition-api';
import { type Props } from './CompositionCmp'; // eslint-disable-line import/no-cycle

export default function (props: Props): any {
  const cpt = ref<number>(props.initialCpt);

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
    cpt: computed<number>(() => cpt.value),
    incrementCpt,
  };
}
