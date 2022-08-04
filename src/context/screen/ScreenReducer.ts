import { EntityScreen, Languaje } from "./entity/EntityScren";
import { Reducer } from "react";
export type ScreenAction =
  | { type: "ChangeTittle"; payload: string }
  | { type: "ChangeDark"; payload: boolean }
  | { type: "ChangeLanguaje"; payload: Languaje }
  | { type: "ChangeLoadingPage"; payload: boolean }
  | { type: "ChangeScreen"; payload: EntityScreen };

export const ScreenReducer: Reducer<EntityScreen, ScreenAction> = (
  state,
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case "ChangeTittle":
      return { ...state, tittle: payload };
      break;
    case "ChangeDark":
      return { ...state, isDark: payload };
      break;
    case "ChangeLanguaje":
      return { ...state, languaje: payload };
      break;
    case "ChangeLoadingPage":
      return { ...state, loadingPage: payload };
      break;
    case "ChangeScreen":
      return { ...payload };
      break;
    default:
      return state;
  }
};
