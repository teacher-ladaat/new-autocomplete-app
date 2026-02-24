import { Item } from './item';

describe('Item', () => {
  it('should create an instance with title and default id', () => {
    const item = new Item('title');
    expect(item.title).toBe('title');
    expect(typeof item.id).toBe('string');
    expect(item.id).toContain('-');
    expect(item.id).not.toBe('');
  });

  it('should create an instance with title and id', () => {
    const item = new Item('title', 10);
    expect(item.title).toBe('title');
    expect(typeof item.id).toBe('number');
    expect(item.id).toBe(10);
  });
});
