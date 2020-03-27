// @flow

import value from '@/compositions/getRefValue';
import { type CompositionCmp } from './CompositionCmp'; // eslint-disable-line import/no-cycle
import style from './CompositionCmp.scss';

export default function (h: any, props: CompositionCmp) {
  const { incrementCpt, cpt, initialCpt } = value(props);

  return (
    <div class={style.compositionCmp}>
      <h3>Composition Component</h3>

      <h2>Initial value {initialCpt}</h2>

      <div>
        <button vOn:click={incrementCpt}>+</button>
        {cpt}
      </div>
    </div>
  );
}
