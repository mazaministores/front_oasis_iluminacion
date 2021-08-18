import React from 'react'
import ShoppingPage from '../../components/ShoppingPage';
import { Provider } from 'react-redux'
import store from '../../redux/store'
import Layout from '../../components/Layout';
import useArticlesForSearch from 'src/hooks/useArticlesForSearch';

export default function SearchPage({ params }) {


    const search = decodeURI(params.id.toUpperCase())
    const { articles, loading } = useArticlesForSearch(search)

    return (
        <Provider store={store}>
            <Layout>
                <div className="App">
                    <ShoppingPage title={search} articles={articles} loading={loading} />
                </div>
            </Layout>
        </Provider>
    )
}