import React from 'react'
import { connect } from 'react-redux'

function Card(props) {

    return (
        <div className="card-container">
            <div className="card">
                <div className="card-info">
                    <span className="brand-text">{props.brand}</span>
                    <span className="model-text">{props.model}</span>
                    <div className="container-add">
                        <div className="add-item-container" onClick={() => props.addItem(props)}>
                            <div className="plus">
                                +
                            </div>
                        </div>
                        <span className="item-price-text"> ${props.price}</span>
                    </div>
                    {/* <div className="add-button" onClick={() => props.addItem(props)}>
                     Agregar a orden
                   </div> */}
                </div>
                <div className="card-image">
                    <img loading="lazy" src={props.image} alt={props.model} className="item-image" />

                </div>
            </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        inCard: state.inCard
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (props) => {
            props.inCard.find(x => x.id === props.id) ?
                dispatch({ type: "INCREMENT_ITEM_PIECE", item: { ...props } })
                :
                dispatch({ type: "ACTIVE_MODAL", item: { id: props.id, brand: props.brand, model: props.model, price: props.price, image: props.image, piece: 1 } })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)