import React from 'react'
import AddArticle from './AddArticle'
import CardMaster from "./CardMaster"
import { connect } from 'react-redux'
import UpdateArticle from './UpdateArticle'
import useArticles from '../hooks/useArticles'
import Spinner from './Loading'

function ListArticles(props) {

    const { articles, deleteArticle, updateArticle, createArticle, loading, loadingPost, message } = useArticles()

    const activeUpdateArticle = (object) => {
        props.setActiveUpdate({ ...props, object })
    }
    return (
        <>
            <div className="container-master">
                <p className="subtitle-master">Articulos</p>
                <div className="container-orders">
                    {
                        loading ? <div>
                            <Spinner />
                        </div> : <div>
                            <div className="add-article" onClick={() => props.setActive(props)}><span>Agregar Articulo +</span></div>
                            {
                                articles.map(doc => <div key={doc.id} className="card-container master border">
                                    <CardMaster
                                        key={doc.id}
                                        id={doc.id}
                                        image={doc.image}
                                        brand={doc.brand}
                                        model={doc.model}
                                        price={doc.price}
                                        categorie={doc.categorie}
                                        activeUpdateArticle={activeUpdateArticle}
                                        deleteArticle={deleteArticle}
                                    /></div>)
                            }
                        </div>

                    }
                </div>
            </div>
            <AddArticle createArticle={createArticle} loadingPost={loadingPost} message={message} />
            <UpdateArticle updateArticle={updateArticle} loadingPost={loadingPost} message={message} />
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        isAddArticleActivated: state.isAddArticleActivated,
        isUpdateArticleActivated: state.isUpdateArticleActivated
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setActive: (props) => {
            dispatch({ type: "ADD_ARTICLE_ACTIVE", status: !(props.isAddArticleActivated) })
        },
        setActiveUpdate: (props) => {
            dispatch({ article: props.object, type: "UPDATE_ARTICLE_ACTIVE", status: !(props.isUpdateArticleActivated), object: props.obe })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListArticles)