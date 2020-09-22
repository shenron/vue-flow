import { shallowMount } from '@vue/test-utils';
import App from '@/app/App';

describe('App.ts', () => {
  it('renders image should be inserted', () => {
    const wrapper = shallowMount(App);
    expect(wrapper.find('img')).not.toBe(null);
  });
});
