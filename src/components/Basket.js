import React from "react";

function Basket(props) {
    const {cartItems, onAdd} = props;
    return(
        <aside className="block col-1">
            <h2>Cart Items</h2>
            <div>
                {cartItems.length === 0 && <div>Cart Is Empty</div>}
            </div>
        </aside>
    );
}

export default Basket;