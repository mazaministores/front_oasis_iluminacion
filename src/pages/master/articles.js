import React from 'react'
import { Provider } from 'react-redux'
import ListArticles from '../../components/ListArticlesMaster'
import NavBarMaster from '../../components/NavBarMaster'
import useUser from '../../hooks/useUser'
import store from '../../redux/store'


export default function ArticlesPage() {

    let currentPage = "ARTICULOS"

    const { user } = useUser()

    return (
        <div className="App">
            <NavBarMaster currentPage={currentPage} />
            <Provider store={store}>
                <ListArticles />
            </Provider>
        </div>
    )
}

