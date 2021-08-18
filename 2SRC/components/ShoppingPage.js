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
    'REFLECTOR LED',
    'ARO DE LUZ',
    'LAMPARA LED',
    'LAMPARA HERMETICA',
    'PANEL LED',
    'MANPARO LED',
    'DOWNLIGHT',
    'MULTIMETRO',
    'BOMBILLO LED',
    'BOMBILLO LED TIPO FLAMA',
    'BOMBILLO ECOHOME STICK',
    'BOMBILLO LED TIPO REFLECTOR',
    'CINTA LED',
    'TUBERIA EMT',
    'ALUMBRADO PUBLICO',
    'BATERIA',
    'BASE TV',
    'BALANZA',
    'ANUNCIO',
    'BREAKER',
    'CABLE THW',
    'PLANTA ELECTRICA'
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