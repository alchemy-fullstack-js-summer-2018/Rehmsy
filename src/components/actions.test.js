import { COLORS_LOAD, COLORS_ADD, SELECT_COLOR } from './reducers';
import { loadColors, selectColor, addColor } from './actions';

describe('color actions', () => {

  it('action loads colors', () => {
    const colors = ['pink', 'blue', 'purple'];
    const { type, payload } = loadColors(colors);
    expect(type).toBe(COLORS_LOAD);
    expect(payload).toEqual(colors); 
  });

  it('selects color', () => {
    const color = 'steelblue';
    const { type, payload } = selectColor(color);
    expect(type).toBe(SELECT_COLOR);
    expect(payload).toBe(color);
  });

  it('adds color', () => {
    const color = 'purple';
    const { type, payload } = addColor(color);
    expect(type).toBe(COLORS_ADD);
    expect(payload).toEqual(color);
  });
});