import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { uploadImg } from '../firebase/client'
import Spinner from './Loading'


function AddArticle(props) {

    const COMPOSE_STATES = {
        USER_NOT_KNOW: 0,
        LOADING: 1,
        SUCCESS: 2,
        ERROR: -1,
        LOADING_FORM: 10,
        NO_LOADING_FORM: 20,
    }
    const [status, setStatus] = useState(COMPOSE_STATES)
    const [task, setTask] = useState(null)
    const [imgUrl, setImgUrl] = useState(null)
    const [loading, setLoading] = useState(COMPOSE_STATES.USER_NOT_KNOW)

    useEffect(() => {
        if (task) {
            const onProgress = () => {
                setStatus(COMPOSE_STATES.LOADING)
                setLoading(COMPOSE_STATES.LOADING)
            }
            const onError = () => { }

            const onComplete = () => {
                setLoading(COMPOSE_STATES.USER_NOT_KNOW)
                setStatus(COMPOSE_STATES)
                task.snapshot.ref.getDownloadURL()
                    .then(setImgUrl)
            }
            task.on('state_changed',
                onProgress,
                onError,
                onComplete
            )
        }
    }, [task])

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
        'ALUMBRADO PUBLICO',
        'ARO DE LUZ',
        'CINTA LED',
        'LAMPARA LED',
        'PANEL LED',
        'REFLECTOR LED',
        'BATERIA',
        'BASE TV',
        'BALANZA',
        'ANUNCIO',
        'BOMBILLO LED'
    ]
    const initialValues = {
        brand: "",
        model: "",
        price: '',
        image: "",
        categorie: ""
    }
    const [values, setValues] = useState(initialValues)

    const handleInputChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (event) => {
        event.target.reset()
        event.preventDefault()
        props.createArticle({ ...values, image: imgUrl })

    }

    const handleChangeInputFile = (event) => {
        setStatus(COMPOSE_STATES.LOADING)
        const file = event.target.files[0]
        const task = uploadImg(file)
        setTask(task)
    }


    return (
        <div className={`container-cart-menu ${props.isAddArticleActivated === true ? "container-cart-menu-active" : null}`} >
            <div className={`cart-menu ${props.isAddArticleActivated === true ? "cart-menu-active" : null}`} >
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
                            <label className="label m-t-2">Nombre</label>
                            <input className="input" name="brand" onChange={handleInputChange} required />
                            <label className="label m-t-2">Descripción</label>
                            <textarea className="textarea" name="model" onChange={handleInputChange} required />
                            <label className="label m-t-2" >Precio</label>
                            <input className="input" name="price" onChange={handleInputChange} required />
                            <label className="label m-t-2">Categoria</label>
                            <select className="select" name="categorie" onChange={handleInputChange}>
                                <option value="indefinido">SELECCIONAR</option>
                                {
                                    categories.map(doc => <option key={doc} value={doc}>{doc}</option>)
                                }
                            </select>
                            <div className="m-t-2">
                                <label className="archive">Imagen
                                    <input className="input-file" type="file" onChange={handleChangeInputFile} /></label>
                                {loading === COMPOSE_STATES.LOADING ? <div><Spinner /> </div> : <>
                                    {imgUrl && <section className="remove-img">
                                        <button className="btn-add-file" onClick={() => setImgUrl(null)}>x</button>
                                        <img loading="lazy" className="add-img" alt="Imagen" src={imgUrl} />
                                    </section>}
                                </>}
                            </div>
                        </div>
                    </div>

                    <div className="cart-menu-subtotal">
                        <div className="m-t-2">
                            <p style={{ margin: '2px', fontWeight: '700', color: '#1f1d26' }}>{props.message}</p>
                            {
                                loading === COMPOSE_STATES.LOADING || props.loadingPost ? <div> <Spinner /> </div> : <button className="btn">Agregar Articulo</button>
                            }
                        </div>
                    </div>
                </form>

            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAddArticleActivated: state.isAddArticleActivated
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setActive: (props) => {
            dispatch({ type: "ADD_ARTICLE_ACTIVE", status: !(props.isAddArticleActivated) })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddArticle)