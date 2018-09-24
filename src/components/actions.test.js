import { COLORS_LOAD } from './reducers';
// COLORS_ADD, SELECT_COLOR
import { loadColors } from './actions';
// addColor, selectColor
describe('color actions', () => {

  it('action loads colors', () => {
    const colors = ['pink', 'blue', 'purple'];
    const { type, payload } = loadColors(colors);
    expect(type).toBe(COLORS_LOAD);
    expect(payload).toEqual(colors);
    
  });
});