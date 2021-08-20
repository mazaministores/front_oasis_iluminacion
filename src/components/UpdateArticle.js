import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { uploadImg } from '../firebase/client'
import Spinner from './Loading'

function UpdateArticle(props) {

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


    const handleChangeInputFile = (event) => {
        setStatus(COMPOSE_STATES.LOADING)
        const file = event.target.files[0]
        const task = uploadImg(file)
        setTask(task)
    }
    const categories = [
        'EMPOTRADOS',
        'ILUMINACIÓN LED',
        'BOMBILLO',
        'LAMPARAS DECORATIVAS',
        'CAJAS METALICAS',
        'TUBOS',
        'CONEXIONES',
        'MISCELANEAS',
        'CABLES',
        'PROTECTORES Y REGULADORES',
        'CANALETAS Y ACCESORIOS',
        'EXTRACTORES Y REJILLAS',
        'SISTEMA DE ALARMA',
        'TOMAS',
        'INTERRUPTORES',
        'SOCATES',
        'BREAKER',
        'HERRAMIENTAS',
        'BATERIAS',
        'TRANSFORMADORES Y BALASTOS',
        'CONTACTORES',
        'COMIDA',
        'VAPOLETAS',
        'PILAS',
        'REFLECTORES'
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
        props.updateArticle(values.id, { ...values, image: imgUrl ? imgUrl : props.article.image },)
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
                                    <div className="m-t-2">
                                        <label className="archive">EDITAR IMAGEN
                                            <input className="input-file" type="file" onChange={handleChangeInputFile} /></label>
                                        {loading === COMPOSE_STATES.LOADING ? <div><Spinner /> </div> : <>
                                            {imgUrl && <section className="remove-img">
                                                <button className="btn-add-file" onClick={() => setImgUrl(null)}>x</button>
                                                <img loading="lazy" className="add-img" alt="Imagen" src={imgUrl} />
                                            </section>}
                                        </>}
                                    </div>
                                </> : <></>
                            }

                        </div>
                    </div>
                    <div className="cart-menu-subtotal">
                        <div className="m-t-2" >
                            <p style={{ margin: '2px', fontWeight: '700', color: '#1f1d26' }}>{props.message}</p>
                            {loading === COMPOSE_STATES.LOADING || props.loadingPost ? <div><Spinner /></div> : <button type="submit" className="btn">Modificar Articulo</button>}
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