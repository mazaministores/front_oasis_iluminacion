import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'
import useArticles from '../hooks/useArticles'
import Spinner from './Loading'
import ListItems from './ListItems'
import Modal from './Modal'

function Items(props) {

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
    const { articles, loading } = useArticles()

    if (loading) return <Spinner />
    return (
        <>
            <div style={{ marginBottom: '40px' }} >
                {props.filters.length === 0 ? <>
                    {categories.map((doc, index) =>
                        articles.some(item => item.categorie === doc) ?
                            <>
                                <h5 className="categorie">{doc}</h5>
                                <div key={index} className="items-container" >
                                    {articles.map(item =>
                                        item.categorie === doc ?
                                            <>
                                                <Card key={item.id} id={item.id} brand={item.brand} model={item.model} price={item.price} image={item.image} sizes={item.sizes} />
                                            </>
                                            : <></>
                                    )}
                                </div>
                            </> : '')
                    }
                </> : <ListItems {...props} articles={articles} />
                }
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
        filters: state.filters,
        search: state.search,
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