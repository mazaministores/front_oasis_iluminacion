import { useEffect, useState } from 'react'
import articlesServices from '../services/articlesForCategory'

export default function useArticlesForCategory(c) {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [message, setMessage] = useState('')


    useEffect(() => {
        articlesServices.getArticlesForCategory(c)
            .then(initialArticles => {
                setArticles(initialArticles)
                setLoading(false)
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
                setMessage('Ups, Error de conexión')
            })
    }, [c])


    return { articles, loading, message }
}