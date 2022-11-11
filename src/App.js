import React, { useState, useEffect } from "react";
import "./styles/scss/styles.scss";
import commerce from "./lib/commerce";
// import  Commerce  from './lib/commerce';
import ProductsList from "./components/ProductsList";
import CartNav from "./components/CartNav";
import Hero from "./components/Hero";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


function App() {
  const [loading, setLoading] = useState(true)
  const [cart, setCart] = useState({});
  const [products, setProducts] = useState([]);
  const [merchant, setMerchant] = useState({})

  const fetchProducts = async () => {
    const { data } = await commerce.products.list()

    setProducts(data)
    setLoading(false)
  }

  const fetchCart = async () => {
    // commerce.cart.retrieve().then((cart) => {
    //   setCart(cart);
    // }).catch((error) => {
    //   console.log('There was an error fetching the cart', error);
    // });
    const res = await commerce.cart.retrieve()

    setCart(res)
  }

  const handleAddToCart = (productId, quantity) => {
    commerce.cart.add(productId, quantity)
   .then((item) => {
      setCart(item.cart);
    }).catch((error) => {
      console.error('There was an error adding the item to the cart', error);
    });
    // const item =  commerce.cart.add(productId, quantity)
    // console.log(item)
    // setCart(item.cart);
  }
  const handleUpdateCartQty = (lineItemId, quantity) => {
    commerce.cart.update(lineItemId, { quantity }).then((resp) => {
      setCart(resp.cart);
    }).catch((error) => {
      console.log('There was an error updating the cart items', error);
    });
  }

  const fetchMerchantDetails = () => {
    commerce.merchants.about()
    .then((merchant) => 
      setMerchant(merchant)
    )
    .catch((error) => {
      console.log('There was an error Getting merchant details', error);
    })
  }

  const handleOnRemoveFromCart = (lineItemId) => {
    commerce.cart.remove(lineItemId)
    .then((res) => {
      setCart(res.cart)
    })
    .catch((err) => {
      console.log('There was an error removing the item from the cart', err)
    })
  }

  const handleEmptyCart = () => {
    commerce.cart.empty()
    .then((res) => {
      setCart(res.cart)
    })
    .catch((err) => {
      console.log(err)
    })
  }
  useEffect(() => {
    fetchProducts();
    fetchCart();
    fetchMerchantDetails()
  }, []);

  
  return (
    <div className="App">
      {
        loading 
        ?
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      :
      <>   
        <CartNav 
          cart={cart} 
          onUpdateCartQty={handleUpdateCartQty} 
          onRemoveFromCart={handleOnRemoveFromCart} 
          onEmptyCart = {handleEmptyCart} 
        />
        <Hero merchant={merchant} />
        <ProductsList products={products} onAddToCart={handleAddToCart} /></>
      }
   
    </div>
  );
}

export default App;
