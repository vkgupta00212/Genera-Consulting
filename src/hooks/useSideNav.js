import { useContext, createContext } from 'react';

const SideNavContext = createContext();

export const useSideNav = () => {
    const context = useContext(SideNavContext);
    if (!context) {
        throw new Error('useSideNav must be used within a SideNavProvider');
    }
    return context;
};

export const SideNavProvider = SideNavContext.Provider; 