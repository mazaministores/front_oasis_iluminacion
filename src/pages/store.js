import React from 'react'
import ShoppingPage from '../components/ShoppingPage';
import { Provider } from 'react-redux'
import store from '../redux/store'
import Layout from '../components/Layout';
import useArticlesForCategory from 'src/hooks/useArticlesForCategory';

export default function StorePage({ params }) {
  const category = decodeURI(params.id.toUpperCase())

  const { articles, loading } = useArticlesForCategory(category)

  return (
    <Provider store={store}>
      <Layout>
        <div className="App">
          <ShoppingPage title={category} articles={articles} loading={loading} />
        </div>
      </Layout>
    </Provider>
  )
}