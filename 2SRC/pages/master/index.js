import React from 'react'
import ListOrdersMaster from '../../components/ListOrdersMaster'
import NavBarMaster from '../../components/NavBarMaster'
import useUser from '../../hooks/useUser'

export default function MasterPage() {

    let currentPage = "PEDIDOS"

    const { user } = useUser()

    return (
        <div className="App">
            <NavBarMaster currentPage={currentPage} />
            <ListOrdersMaster />
        </div>
    )
}