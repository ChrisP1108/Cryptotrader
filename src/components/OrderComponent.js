import { useState } from 'react';

const Order = ({ orderpagecontent }) => {

    const [cartItems, setCartItems] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);

    const addItem = (item) => {
        if (cartItems.includes(item)) {
            return;
        }
        setCartTotal(cartTotal + item.price);
        setCartItems([].concat(cartItems, item))
        console.log(cartItems);
    }
    
    const orderlist = orderpagecontent.map(list => {
        return (
            <div key={list.id} className="list-overlay" onClick={() => addItem(list)}>
                <h5>{list.title}</h5>
            </div>
        )
    });

    const cartlist = cartItems.map(cartitem => {
        return (
            <div key={cartitem.id} className="mt-5">
                <h5>{cartitem.title}</h5>
            </div>
        )
    })

    const OrderTotal = () => {
        return(
            <h4>Price Total: ${cartTotal}</h4>
        )
    }
    
    const OrderSelected = () => {
        return (
            <>
                <div>
                    <h5>{cartlist}</h5>
                </div>
                <div className="mt-5">
                    <OrderTotal />
                </div>
            </>
        )
    }

    const OrderLayout = () => {
        return (
            <div className="row section-overlay pt-4 pb-4">
                <div className="col">
                    <div className="row">
                        <div className="col-12 mx-auto">
                            <h1>Select From Our Products For Pricing</h1>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-4 order-overlay mx-auto pt-2">
                            <h2>Click Items Below To Add To Cart</h2>
                            <div className="mt-5">
                                {orderlist}
                            </div>
                        </div>
                        <div className="col-lg-4 order-overlay mx-auto mt-3 mt-lg-0 pt-2">
                            <h2>Product Cart</h2>
                            <div className="mt-5">
                                {cartItems === '' ? <h5>No Items Selected</h5> : <OrderSelected />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )        
    }
        
    return (
        <div id="order">
            <div className="row order-image-1 image-section">
                <OrderLayout />
            </div>
        </div>
    )
}

export default Order
