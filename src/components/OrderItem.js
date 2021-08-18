import React from 'react'

export default function OrderItem(props) {

    const handleClickItems = (e) => {
        e.currentTarget.classList.toggle('active')
        const response = e.currentTarget.querySelector('.response')
        const heightReal = response.scrollHeight
        if (!response.style.maxHeight) {
            response.style.maxHeight = heightReal + 'px'
        } else {
            response.style.maxHeight = null
        }
    }

    const sendWhatsapp = () => {

        const cart = []
        props.pedido.forEach((doc) => {
            cart.push(
                JSON.stringify(
                    `${doc.brand} $${doc.price} x ${doc.piece} unidad(des)%0A`
                ).replace(/['"]+/g, '')
            )
        })

        window.open(`https://api.whatsapp.com/send?phone=+${props.telefono}&text=Hola+recibimos+tu+pedido+${props.nombre}
            %0AReferencia+de+pedido:+${props.numeroPedido}%0A+Items+del+pedido:%0A${cart.toString()}+%0A
            Tipo+de+compra:+${props.tipo === 'delivery' ? 'Delivery' :
                'Recoger+personalmente'}%0A${props.tipo === 'delivery' ? ('Direccion+de+entrega:+' + props.direccion +
                    '%0ANumero+Apartamento/Casa+etc:+' + props.casa +
                    '%0ALocalidad:+' + props.localidad + '%0ASubtotal:+$' + props.subtotal) : ''}%0A
                    Costo+delivery:+$${props.precioDelivery}
                    %0ATotal:+$${props.total}
                    %0AMetodo+de+Pago:+${props.metodoPago}
            `)

    }

    const updateStateOrder = () => {
        props.updateOrder(props.id, { ...props, confirmacion: true })
    }

    return (
        <div className="border container-data-pedido" style={{ background: props.confirmacion ? '#77d66459' : '#ffffc5' }}>
            <p className="delete-order" onClick={() => props.deleteOrder(props.id)}>x</p>
            <div className="order" >
                <div >
                    <div className="header-order">
                        <p className="ref-order">Referencia: {props.numeroPedido}</p>
                        {
                            !props.confirmacion ? <>
                                <p>Esperando confirmacion</p>
                                <button className="btn-confirm" onClick={updateStateOrder}>Confirmar</button>
                            </> : <> <p>Orden confirmada</p></>
                        }
                    </div>
                    <p className="t-left">{props.nombre}</p>
                    <p className="t-left">{props.telefono}</p>
                    <button className="btn-confirm p-1" onClick={sendWhatsapp}>Enviar Whatsapp</button>

                    <div className="container-detail">
                        <div className="row-detail">
                            <p className="t-left">Tipo de pedido</p>
                            <p className="t-right">{props.tipo === 'delivery' ? 'Delivery' : 'Recoger personalmente'}</p>
                        </div>
                        <div className="row-detail">
                            <p className="t-left">Subtotal</p>
                            <p className="t-right">${parseFloat(props.subtotal).toFixed(2)}</p>
                        </div>
                        {
                            props.tipo === 'delivery' ?
                                <div className="row-detail">
                                    <p className="t-left">Delivery</p>
                                    <p className="t-right">${props.precioDelivery}</p>
                                </div> : <></>
                        }
                        <div className="row-detail">
                            <p className="t-left">Total</p>
                            <p className="t-right">${parseFloat(props.total).toFixed(2)}</p>
                        </div>
                    </div>
                    <div className="container-detail">
                        <div className="row-detail">
                            <p className="t-left">Metodo de pago</p>
                            <p className="t-right">{props.metodoPago}</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="container-detail-des m-2" onClick={(e) => handleClickItems(e)}>
                        <p className="t-left des"> Items del pedido <b>+</b> </p>
                        <div className="response">
                            {
                                props.pedido.map(doc =>
                                    <div className="row-detail">
                                        <p className="t-left">{doc.brand}</p>
                                        <p className="t-right">{doc.piece} X ${doc.price} </p>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    {
                        props.tipo === 'delivery' ? <>
                            <div className="container-detail-des m-2" onClick={(e) => handleClickItems(e)}  >
                                <p className="t-left des"> Direccion <b>+</b></p>
                                <div className="response">
                                    <div className="row-detail">
                                        <p className="t-left">Direccion</p>
                                        <p className="t-right">{props.direccion}</p>
                                    </div>
                                    <div className="row-detail">
                                        <p className="t-left">Numero</p>
                                        <p className="t-right">{props.casa}</p>
                                    </div>
                                    <div className="row-detail">
                                        <p className="t-left">Localidad</p>
                                        <p className="t-right">{props.localidad}</p>
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