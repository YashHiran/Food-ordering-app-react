import { createContext, useReducer } from "react"

const CartContext = createContext({
    items: [],
    addItem: (item) => {},
    removeItem: (id) => {}
});

const cartReducer = (state, action) => {

    if(action.type === 'ADD_ITEM')  {
        const updatedItems = [...state.items];
        const itemToAddIndex = updatedItems.findIndex((item) => {
            return item.id === action.item.id;
        });

        if(itemToAddIndex > -1) {
            let updatedItem = updatedItems[itemToAddIndex];
            updatedItem = {
                ...updatedItem,
                quantity: updatedItem.quantity + 1
            };
            updatedItems[itemToAddIndex] = updatedItem;
        } else {
            updatedItems.push({
            ...action.item,
            quantity: 1
            });
        }
        return {...state, items: updatedItems}
    }

    if(action.type === 'REMOVE_ITEM') {
        const updatedItems = [...state.items];
        const itemToRemoveIndex = updatedItems.findIndex((item) => {
            return item.id === action.id;
        });

       let updatedItem = updatedItems[itemToRemoveIndex];
        if(updatedItem.quantity > 1) {
            updatedItem = {
                ...updatedItem,
                quantity: updatedItem.quantity - 1
            }
            updatedItems[itemToRemoveIndex] = updatedItem;
        } else {
            updatedItems.splice(itemToRemoveIndex, 1);
        }
        return {...state, items: updatedItems};
    }
}

export const CartContextProvider = ({children}) => {
    const [cart, dispatchCartAction] = useReducer(cartReducer, {
        items: []
    });

    const addItem = (item) => {
        dispatchCartAction({
            type: 'ADD_ITEM',
            item
        });
    }

    const removeItem = (id) => {
        dispatchCartAction({
            type: 'REMOVE_ITEM',
            id
        });
    };

    const cartContext = {
        items: cart.items,
        addItem,
        removeItem
    };

    return <CartContext.Provider 
        value = { cartContext}> { children }
    </CartContext.Provider>
}

export { CartContext };
