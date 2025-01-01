import { createContext, useState } from 'react';

export const SideBarContext = createContext();

export const SidebarProvider = ({ children }) => {
    const [isOpen, setIsopen] = useState(false);
    return (
        <SideBarContext.Provider value={{ isOpen, setIsopen }}>
            {children}
        </SideBarContext.Provider>
    );
};
