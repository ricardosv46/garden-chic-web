import { useReducer } from "react";
import { ScreenContext } from "./ScreenContext";
import { SCREEN_DATA } from "./data/ScreenData";
import { ScreenReducer } from "./ScreenReducer";
interface IProps {
  children: JSX.Element | JSX.Element[];
}
export const ScreenProvider = ({ children }: IProps) => {
  const [Screen, DispatchScreen] = useReducer(ScreenReducer, SCREEN_DATA);
  return (
    <ScreenContext.Provider value={{ Screen, DispatchScreen }}>
      {children}
    </ScreenContext.Provider>
  );
};
