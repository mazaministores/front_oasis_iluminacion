import React from 'react'
import Items from './Items'
import { connect } from 'react-redux'


function ShoppingPage(props) {

    return (
        <div className="shopping-page" onClick={() => { props.setDeactive(props) }}>
            <Items title={props.title} articles={props.articles} loading={props.loading} />
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