import { cn } from './cn';

it('should merge tailwind classes', () => {
  expect(cn('bg-red-300 text-red-500', 'text-red-600')).toBe(
    'bg-red-300 text-red-600'
  );
});
