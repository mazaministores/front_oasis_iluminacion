import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'
import Spinner from './Loading'
import Modal from './Modal'

function Items(props) {


    if (props.loading) return <Spinner />


    return (
        <>
            <div style={{ marginBottom: '40px' }} >
                <h5 className="categorie">{props.title === 'GN' ? 'GENERICOS' : props.title}</h5>
                <div className="items-container" >
                    {
                        props.articles.length === 0 ? <p className="no-found ">  <span> "{props.title}" No se encuentra</span></p> : <>
                            {props.articles.map(item =>
                                <Card key={item.id} id={item.id} brand={item.brand} model={item.model} price={item.price} image={item.image} sizes={item.sizes} />
                            )}
                        </>
                    }

                </div>
            </div>
            <div>
                {props.modal ? <Modal onClose={props.closeModal}>
                    <img alt={props.modal.brand} src={props.modal.image} className="img-modal" />
                    <h3>{props.modal.brand}</h3>
                    <div>
                        <p>{props.modal.model}</p>
                    </div>
                    <button className="btn" onClick={() => props.addItem(props)}> Añadir al pedido</button>
                </Modal> : <></>}
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        modal: state.modal
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => {
            dispatch({ type: "DESACTIVE_MODAL" })
        },
        addItem: (props) => {
            dispatch({ type: "ADD_LIST", item: { id: props.modal.id, brand: props.modal.brand, model: props.modal.model, price: props.modal.price, image: props.modal.image, piece: 1 } })
            dispatch({ type: "DESACTIVE_MODAL" })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Items)