// @flow

import { type CompositionCmp } from './CompositionCmp';

const render: (any, CompositionCmp) => any = (h, { incrementCpt, state }) => <div>
    <h3>Compostion Component</h3>

    <div>
      <button vOn:click={ incrementCpt }>+</button> { state.cpt }
    </div>
  </div>;

export default render;
