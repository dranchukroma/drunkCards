import { createContext, useContext, useState, type ReactNode } from "react";

type NativeArrowContextType = {
    show: (onClick?: () => void) => void;
    hide: () => void;
    visible: boolean;
    onClick: (() => void) | null;
}

const NativeArrowContext = createContext<NativeArrowContextType | null>(null);


type NativeArrowProviderProps = {
    children: ReactNode;
}

export function NativeArrowProvider({ children }: NativeArrowProviderProps) {
    const [visible, setVisible] = useState(true);
    const [onClick, setOnClick] = useState<(() => void) | null>(null);

    const show = (onClickHandler?: () => void) => {
        setVisible(true);
        setOnClick(() => onClickHandler || null);
    }

    const hide = () => {
        setVisible(false);
        setOnClick(null);
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