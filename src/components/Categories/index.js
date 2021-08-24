import React from "react"
import styles from "./categories.module.scss"
import HelpIcon from "../icons/help"
import { useLocation } from "wouter"
import Carousel from 'react-elastic-carousel'


const CategoryItem = ({ name, link, emoji }) => {
  const [, navigate] = useLocation()
  return (
    <li className={styles.categoryItem} onClick={() => navigate(link)}>
      <a>
        <span className={styles.emoji}>{emoji}</span>
        <span className={styles.categoryName}>{name}</span>
      </a>
    </li>
  )
}

export default function CategoriesBar() {

  const breakPoints = [
    { width: 1, itemsToShow: 3 },
    { width: 550, itemsToShow: 4 },
    { width: 768, itemsToShow: 7 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Bienvenido a Oasis</h2>
      <ul className={styles.categories}>
        <CategoryItem name="Empotrados" emoji="⚡" link="/category/empotrados" />
        <CategoryItem name="Iluminación Led" emoji="🔆" link="/category/ILUMINACIÓN LED" />
        <CategoryItem name="Bombillos" emoji="💡" link="/category/bombillo" />
        <CategoryItem name="Lamparas" emoji="🔬" link="/category/lamparas decorativas" />
        <CategoryItem name="Control" emoji="⚙️" link="/category/control" />
        <CategoryItem name="Tubos " emoji="➖" link="/category/tubos" />
        <CategoryItem name="Conexiones" emoji="🔱" link="/category/conexiones" />
        <CategoryItem name="Cables" emoji="🔌" link="/category/cables" />
        <CategoryItem name="Canaletas" emoji="🔩" link="/category/canaletas y accesorios" />
        <CategoryItem name="Tomas" emoji="🔱" link="/category/tomas" />
        <CategoryItem name="Interruptores" emoji="🕹️" link="/category/interruptores" />
        <CategoryItem name="Socates" emoji="🔅" link="/category/socates" />
      </ul>
      <ul className={styles.categoriesMd}>
        <Carousel breakPoints={breakPoints}>
          <CategoryItem name="Empotrados" emoji="⚡" link="/category/empotrados" />
          <CategoryItem name="Iluminación Led" emoji="🔆" link="/category/ILUMINACIÓN LED" />
          <CategoryItem name="Bombillos" emoji="💡" link="/category/bombillo" />
          <CategoryItem name="Lamparas" emoji="🔬" link="/category/lamparas decorativas" />
          <CategoryItem name="Control" emoji="⚙️" link="/category/control" />
          <CategoryItem name="Tubos " emoji="➖" link="/category/tubos" />
          <CategoryItem name="Conexiones" emoji="🔱" link="/category/conexiones" />
          <CategoryItem name="Cables" emoji="🔌" link="/category/cables" />
          <CategoryItem name="Canaletas" emoji="🔩" link="/category/canaletas y accesorios" />
          <CategoryItem name="Tomas" emoji="🔱" link="/category/tomas" />
          <CategoryItem name="Interruptores" emoji="🕹️" link="/category/interruptores" />
          <CategoryItem name="Socates" emoji="🔅" link="/category/socates" />
        </Carousel>
      </ul>
      <div className={styles.helpContainer} >
        <div className={styles.helpIcon}>
          <HelpIcon width={18} height={18} />
        </div>
        <span style={{ cursor: 'pointer' }} onClick={() => console.log('Click')} >ElectriLamp</span>
      </div>
    </div>
  )
}
