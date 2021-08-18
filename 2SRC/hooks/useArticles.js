import { useEffect, useState } from 'react'
import articlesServices from '../services/articles'

export default function useArticles() {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [loadingPost, setLoadingPost] = useState(false)
    const [message, setMessage] = useState('')


    useEffect(() => {
        articlesServices
            .getAll()
            .then(initialArticles => {
                setArticles(initialArticles)
                setLoading(false)
            })
    }, [])

    const deleteArticle = (id) => {
        articlesServices
            .deleteArticle(id)
            .then(() => {
                setArticles(articles.filter((article) => article.id !== id))
            })
    }

    const updateArticle = (id, values) => {
        setLoadingPost(true)
        articlesServices
            .update(id, values)
            .then(() => {
                setArticles(articles.map((article) => article.id === id ? values : article))
                setLoadingPost(false)
                setMessage('Articulo editado')
                setTimeout(() => {
                    setMessage('')
                }, 4000)
            })
            .catch(() => {
                console.log('Ups, error set article')
                setLoadingPost(false)
                setMessage('Ups, Error')
                setTimeout(() => {
                    setMessage('')
                }, 4000)
            })
    }

    const createArticle = (values) => {
        setLoadingPost(true)
        articlesServices
            .create(values)
            .then((returnedArticle) => {
                setLoadingPost(false)
                setMessage('Articulo creado')
                setArticles([...articles, returnedArticle])
                setTimeout(() => {
                    setMessage('')
                }, 4000)
            })
            .catch(() => {
                setLoadingPost(false)
                setMessage('Error en la creacion')
                setTimeout(() => {
                    setMessage('')
                }, 4000)
                console.log('Error en la creacion')
            })
    }


    return { articles, deleteArticle, updateArticle, createArticle, loading, loadingPost, message }
}