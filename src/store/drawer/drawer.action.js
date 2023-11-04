import { createAction } from "../../utils/reducer/reducer.utils";
import DRAWER_ACTION_TYPE from "./drawer.type";

export const setIsDrawerOpen = (drawer) =>
  createAction(DRAWER_ACTION_TYPE.IS_DRAWER_OPEN, drawer);
