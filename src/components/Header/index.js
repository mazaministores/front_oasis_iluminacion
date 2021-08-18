import React, { useState } from "react";
import styles from "./header.module.scss";
import SearchIcon from "../icons/search";
import ShoppingCartIcon from "../ShoppingCartIcon";
import { useLocation } from "wouter";
import InstagramLogo from "../InstagramIcon";


export default function Header() {

  const [showHeader, setShowHeader] = useState({
    transform: "translate3d(100vw, 0, 0)",
  });

  const [, navigate] = useLocation()


  const [valuesForm, setValuesForm] = useState('')

  const handleInputChange = (e) => {
    setValuesForm(e.target.value.toUpperCase())
  }

  const onSubmit = (e) => {
    e.preventDefault()
    navigate(`/search/${valuesForm.toUpperCase()}`)
  }

  return (
    <nav className={styles.container}>
      <div className={styles.logoContainer}>
        <img
          alt=""
          src="../logo.png"
          className={styles.logo}
          onClick={() => navigate('/')}
        />
        <div className={styles.rightContentMobile}>
          <ShoppingCartIcon />
          <div className={styles.cartContainer}>
          </div>
        </div>
      </div>
      <div className={styles.rightMenu}>
        <div className={styles.menuContent} style={showHeader}>

        </div>
        <div
          className={styles.background}
          style={showHeader}
          onClick={() =>
            setShowHeader({ transform: "translate3d(100vw, 0, 0)" })
          }
        />
      </div>
      <div className={styles.searchContainer}>
        <SearchIcon
          width={20}
          height={20}
          fill="grey"
          className={styles.searchIcon}
        />
        <form
          onSubmit={onSubmit}
        >
          <input
            className={styles.searchInput}
            placeholder="Busca Productos y Mas"
            onChange={handleInputChange}
          />
        </form>
      </div>
      <div className={styles.rightContent}>
        <div className={styles.cartContainer}>
          <InstagramLogo />
          <ShoppingCartIcon />
        </div>

        <div className={styles.profileContainer}>
          <span>
            Hola{" "}
            <span style={{ fontWeight: "normal" }}>

            </span>
          </span>
        </div>
      </div>
    </nav>
  );
}


