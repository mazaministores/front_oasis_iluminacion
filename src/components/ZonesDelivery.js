import React, { useState } from 'react'
import useZonesDelivery from '../hooks/useZonesDelivery'
import DeleteIcon from '../icons/Delete'
import FormAddZoneDelivery from './FormAddzoneDelivery'
import Spinner from '../components/Loading'

export default function ZonesDelivery() {

    const [form, setForm] = useState(false)
    const { createZone, zones, deleteZone, loading } = useZonesDelivery()

    const handleClick = () => {
        if (form) {
            setForm(false)
        } else {
            setForm(true)
        }
    }

    return (
        <div className="other" >
            <p className="subtitle-master" onClick={handleClick}>Detalles delivery <span>{form ? '-' : '+'}</span></p>
            {
                loading ? <div className="m-b-2"> <Spinner /> </div> : <>
                    {
                        form ? <><FormAddZoneDelivery createZone={createZone} /> </> : <></>
                    }
                    <div className="m-t-2">
                        {
                            zones.length !== 0 ? <>
                                {
                                    zones.map(zone =>
                                        <div className="other-items" key={zone.id}>
                                            <p>{zone.addres}</p>
                                            <p>${zone.price}</p>
                                            <div className="icon" onClick={() => deleteZone(zone.id)}><DeleteIcon /> </div>
                                        </div>
                                    )
                                }
                            </> : <></>
                        }
                    </div>
                </>
            }

        </div>
    )
}