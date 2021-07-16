import React from 'react'
import NavBarMaster from '../../components/NavBarMaster'
import ZonesDelivery from '../../components/ZonesDelivery'
import useUser from '../../hooks/useUser'

export default function OthersPage() {
    let currentPage = "MAS"

    const {user}=useUser
    
    return (
        <div className="App">
            <NavBarMaster currentPage={currentPage} />
            <div className="container-others">
             <ZonesDelivery/>
            </div>
        </div>
    )
}