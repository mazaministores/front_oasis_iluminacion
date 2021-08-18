import { useEffect, useState } from 'react'
import methodsServices from '../services/methods'

export default function useMethods() {

    const [methods, setMethods] = useState([])

    useEffect(() => {
        methodsServices
            .getAll()
            .then(response => {
                setMethods(response)
            })
    }, [])

    return { methods }
}