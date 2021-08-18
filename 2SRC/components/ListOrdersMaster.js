import React from 'react'
import useOrders from '../hooks/useOrders'
import Spinner from './Loading'
import OrdersItems from './OrdersItems'

export default function ListOrdersMaster() {

    const { orders, updateOrder, loading, deleteOrder } = useOrders()


    return (
        <div className="container-master">

            <p className="subtitle-master">Pedidos</p>

            <div className="container-orders">
                {
                    loading ? <div><Spinner /></div> : <OrdersItems
                        orders={orders}
                        updateOrder={updateOrder}
                        deleteOrder={deleteOrder}
                    />
                }
            </div>
        </div>
    )
}