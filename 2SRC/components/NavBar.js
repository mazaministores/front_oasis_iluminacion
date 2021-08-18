import React from 'react'
import ShoppingCartIcon from './ShoppingCartIcon'

function NavBar() {

    return (
        <div className="header">
            <div className="header-content">

                <img className="nav-logo" src="./0001.png" alt="Logotipo" />

                <div className="spacer"></div>
                <div className="header-icons">
                    <ShoppingCartIcon bgColor="black" sizes="20px" />
                </div>
            </div>
        </div>
    )
}
export default NavBar
