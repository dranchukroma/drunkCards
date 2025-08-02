import { createContext, useContext, useState, type ReactNode } from "react";

type NativeArrowContextType = {
    show: (onClick?: () => void) => void;
    hide: () => void;
    visible: boolean;
    onClick: (() => void);
}

const NativeArrowContext = createContext<NativeArrowContextType | null>(null);


type NativeArrowProviderProps = {
    children: ReactNode;
}

export function NativeArrowProvider({ children }: NativeArrowProviderProps) {
    const [visible, setVisible] = useState(false);
    const [onClick, setOnClick] = useState<(() => void)>(() => {});

    const show = (onClickHandler?: () => void) => {
        setVisible(true);
        setOnClick(() => onClickHandler || null);
    }

    const hide = () => {
        setVisible(false);
        setOnClick(() => {});
    }

    const value = {
        visible, onClick, show, hide
    }

    return (
        <NativeArrowContext.Provider value={value}>
            {children}
        </NativeArrowContext.Provider>
    )
}


export const useNativeArrow = () => {
    const context = useContext(NativeArrowContext);
    if (!context) {
        throw new Error('useNativeArrow must be used within a NativeArrowContext')
    }
    return context;
}