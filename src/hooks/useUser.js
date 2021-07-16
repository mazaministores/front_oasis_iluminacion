import { useEffect } from "react";
import { useLocation } from "wouter";


export default function useUser() {

    const [, navigate] = useLocation()

    const user = JSON.parse(window.localStorage.getItem('logged'))

    useEffect(() => {
        if (!user) navigate('/')
    }, [user])

    return { user }

}