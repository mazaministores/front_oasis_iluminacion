import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Spinner from './Loading'

function UpdateArticle(props) {

    // const categories = [
    //     "Arroz",
    //     "Carnes",
    //     "Ensaladas",
    //     "Pastas",
    //     "Verduras",
    //     "Postres",
    //     "Bebidas",
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
    const [values, setValues] = useState({})

    useEffect(() => {
        setValues(props.article)
    }, [props.article])

    const handleInputChange = (e) => {
        setValues({
            ...values, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.updateArticle(values.id, values)
    }

    return (
        <div className={`container-cart-menu ${props.isUpdateArticleActivated === true ? "container-cart-menu-active" : null}`} >
            <div className={`cart-menu ${props.isUpdateArticleActivated === true ? "cart-menu-active" : null}`} >
                <div className="nav-cart">
                    <div className="buttons-cart">

                    </div>
                    <div onClick={() => props.setActive(props)} className="button-close-cart">
                        <p>X</p>
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="cart-body">
                        <div className="container-add-inputs">
                            {
                                props.article ? <>
                                    <label className="label m-t-2">Nombre</label>
                                    <input defaultValue={props.article.brand} className="input" name="brand" onChange={handleInputChange} required />
                                    <label className="label m-t-2">Descripción</label>
                                    <textarea defaultValue={props.article.model} className="textarea" name="model" onChange={handleInputChange} required />
                                    <label className="label m-t-2" >Precio</label>
                                    <input defaultValue={props.article.price} className="input" name="price" onChange={handleInputChange} required />
                                    <label className="label m-t-2">Categoria</label>
                                    <select defaultValue={props.article.categorie} className="select" name="categorie" onChange={handleInputChange}   >
                                        {
                                            categories.map((doc) => <option key={doc} value={doc}>{doc}</option>)
                                        }
                                    </select>
                                </> : <></>
                            }

                        </div>
                    </div>
                    <div className="cart-menu-subtotal">
                        <div className="m-t-2" >
                            <p style={{ margin: '2px', fontWeight: '700', color: '#1f1d26' }}>{props.message}</p>
                            {props.loadingPost ? <div><Spinner /></div> : <button type="submit" className="btn">Modificar Articulo</button>}
                        </div>
                    </div>
                </form>

            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isUpdateArticleActivated: state.isUpdateArticleActivated,
        article: state.article
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setActive: (props) => {
            dispatch({ type: "UPDATE_ARTICLE_ACTIVE", status: !(props.isUpdateArticleActivated) })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateArticle)