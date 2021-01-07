import { shallowMount } from '@vue/test-utils';
import TsxCompo from '@/components/TsxCompo/TsxCompo';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(TsxCompo, { });
    expect(wrapper).toBeTruthy();
  });
});
