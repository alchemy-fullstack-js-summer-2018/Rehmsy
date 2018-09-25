import { COLORS_LOAD, COLORS_ADD, SELECT_COLOR } from './reducers';

const colors = ['pink', 'blue', 'purple'];

export const loadColors = () => {
  return {
    type: COLORS_LOAD,
    payload: colors
  };
};

export const selectColor = color => {
  return {
    type: SELECT_COLOR,
    payload: color
  };
};

export const addColor = color => {
  return {
    type: COLORS_ADD,
    payload: color
  };
};