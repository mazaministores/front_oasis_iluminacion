import React from 'react'
import NavBar from "../components/NavBar";
import ShoppingPage from '../components/ShoppingPage';
import { Provider } from 'react-redux'
import CartMenu from '../components/CartMenu'
import Alert from '../components/Alert';
import store from '../redux/store'

export default function StorePage() {

  let currentPage = "MENU"

  store.subscribe(() => {
  })

  return (
    <Provider store={store}>
      <div className="App">
        <NavBar currentPage={currentPage} />
        <ShoppingPage />
        <CartMenu />
        <Alert />
      </div>
    </Provider>
  )

}