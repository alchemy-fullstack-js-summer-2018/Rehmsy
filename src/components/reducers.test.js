import { COLORS_LOAD, COLORS_ADD,  colors  } from './reducers';

describe('color reducers', () => {

  describe('my colors', () => {
    const color = ['blue', 'purple'];

    it('defaults to empty array', () => {
      const state = colors(undefined, {});
      expect(state).toEqual([]);
    });
    
    it('adds a color', () => {
      const state = colors([], {
        type: COLORS_ADD,
        payload: 'purple'
      });
      expect(state).toEqual(['purple']);
    });

    it('loads color', () => {
      const state = colors([], {
        type: COLORS_LOAD,
        payload: color
      });
      expect(state).toEqual(color);
    });
  });
});