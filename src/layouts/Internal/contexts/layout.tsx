import { createContext, useState } from "react";

export type TLayoutContext = {
  isGeneratingContent: boolean;
  setIsGeneratingContent: (value: boolean) => void;
};

export const LayoutContext = createContext<Partial<TLayoutContext>>({});

export const LayoutProvider = (props: React.PropsWithChildren) => {
  const [isGeneratingContent, setIsGeneratingContent] = useState(false);
  return (
    <LayoutContext.Provider
      value={{
        isGeneratingContent,
        setIsGeneratingContent,
      }}
    >
      {props.children}
    </LayoutContext.Provider>
  );
};
