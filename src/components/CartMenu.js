import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Checkout from './Checkout'
import ConfirmOrder from './ConfirmOrder'
import Order from './Order'
import Subtotal from './Subtotal'
import orderService from '../services/orders'
import SucessOrder from './SucessOrder'
import useZonesDelivery from '../hooks/useZonesDelivery'

function CartMenu(props) {

    const [sectionCart, setSectionCart] = useState('pedido')
    const [typeOrder, setTypeOrder] = useState('delivery')
    const [action, setAction] = useState({})
    const [loading, setLoading] = useState(false)
    const { zones } = useZonesDelivery()

    const initialValues = {
        nombre: '',
        telefono: '',
        direccion: '',
        casa: '',
        localidad: '',
        metodoPago: '',
    }

    const [values, setValues] = useState(initialValues)

    useEffect(() => {
        const valuesInStorage = localStorage.getItem('valuesInput')
        if (valuesInStorage) {
            setValues(JSON.parse(valuesInStorage))
        }
    }, [])


    const handleInputChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const handleSetSection = (r) => {

        if (sectionCart === 'pedido') {
            if (props.inCard.length !== 0) {
                setSectionCart('Checkout')
            }
        } else if (sectionCart === "Checkout") {
            if (r !== 'confirmar') {
                setSectionCart('pedido')
            } else {
                if (typeOrder === 'delivery') {
                    if (values.nombre === '') return setAction({ error: 'Complete el campo.' })
                    if (values.telefono === '') return setAction({ error: 'Complete el campo.' })
                    if (values.direccion === '') return setAction({ error: 'Complete el campo.' })
                    if (values.casa === '') return setAction({ error: 'Complete el campo.' })
                    if (values.localidad === '') return setAction({ error: 'Complete el campo.' })
                    if (values.metodoPago === '') return setAction({ error: 'Complete el campo.' })
                } else {
                    if (values.nombre === '') return setAction({ error: 'Complete el campo.' })
                    if (values.telefono === '') return setAction({ error: 'Complete el campo.' })
                    if (values.metodoPago === '') return setAction({ error: 'Complete el campo.' })
                }
                setSectionCart('confirmar')
            }

        } else if (sectionCart === 'confirmar') {
            setSectionCart(r)
        } else if (setSectionCart === 'successOrder') {

        }
    }

    const subTotal = Object.values(props.inCard).reduce(
        (acc, { piece, price }) => acc + piece * parseFloat(price), 0
    )



    const addOrder = () => {
        setLoading(true)
        const total = subTotal + (typeOrder === 'delivery' ? zones.find(zone => zone.addres === values.localidad).price : 0)

        const orderObject = {
            nombre: values.nombre,
            telefono: values.telefono,
            tipo: typeOrder,
            direccion: values.direccion,
            casa: values.casa,
            localidad: values.localidad,
            metodoPago: values.metodoPago,
            precioDelivery: typeOrder === 'delivery' ? zones.find(zone => zone.addres === values.localidad).price : 0,
            pedido: props.inCard,
            subtotal: subTotal,
            total: total.toFixed(2),
        }
        orderService.create(orderObject)
            .then((returnedOrder) => {
                setLoading(false)
                setSectionCart('successOrder')
                setAction(returnedOrder)
                localStorage.setItem('valuesInput', JSON.stringify({
                    nombre: values.nombre,
                    telefono: values.telefono,
                    direccion: values.direccion,
                    casa: values.casa,
                    localidad: values.localidad,
                    metodoPago: '',
                }))
                props.setCart()
            })
    }

    const sendWhatsapp = () => {

        const priceDelivery = action.tipo === 'delivery' ? zones.find(zone => zone.addres === action.localidad).price : 0

        console.log(priceDelivery)

        const cart = []
        action.pedido.forEach((doc) => {
            cart.push(
                JSON.stringify(
                    `${doc.brand} $${doc.price} x ${doc.piece} unidad(des)%0A`
                ).replace(/['"]+/g, '')
            )
        })


        window.open(`https://api.whatsapp.com/send?phone=+5804122842606&text=Hola+mi+nombre+es+${action.nombre}
            %0AReferencia+de+pedido:+${action.numeroPedido}%0A+Items+del+pedido:%0A${cart.toString()}+%0A
            Tipo+de+compra:+${action.tipo === 'delivery' ? 'Delivery' :
                'Recoger+personalmente'}%0A${action.tipo === 'delivery' ? ('Direccion+de+entrega:+' + action.direccion +
                    '%0ANumero+Apartamento/Casa+etc:+' + values.casa +
                    '%0ALocalidad:+' + action.localidad + '%0ASubtotal:+$' + action.subtotal + `%0ACosto+delivery:+$${priceDelivery}`) : ''}%0A
                    %0ATotal:+$${action.total}
                    %0AMetodo+de+Pago:+${action.metodoPago}
            `)
    }

    const updateSectionCart = () => {
        if (sectionCart !== 'successOrder') {
            props.setActive(props)
        } else {
            setSectionCart('pedido')
            props.setActive(props)
        }
    }

    return (
        <div className={`container-cart-menu ${props.isCartMenuActivated === true ? "container-cart-menu-active" : null}`} >
            <div className={`cart-menu ${props.isCartMenuActivated === true ? "cart-menu-active" : null}`} >
                <div className="nav-cart">
                    <div className="buttons-cart">
                        <div
                            className="button-cart"
                            style={{ borderBottom: sectionCart === 'pedido' ? '5px solid #003779' : '' }}
                            onClick={() => handleSetSection('pedido')}
                        >
                            <p>Pedido</p>
                        </div>
                        <div
                            className="button-cart"
                            onClick={() => handleSetSection('Checkout')}
                            style={{ borderBottom: sectionCart === 'Checkout' ? '5px solid #003779' : '' }}
                        >
                            <p>Chekout</p>
                        </div>
                        <div
                            className="button-cart"
                            onClick={() => handleSetSection('confirmar')}
                            style={{ borderBottom: sectionCart === 'confirmar' ? '5px solid #003779' : '' }}
                        >
                            <p>Confirmar</p>
                        </div>
                    </div>
                    <div onClick={updateSectionCart} className="button-close-cart">
                        <p>X</p>
                    </div>
                </div>
                <div className="cart-body">
                    {
                        sectionCart === 'pedido' ?
                            <Order
                                inCard={props.inCard} />
                            : sectionCart === 'Checkout' ?
                                <Checkout
                                    values={values}
                                    typeOrder={typeOrder}
                                    zones={zones}
                                    setTypeOrder={setTypeOrder}
                                    handleInputChange={handleInputChange} />
                                : sectionCart === 'confirmar' ?
                                    <ConfirmOrder
                                        inCard={props.inCard}
                                        typeOrder={typeOrder}
                                        values={values}
                                        zones={zones}
                                    />
                                    : sectionCart === 'successOrder' ?
                                        <SucessOrder
                                            action={action}
                                            sendWhatsapp={sendWhatsapp}
                                        />
                                        : <></>
                    }
                </div>
                {
                    sectionCart !== 'successOrder' ?
                        <Subtotal
                            addOrder={addOrder}
                            handleSetSection={handleSetSection}
                            sectionCart={sectionCart}
                            loading={loading}
                            setSectionCart={setSectionCart}
                            inCard={props.inCard} /> : <></>
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        inCard: state.inCard,
        isCartMenuActivated: state.isCartMenuActivated
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setActive: (props) => {
            dispatch({ type: "CART_MENU_ACTIVE", status: !(props.isCartMenuActivated) })
        },
        setCart: () => {
            dispatch({ type: "CLEAR_CART" })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartMenu)