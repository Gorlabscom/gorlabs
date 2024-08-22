import { renderHook, act } from '@testing-library/react';
import { useTheme } from './use-theme';

test('should change current theme', () => {
  const { result } = renderHook(() => useTheme());

  act(() => {
    result.current.toggle();
  });

  expect(result.current.theme).toBe('light');

  act(() => {
    result.current.toggle();
  });

  expect(result.current.theme).toBe('dark');
});
