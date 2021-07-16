import React, { useState } from 'react'

export default function FormAddZoneDelivery({ createZone }) {

    const [values, setValues] = useState({ addres: '', price: 0 })

    const handleInputChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.target.reset()
        e.preventDefault()
        createZone(values)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="add-others">
                    <input
                        placeholder="Palo verde"
                        className="input input-other"
                        name="addres"
                        onChange={handleInputChange} />
                    <input
                        placeholder="2"
                        className="input input-other"
                        name="price"
                        onChange={handleInputChange} />
                </div>
                <button className="btn">Agregar</button>
            </form>
        </>
    )
}