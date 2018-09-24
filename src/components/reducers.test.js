import { COLORS_LOAD, COLORS_ADD, SELECT_COLOR, colors, selectedColor  } from './reducers';

describe('color reducers', () => {

  describe('my colors', () => {
    const color = ['blue', 'purple', 'pink'];

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

  describe('selected color', () => {
    it('defaults to pink', () => {
      const state = selectedColor('pink', {});
      expect(state).toBe('pink');
    });

    it('currently selected color', () => {
      const color = 'purple';
      const state = selectedColor('', {
        type: SELECT_COLOR,
        payload: color
      });
      expect(state).toBe(color);
    });

  });
});