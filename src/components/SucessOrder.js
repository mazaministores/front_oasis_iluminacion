import React, { useEffect, useState } from 'react'
import useMethods from '../hooks/useMethods'


export default function SucessOrder({action,sendWhatsapp}){
    
    const {methods}=useMethods()
    const [method,setMethod]=useState({data:'',method:''})
    useEffect(()=>{
       if(methods.length!==0) setMethod(methods.find(mth=>mth.method===action.metodoPago))
    },[methods])


    return(
    <div className="container-success-order">
         <p className="text-number-order"></p>
         <h2 className="number-order">Muchas gracias {action.name}</h2>
               <span className="time-order"> Esperamos que vuelvas pronto </span>
        <span className="time-order">Su numero de pedido es: {action.numeroPedido} </span>
         <span className="time-order">Tiempo de entrega: 15m</span>
         <p>Gracias. Recibimos tu pedido</p>
         <p>{action.metodoPago}</p>
         <p className="time-order">{method.data}</p>
         <p>De inmediato te contactaremos para confirmar </p>

         <div className="send-whatsapp" onClick={sendWhatsapp}><span>Enviar pedido al Whatsapp</span></div>
    </div>)
}
