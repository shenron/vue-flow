// @flow

import {
  type Ref,
  type Computed,
} from '@vue/composition-api';

type ExtractPropTypes = <T> (a: Ref<T> | Computed<T> | T) => T;

// used by JSX to return ref value
// (JSX is called in render, Ref<mixed>.value does not exist. Only the value)
export default function value<O: {[key: string]: Function}>(o: O): $ObjMap<O, ExtractPropTypes> {
  return o;
}
