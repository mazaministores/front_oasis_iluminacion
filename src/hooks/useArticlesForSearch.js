import { useEffect, useState } from 'react'
import articlesServices from '../services/articlesForSearch'

export default function useArticlesForSearch(s) {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [message, setMessage] = useState('')


    useEffect(() => {
        articlesServices.getArticlesForSearch(s)
            .then(initialArticles => {
                setArticles(initialArticles)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
                setMessage('Ups, Error de conexión')
            })
    }, [s])


    return { articles, loading, message }
}