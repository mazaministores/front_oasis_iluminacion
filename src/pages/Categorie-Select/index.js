import React from 'react'
import { Provider } from 'react-redux'
import store from '../../redux/store'
import Layout from '../../components/Layout';
import CustomHorizontalCard from 'src/components/HomeCard/custom-horizontal-card';

export default function CategorieSelectPage({ params }) {

  const category = decodeURI(params.id.toUpperCase())

  return (
    <Provider store={store}>
      <Layout>
        <div className="App">
          <div className="container-cards-categories-options">
            <CustomHorizontalCard
              bgColor="#f6f6f6"
              title="MASTER"
              desc=".."
              href="/search/MASTER"
              image="../MASTER.png"
            />
            <CustomHorizontalCard
              bgColor="#f6f6f6"
              title="VETO"
              desc=".."
              href="/search/VETO"
              image="../VETO.png"
            />
            <CustomHorizontalCard
              bgColor="#f6f6f6"
              desc=".."
              href="/search/PICKENS"
              title="PICKENS"
              image="../PICKENS.png"
            />
            <CustomHorizontalCard
              bgColor="#f6f6f6"
              title="VIMAR"
              href="/search/VIMAR"
              image="../VIMAR.png"
              desc=".."
            />
            <CustomHorizontalCard
              bgColor="#f6f6f6"
              title="GENERICOS"
              href="/search/GN"
              image="../GENE.png"
              desc=".."
            />
          </div>
        </div>
      </Layout>
    </Provider>
  )
}