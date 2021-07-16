import React from 'react'
import Filters from './Filters'
import Items from './Items'
import { connect } from 'react-redux'

// const categories = [
//     'Arroz',
//     'Carnes',
//     'Ensaladas',
//     'Pastas',
//     'Verduras',
//     'Postres',
//     'Bebidas'
// ]
const categories = [
    'ALUMBRADO PUBLICO',
    'ARO DE LUZ',
    'CINTA LED',
    'LAMPARA LED',
    'PANEL LED',
    'REFLECTOR LED',
    'BATERIA',
    'BASE TV',
    'BALANZA',
    'ANUNCION'
]



function ShoppingPage(props) {
    return (
        <div className="shopping-page" onClick={() => { props.setDeactive(props) }}>
            <Filters categories={categories} />
            <Items />
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setDeactive: (props) => {
            if (props.isCartMenuActivated)
                dispatch({ type: "CART_MENU_ACTIVE", status: false })
        }
    }
}

const mapStateToProps = state => {
    return {
        inCard: state.inCard,
        isCartMenuActivated: state.isCartMenuActivated
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingPage)