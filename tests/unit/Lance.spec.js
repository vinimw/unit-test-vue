import Lance from '@/components/Lance';
import { mount } from '@vue/test-utils';

test('Value cannot be negative', () => {
  const wrapper = mount(Lance);
  const input = wrapper.find('input');
  input.setValue(-100);
  wrapper.trigger('submit');
  const bidEmmited = wrapper.emitted('novo-lance');
  expect(bidEmmited).toBeUndefined();
});

test('Value positive submitted', () => {
  const wrapper = mount(Lance);
  const input = wrapper.find('input');
  input.setValue(100);
  wrapper.trigger('submit');
  const bidEmmited = wrapper.emitted('novo-lance');
  expect(bidEmmited).toHaveLength(1);
});

test('Value response equal sended', () => {
  const valueSend = 100;
  const wrapper = mount(Lance);
  const input = wrapper.find('input');
  input.setValue(valueSend);
  wrapper.trigger('submit');
  const bidEmmited = wrapper.emitted('novo-lance');
  const valueReturned = parseInt(bidEmmited[0][0]);
  expect(valueReturned).toBe(valueSend);
});
