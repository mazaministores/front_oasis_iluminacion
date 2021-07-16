import React, { useEffect, useState } from 'react'
import Spinner from '../../components/Loading'
import NavBarMaster from '../../components/NavBarMaster'
import useOrders from '../../hooks/useOrders'
import useUser from '../../hooks/useUser'

export default function OthersPage() {
    let currentPage = "RESUMEN"

    const { user } = useUser

    const { orders, loading } = useOrders()
    const [details, setDetails] = useState([])

    useEffect(() => {

        if (orders.length !== 0) {
            let cart = []
            for (let i = 0; i < orders.length; i++) {
                if (orders[i].confirmacion) {
                    for (let c = 0; c < orders[i].pedido.length; c++) {
                        cart.push(orders[i].pedido[c])
                    }
                }
            }
            let totals = []
            for (let i = 0; i < cart.length; i++) {
                if (totals.some((total) => total.id === cart[i].id)) {
                    const prevTotal = totals.find((prev) => prev.id === cart[i].id)
                    const newTotal = { ...prevTotal, piece: prevTotal.piece + cart[i].piece }
                    totals = totals.map(doc => doc.id === cart[i].id ? newTotal : doc)
                } else {
                    totals = totals.concat(cart[i])
                }
            }
            setDetails(totals)
        }

    }, [orders])

    const total = Object.values(details).reduce(
        (acc, { piece, price }) => acc + piece * parseFloat(price), 0
    )

    return (
        <div className="App">
            <NavBarMaster currentPage={currentPage} />
            <div className="container-master">

                <div className="header-details-items">
                    <p className="subtitle-master">Resumen de ventas</p>
                    <button className="btn">Cerrar lote</button>
                </div>

                {loading ? <div><Spinner /></div> : <>
                    {
                        details.length !== 0 ? <>
                            <div className="add-article detail-items"><span>Total: ${total} </span></div>
                            <div className=" m-t-2">
                                {
                                    details.map(doc =>
                                        <div className="item-detail" key={doc.id}>
                                            <p>{doc.brand}</p>
                                            <p>{doc.piece} uni </p>
                                            <p>x</p>
                                            <p>${doc.price}</p>
                                            <p>${doc.piece * doc.price}</p>
                                        </div>
                                    )
                                }
                            </div>
                        </> : <>
                            <div className="add-article"><span>Lote vacio </span></div>
                        </>
                    }

                </>}

            </div>
        </div>
    )
}