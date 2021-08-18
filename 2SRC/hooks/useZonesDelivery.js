import { useEffect, useState } from 'react'
import zonesService from '../services/zonesDelivery'


export default function useZonesDelivery() {

    const [zones, setZones] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        zonesService
            .getAll()
            .then((response) => {
                setZones(response)
                setLoading(false)
            })
    }, [])

    const createZone = (object) => {
        zonesService
            .create(object)
            .then((response) => {
                setZones([...zones, response])
            })
    }
    const deleteZone = (id) => {
        zonesService
            .deleteZone(id)
            .then(() => {
                setZones(zones.filter((zone) => zone.id !== id))
            })
    }

    return { zones, createZone, deleteZone, loading }
}