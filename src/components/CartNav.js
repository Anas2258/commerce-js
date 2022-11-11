import React, {useState} from 'react';
import Cart from './Cart';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from  '@mui/material'
import { ShoppingCart} from '@mui/icons-material'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingBag, faTimes } from '@fortawesome/free-solid-svg-icons'

// library.add(faShoppingBag, faTimes);

const CartNav = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
    const [isCartVisible, setCartVisible] = useState(false);

    return (
        <div>
            <AppBar position='fixed' sx={{ backgroundColor: '#fff' }} onClick={() => setCartVisible(!isCartVisible)}>
                <Toolbar>
                    <Typography variant='h6' color='#292B83'>
                        <img src='../../../../public/img/logo.png' alt="Logo" />
                    </Typography>
                {!isCartVisible ? (
                <IconButton sx={{ marginLeft: 'auto', color:"#292B83"}}  >
                    {/* {cart !== null ? <span>{cart.total_items}</span> : ''} */}
                    <Badge badgeContent={cart.total_item || 0} color="primary">
                        <ShoppingCart sx={{ fontSize: 32 }} />
                    </Badge> 
                </IconButton>
                ) : (
                    <IconButton sx={{ marginLeft: 'auto' }}>
                        <ShoppingCart size="1x" icon="times" color="white"/>
                    </IconButton>
                )}
                </Toolbar>
            </AppBar>
            {isCartVisible &&
                <Cart
                    cart={cart}
                    onUpdateCartQty={onUpdateCartQty}
                    onRemoveFromCart={onRemoveFromCart}
                    onEmptyCart={onEmptyCart}
                />
            }  
        </div>
    )
}

export default CartNav;

CartNav.propTypes = {
    cart: PropTypes.object,
    onUpdateCartQty: PropTypes.func,
    onRemoveFromCart: PropTypes.func,
    onEmptyCart: PropTypes.func,
};