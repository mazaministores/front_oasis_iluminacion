import React from 'react'
import { connect } from 'react-redux'
import ArrowIcon from '../icons/Arrow'

function Alert(props) {

    const subTotal = Object.values(props.inCard).reduce(
        (acc, { piece, price }) => acc + piece * parseFloat(price), 0
    )

    let quantityCounter = 0
    for (let i = 0; i < props.inCard.length; i++)
        quantityCounter += props.inCard[i].piece

    return (
        <div className={`container-alert ${quantityCounter === 0 ? 'none' : 'active'}`}>
            <div className={`alert `} onClick={() => { props.setActive(props) }}>
                <div className="container-badge">
                    <div className="badge-items"><span>{quantityCounter}</span></div>
                    <span className="span-badge">${subTotal.toFixed(2)}</span>
                </div>
                <span className="span-alert-order">Pedido   
                    <ArrowIcon/>
                </span>
            </div>
        </div>

    )

}

const mapStateToProps = state => {

    return {
        inCard: state.inCard,
        isCartMenuActivated: state.isCartMenuActivated
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setActive: (props) => {
            dispatch({ type: "CART_MENU_ACTIVE", status: !(props.isCartMenuActivated) })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Alert)