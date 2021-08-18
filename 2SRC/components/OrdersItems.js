
import React from 'react'
import OrderItem from './OrderItem'

export default function OrdersItems({ orders, updateOrder, deleteOrder }) {
    return (
        <div>
            {
                orders.length !== 0 ? <>
                    {
                        orders.map(doc => <OrderItem updateOrder={updateOrder} deleteOrder={deleteOrder} {...doc} />)
                    }
                </> : <div className="empty-orders"><span>Sin pedidos</span></div>
            }
        </div>
    )
}