import React, { createContext, ReactNode, useState } from "react";

type ClikedIconProviderProps = {
  children: ReactNode;
};

type StateBtn = {
  clickedIcon: boolean;
  setClickedIcon: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ClickedIconContext = createContext<StateBtn | null>(null);

const ClickedIconProvider = (props: ClikedIconProviderProps) => {
  const { children } = props;
  const [clickedIcon, setClickedIcon] = useState<boolean>(false);

  return (
    <ClickedIconContext.Provider value={{ clickedIcon, setClickedIcon }}>
      {children}
    </ClickedIconContext.Provider>
  );
};

export default ClickedIconProvider;
