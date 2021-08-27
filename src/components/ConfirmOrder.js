import React from 'react'

export default function ConfirmOrder({ values, typeOrder, inCard, zones }) {

    const handleClick = (e) => {
        e.currentTarget.classList.toggle('active')
        const response = e.currentTarget.querySelector('.response')
        const heightReal = response.scrollHeight
        if (!response.style.maxHeight) {
            response.style.maxHeight = heightReal + 'px'
        } else {
            response.style.maxHeight = null
        }
    }

    const subTotal = Object.values(inCard).reduce(
        (acc, { piece, price }) => acc + piece * parseFloat(price), 0
    )

    const priceDelivery = zones.find(zone => zone.addres === values.localidad)
    const total = subTotal + (typeOrder === 'recoger' ? 0 : priceDelivery.price)

    return (
        <div className="container-Confirm">
            <p className="title-Confirm">Resumen del pedido</p>
            <div className="container-data-pedido">
                <p className="t-left">{values.nombre}</p>
                <p className="t-left">{values.telefono}</p>

                <div className="container-detail">
                    <div className="row-detail">
                        <p className="t-left">Tipo de pedido</p>
                        <p className="t-right">{typeOrder === 'recoger' ? 'Recorger en local' : 'Delivery'}</p>
                    </div>
                    <div className="row-detail">
                        <p className="t-left">Subtotal</p>
                        <p className="t-right">${subTotal.toFixed(2)}</p>
                    </div>
                    {
                        typeOrder === 'delivery' ? <div className="row-detail">
                            <p className="t-left">Delivery</p>
                            <p className="t-right">${priceDelivery.price.toFixed(2)}</p></div> : <></>
                    }
                    <div className="row-detail">
                        <p className="t-left">Total</p>
                        <p className="t-right">${total.toFixed(2)}</p>
                    </div>
                </div>
                <div className="container-detail">
                    <div className="row-detail">
                        <p className="t-left">Método de pago</p>
                        <p className="t-right">{values.metodoPago}</p>
                    </div>
                    <div className="note">
                        <span>Nota: Confirme los detalles de su pedido antes de finalizar</span>
                    </div>
                    <div className="container-detail-des" onClick={(e) => handleClick(e)}>
                        <p className="t-left des"> Items del pedido <b>+</b> </p>
                        <div className="response">
                            {
                                inCard.map(doc =>
                                    <div className="row-detail">
                                        <p className="t-left">{doc.brand}</p>
                                        <p className="t-right">{doc.piece} X ${doc.price} </p>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    {
                        typeOrder === 'delivery' ? <>
                            <div className="container-detail-des" onClick={(e) => handleClick(e)}>
                                <p className="t-left des"> Direccion <b>+</b></p>
                                <div className="response">
                                    <div className="row-detail">
                                        <p className="t-left">Direccion</p>
                                        <p className="t-right">{values.direccion}</p>
                                    </div>
                                    <div className="row-detail">
                                        <p className="t-left">Numero</p>
                                        <p className="t-right">{values.casa}</p>
                                    </div>
                                    <div className="row-detail">
                                        <p className="t-left">Localidad</p>
                                        <p className="t-right">{values.localidad}</p>
                                    </div>
                                </div>
                            </div>
                        </> : <></>
                    }

                </div>
            </div>
        </div>
    )
}