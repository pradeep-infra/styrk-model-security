import * as React from "react";
import { useState } from "react";

type ContextProviderProps = {
  children: React.ReactNode;
};

export type CommonContextType = {
  themeType: string;
  setThemeType: (value: string) => void;
};

export const CommonContext = React.createContext<CommonContextType | null>(
  null
);

const CommonContextProvider = ({ children }: ContextProviderProps) => {
  const [themeType, setThemeTypeState] = useState<string>("light");

  const setThemeType = (value: string) => {
    if (value) {
        localStorage.setItem('themeType',value);
      setThemeTypeState(value);
    }
  };

  return (
    <CommonContext.Provider
      value={{
        themeType,
        setThemeType,
      }}
    >
      {children}
    </CommonContext.Provider>
  );
};

export default CommonContextProvider;
