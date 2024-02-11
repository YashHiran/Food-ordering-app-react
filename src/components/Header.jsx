import appLogo from '../../public/logo.jpg'
import { Button } from '../UI/Button'
import { useContext } from 'react'
import { CartContext } from '../store/CartContext'
import { UserProgressContext } from '../store/UserProgressContext'

export default function Header() {

    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const totalItemsInCart = cartCtx.items.reduce((total, item) => {
        return total + item.quantity;
    }, 0);

    const cartClickHandler = () => {
        userProgressCtx.setCartOpen();
    };

    return <header id="main-header">
        <div id="title">
            <img src={appLogo} alt="App Logo" />
            <h1>ReactFood</h1>
        </div>
        <nav>
            <Button textOnly onClick = { cartClickHandler } >Cart ({totalItemsInCart})</Button>
        </nav>
    </header>
}
