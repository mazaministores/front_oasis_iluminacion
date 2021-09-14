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
                <span className={styles.emoji}>👍</span>Todo en iluminación y más
              </h1>
              <div className={styles.headerButtons}>
                <Button type="sort" style={{ marginRight: 20 }} />
              </div>
            </div>
            <HorizontalCard
              bgColor="#52aa4a"
              image="./CONDOMINIO.png"
              href="/offers"
              title="OFERTAS PARA CONDOMINIOS Y TU HOGAR"
              desc="Siempre pensando en ti"
              w="55%"
            />
            <Products>
              <VerticalCard
                bgColor="#f6f6f6"
                name="Empotrados"
                image="./EMPOTRADOS.jpg"
                href="/category/empotrados"
              />
              <VerticalCard
                bgColor="#f6f6f6"
                onC="https://api.whatsapp.com/send?phone=+5804129991157&text=Hola+Iluminacion+Oasis+me+gustaria+que+desarrollaran+un+presupuesto"
                name="Solicita un presupuesto"
                desc="Pulsa para solicitar un presupuesto via WhatsApp"
                image="./PRESU.png"
              />
              <VerticalCard
                bgColor="#f6f6f6"
                name="Cables"
                image="./CABLES.jpg"
                href="/category/cables"
              />
              <VerticalCard
                bgColor="#f6f6f6"
                name="Tomas"
                image="./TOMAS.jpg"
                href="/categorieoptions/tomas"
              />
            </Products>
            <HorizontalCard
              direction="rtl"
              bgColor="#52aa4a"
              image="./RIG.png"
              onC="https://api.whatsapp.com/send?phone=+5804129991157&text=Hola+Iluminación+Oasis+me+gustaria+saber+mas+de+los+stand+para+rig+de+mineria"
              title="Estructura para rig de minería"
              desc="No pases malos ratos, te traemos una solución. Todo listo para que inicies en la minería"
            />
            <Products two>
              <VerticalCard
                bgColor="#f6f6f6"
                name="Tomas"
                image="./TOMAS.jpg"
                href="/categorieoptions/tomas"
              />
              <VerticalCard
                bgColor="#f6f6f6"
                name="Breaker"
                image="./BREAKER.jpg"
                href="/category/breaker"
              />
              <VerticalCard
                bgColor="#f6f6f6"
                name="Varios"
                image="./VARIOS.jpg"
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


