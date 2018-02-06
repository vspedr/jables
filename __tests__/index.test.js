import sum from '../src/index';

describe('example test', () => {
  it('should sum two numbers', () => {
    expect(sum(2, 3)).toBe(5);
  });
});
