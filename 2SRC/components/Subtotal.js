import React from 'react'
import Loading from './Loading'

export default function Subtotal(props) {

    const handleClick=()=>{

        if(props.sectionCart==='pedido'){
            if(props.inCard.length!==0){
                props.setSectionCart('Checkout')
            }else{
                console.log('cart empty')
            }
        }else{
            props.handleSetSection('confirmar')
        }
    }

    const subTotal=Object.values(props.inCard).reduce(
        (acc,{piece,price})=>acc+piece*parseFloat(price),0
    )

    
    return (
        <div className="cart-menu-subtotal">
            {
                props.sectionCart==='confirmar'?<>
                {
                    props.loading?<Loading/>: <div onClick={props.addOrder} className="checkout-button" style={{marginTop:'20px'}}>Finalizar Pedido</div>
                }
               
                </>:<>
                <div className="subtotal-text">TOTAL</div>
                <div className="subtotal-price-text">${subTotal.toFixed(2)}</div>
                <div onClick={handleClick} className="checkout-button">Siguiente</div>
                </>
            }
        
        </div>
    )
}
