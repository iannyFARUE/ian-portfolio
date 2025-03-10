import { createContext, useContext, useReducer, useEffect } from "react";
import Theme from "../theme/Theme";
import themeReducer from "./reducers/themeReducer";

const ThemeContext = createContext();

const initialState = JSON.parse(localStorage.getItem("themeSettings")) || {
  primary: "color-1",
  background: "bg-1",
};

export const ThemeProvider = ({ children }) => {
  const [themeState, dispatchTheme] = useReducer(themeReducer, initialState);

  const themeHandler = (buttonClassName) => {
    dispatchTheme({ type: buttonClassName });
  };

  useEffect(() => {
    localStorage.setItem("themeSettings", JSON.stringify(themeState));
  }, [themeState.primary, themeState.background]);

  return (
    <ThemeContext.Provider value={{ themeState, themeHandler }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
