import { useEffect, useState } from 'react'
import ordersServices from '../services/orders'

export default function useOrders() {

    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        ordersServices
            .getAll()
            .then(initialArticles => {
                setOrders(initialArticles)
                setLoading(false)
            })
    }, [])

    const updateOrder = (id, values) => {
        ordersServices
            .update(id, values)
            .then(() => {
                setOrders(orders.map((order) => order.id === id ? values : order))
            })
    }

    const deleteOrder = (id) => {
        ordersServices
            .deleteOrder(id)
            .then(() => {
                setOrders(orders.filter((order) => order.id !== id))
            })
    }


    return { orders, updateOrder, loading, deleteOrder }
}