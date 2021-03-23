import React from 'react'

const Order = () => {
    
    const OrderContent = () => {
        return (
            <div className="row section-overlay pt-4 pb-4">
                <div className="col">
                    <div className="row">
                        <div className="col-12 mx-auto">
                            <h1>Select From Our Products For Pricing</h1>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-4 order-overlay my-auto mx-auto">
                            <h1>Select Product</h1>
                        </div>
                        <div className="col-4 order-overlay my-auto mx-auto">
                            <h1>Product Cart</h1>
                        </div>
                    </div>
                </div>
            </div>
        )        
    }
        
    return (
        <div id="order">
            <div className="row order-image-1 image-section">
                <OrderContent />
            </div>
        </div>
    )
}

export default Order
