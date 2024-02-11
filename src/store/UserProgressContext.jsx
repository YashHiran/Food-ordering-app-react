import { createContext, useState } from "react";

const UserProgressContext = createContext({
    progress: '',
    setCartOpen: ()=> {},
    setCartClosed: ()=> {},
    setCheckoutOpen: ()=> {},
    setCheckoutClosed: ()=> {}
});

export function UserProgressContextProvider({children}) {

    const [progress, setProgress] = useState('');

    const setCartOpen = () => setProgress('cart');
    const setCartClosed = () => setProgress('');
    const setCheckoutOpen = () => setProgress('checkout');
    const setCheckoutClosed = () => setProgress('');

    const userProgressContext = {
        progress,
        setCartOpen,
        setCartClosed,
        setCheckoutOpen,
        setCheckoutClosed
    }
    return (
        <UserProgressContext.Provider value ={ userProgressContext }> 
        {children}
        </UserProgressContext.Provider>
    )
}

export { UserProgressContext };
