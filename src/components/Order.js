import React from 'react'
import CartMenuItem from './CartMenuItem'

export default function Order(props){

    return(<>
        {(props.inCard.length === 0) ? 
            (
                <div style={{marginTop:'30px'}}>Orden vacia</div> 
            )
            : 
            (
                <div className="cart-menu-items"> 
                    <p className="label">Si esta en el local solo llame al mesero </p>
                    {
                        props.inCard.map(item => {
                            return(
                                <CartMenuItem key={item.id} item={item}/>
                            )
                        })
                    }
                </div>
            )
        }
        </>
    )
}