import { createContext, ReactNode, useEffect, useState } from "react";
import { comingThisYear as comingThisYearData } from "../data/comingThisYear";

type Props = {
  children: ReactNode;
};

export const UtilitiesContext = createContext<any>("Hello world");
export const UtilitiesContextProvider = ({ children }: Props) => {
  const [comingThisYear, setComingThisYear] = useState(comingThisYearData);
  const [activeSlide, setActiveSlide] = useState({});

  useEffect(() => {
    setActiveSlide(comingThisYear[0]);
  }, [comingThisYear]);

  const changeActiveSlide = (id: number) => {
    setActiveSlide(comingThisYear[id]);
  };

  const changeComingThisYear = (data: any) => {
    setComingThisYear(data);
  };

  return (
    <UtilitiesContext.Provider
      value={{
        activeSlide,
        comingThisYear,
        changeActiveSlide,
        changeComingThisYear,
      }}
    >
      {children}
    </UtilitiesContext.Provider>
  );
};
