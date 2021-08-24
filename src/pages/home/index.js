import React from 'react'
import styles from "./index.module.scss";
import HorizontalCard from "../../components/HomeCard/horizontal-card";
import VerticalCard from "../../components/HomeCard/vertical-card";
import Products from "../../components/HomeProducts";
import Layout from "../../components/Layout";
import { Provider } from 'react-redux';
import store from '../../redux/store'
import Button from "../../components/ButtonFilter";


export default function HomePage() {

  return (
    <Provider store={store}>
      <Layout>
        <div className={styles.container}>
          <main className={styles.main}>
            <div className={styles.header}>
              <h1 className={styles.title}>
                <span className={styles.emoji}>👍</span>Todo en iluminación y mas
              </h1>
              <div className={styles.headerButtons}>
                <Button type="sort" style={{ marginRight: 20 }} />

              </div>
            </div>
            <Products>
              <VerticalCard
                bgColor="#f6f6f6"
                name="Empotrados"
                image="./EMPOTRADOS.jpg"
                // desc="Empotrados de alta calidad al mejor precio del mercado"
                // price="300"
                href="/category/empotrados"
              // sale_price="248"
              />
              <VerticalCard
                bgColor="#f6f6f6"
                onC="https://api.whatsapp.com/send?phone=+5804129991157&text=Hola+Iluminacion+Oasis+me+gustaria+que+desarrollaran+un+presuesto"
                name="Solicita un presupuesto"
                desc="Pulsa para solicitar un presupuesto via WhatsApp"
                image="./PRESU.png"
                // desc="Si nosotros no lo tenemos, no lo tiene nadie"
                // price="200"
                href="/category/bombillo"
              />
              <VerticalCard
                bgColor="#f6f6f6"
                name="Cables"
                image="./CABLES.jpg"
                // desc="Si nosotros no lo tenemos, no lo tiene nadie"
                // price="200"
                href="/category/cables"
              />
            </Products>

            <HorizontalCard
              bgColor="#52aa4a"
              image="./RIG.png"
              title="Estructura para rig de mineria"
              desc="No pases malos ratos, te traemos una solución. Todo listo para que inicies en la mineria"
              href="/category/ILUMINACIÓN LED"
            />
            <Products>
              <VerticalCard
                bgColor="#f6f6f6"
                name="Tomas"
                image="./TOMAS.jpg"
                // desc="Empotrados de alta calidad al mejor precio del mercado"
                // price="300"
                href="/category/tomas"
              // sale_price="248"
              />
              <VerticalCard
                bgColor="#f6f6f6"
                name="Breaker"
                image="./BREAKER.jpg"
                // desc="Si nosotros no lo tenemos, no lo tiene nadie"
                // price="200"
                href="/category/breaker"
              />
              <VerticalCard
                bgColor="#f6f6f6"
                name="Varios"
                image="./VARIOS.jpg"
                // desc="Si nosotros no lo tenemos, no lo tiene nadie"
                // price="200"
                href="/category/miscelaneas"
              />
            </Products>
            <HorizontalCard
              bgColor="#52aa4a"
              image="./ILUMINACION-LED.png"
              title="Iluminación Led"
              desc="Todo en Iluminación Led"
              href="/category/ILUMINACIÓN LED"
            />
          </main>
        </div>
      </Layout>
    </Provider>
  );
}


