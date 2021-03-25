import { useState } from 'react';

const Order = ({ orderpagecontent }) => {

    const [cartItems, setCartItems] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);

    const addItem = (item) => {
        if (cartItems.includes(item)) {
            return;
        }
        setCartTotal(cartTotal + item.price);
        setCartItems([...cartItems, item]);
    }

    const removeItem = (item) => {
        setCartTotal(cartTotal - item.price);
        setCartItems(cartItems.filter(list => list !== item));
    }
    
    const orderlist = orderpagecontent.map(list => {
        return (
            <div key={list.id} className="list-overlay" onClick={() => addItem(list)}>
                <h5>{list.title} - ${list.price}</h5>
            </div>
        )
    });

    const cartlist = cartItems.map(cartitem => {
        return (
            <div key={cartitem.id} className="mx-auto row mt-2">
                <div className="col-10 cart-overlay">
                    <h5>{cartitem.title}</h5>
                </div>  
                <div className="col-1 offset-1 item-select mx-auto my-auto" onClick={() => removeItem(cartitem)}> 
                    <i className="fa fa-times-circle fa-lg"></i>
                </div>           
            </div>
        )
    })

    const checkout = () => {
        if (cartTotal === 0) {
            alert(`You Have Not Selected Any Items For Purchase.`);
            return;
        }
        alert(`Your purchase total is: $${cartTotal}`);
        setCartItems([]);
        setCartTotal(0);
    }

    const OrderTotal = () => {
        return(
            <h4>Price Total: ${cartTotal}</h4>
        )
    }
    
    const OrderSelected = () => {
        return (
            <>
                <h5>{cartlist}</h5>
                <div className="mt-5">
                    <OrderTotal />
                </div>
            </>
        )
    }

    const OrderLayout = () => {
        return (
            <div className="row section-overlay pt-4 pb-4 ml-5 mr-5">
                <div className="col">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <h1>Select From Our Products For Pricing</h1>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className=" col-10 col-lg-4 order-overlay mx-auto pt-3">
                            <h2>Click Items Below To Add To Cart</h2>
                            <div className="mt-5">
                                {orderlist}
                            </div>
                        </div>
                        <div className="col-10 col-lg-4 order-overlay mx-auto mt-5 mt-lg-0 pt-3">
                            <h2>Product Cart</h2>
                            <div className="mt-5 mb-3">
                                {cartTotal === 0 ? <h4 className="pt-5">No Items Selected</h4> : <OrderSelected />}
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-10 col-lg-4 mx-auto mt-2">
                            <button className="btn-block btn-lg" onClick={checkout}>Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        )        
    }
        
    return (
        <div id="order" className="fade-in">
            <div className="row order-image-1 image-section">
                <OrderLayout />
            </div>
        </div>
    )
}

export default Order
