import { LoadingStore } from './mobx';

test('test Loading', () => {
  const store = new LoadingStore();

  expect(store.isLoading).toBe(false);

  store.start();

  expect(store.isLoading).toBe(true);
});
