import React from 'react'

const Order = () => {
    
    const OrderList = () => {
        return (
            <h5>Product List</h5>
        )
    }
    
    const OrderSelected = () => {
        return (
            <h5>Product Selected</h5>
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
                        <div className="col-lg-4 order-overlay my-auto mx-auto pt-2">
                            <h2>Click Below To Add To Cart</h2>
                            <div className="mt-5">
                                <OrderList />
                            </div>
                        </div>
                        <div className="col-lg-4 order-overlay my-auto mx-auto mt-3 mt-lg-0 pt-2">
                            <h2>Product Cart</h2>
                            <div className="mt-5">
                                <OrderSelected />
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
