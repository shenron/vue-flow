// @flow

import { type CompositionCmp } from './CompositionCmp'; // eslint-disable-line import/no-cycle

const useRender: (any, CompositionCmp) => Object = (h, {
  incrementCpt,
  state,
  initialCpt,
}) => <div>
  <h3>Compostion Component</h3>

  <h2>Initial value { initialCpt }</h2>

  <div>
    <button vOn:click={ incrementCpt }>+</button> { state.cpt }
  </div>
</div>;

export default useRender;
