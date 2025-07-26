import checkHealth from '../basic';

test('health hight', () => {
  const result = checkHealth({name: 'Superman', health: 80});

  expect(result).toBe('healthy');
});

test('health medium', () => {
  const result = checkHealth({name: 'Alex Popovich', health: 50});

  expect(result).toBe('wounded');
});

test('health low', () => {
  const result = checkHealth({name: 'Barmaley', health: 14});

  expect(result).toBe('critical');
});
