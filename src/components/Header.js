import React from "react";

function Header(props) {
    return(
        <header className="row block center">
            <div>
                <a href="#/">
                    <h1>Small Shopping Cart</h1>
                </a>
            </div>
            <div>
                <a id="cart" href="#/cart">Cart</a> <a href="#/signin">Sign In</a>
            </div>
        </header>
    );
}

export default Header;