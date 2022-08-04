import { Dispatch } from "react";
import { createContext } from "react";
import { EntityScreen, Languaje } from "./entity/EntityScren";
import { ScreenAction } from "./ScreenReducer";

interface WrapperEntityScreen {
  Screen: EntityScreen;
  DispatchScreen: Dispatch<ScreenAction>;
}
export const ScreenContext = createContext<WrapperEntityScreen>(
  {} as WrapperEntityScreen
);
