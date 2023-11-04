import DRAWER_ACTION_TYPE from "./drawer.type";

export const drawerReducer = (state = false, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case DRAWER_ACTION_TYPE.IS_DRAWER_OPEN:
      return payload;
    default:
      return state;
  }
};
