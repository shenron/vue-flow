// @flow

import { type CompositionCmp } from './CompositionCmp'; // eslint-disable-line import/no-cycle
import style from './CompositionCmp.scss';

type UseRender = (any, CompositionCmp) => Object;

const useRender: UseRender = (h, props) => {
  const { incrementCpt, state, initialCpt } = props;

  return (
    <div class={style.compositionCmp}>
      <h3>Composition Component</h3>

      <h2>Initial value {initialCpt}</h2>

      <div>
        <button vOn:click={incrementCpt}>+</button>
        {state.cpt}
      </div>
    </div>
  );
};

export default useRender;
