import React from 'react'
import ShoppingPage from '../../components/ShoppingPage';
import { Provider } from 'react-redux'
import store from '../../redux/store'
import Layout from '../../components/Layout';

export default function OffersPage() {


    const articles = [
        {
            brand: "BOMBILLO LED 6W MARCA PLATINIUM LED",
            model: "BOMBILLO LED 6W MARCA PLATINIUM LED",
            price: 1.1,
            image: "https://firebasestorage.googleapis.com/v0/b/electrilamp-f53b2.appspot.com/o/image%2F3.jpg?alt=media&token=22474d94-c2cb-494a-95ab-b932717fe21b",
            categorie: "ILUMINACIÓN LED",
            __v: 0,
            id: "60f9766bc936130015c54d07"
        },
        {
            "brand": "BOMBILLO LED 7W MARCA PLATINIUM LED",
            model: "BOMBILLO LED 7W MARCA PLATINIUM LED",
            price: 1,
            image: "https://firebasestorage.googleapis.com/v0/b/electrilamp-f53b2.appspot.com/o/image%2F3.jpg?alt=media&token=22474d94-c2cb-494a-95ab-b932717fe21b",
            categorie: "ILUMINACIÓN LED",
            __v: 0,
            id: "60f9769ac936130015c54d08"
        },
        {
            "brand": "BOMBILLO LED 9W MARCA PLATINIUM",
            model: "BOMBILLO LED 9W MARCA PLATINIUM",
            price: 1.2,
            image: "https://firebasestorage.googleapis.com/v0/b/electrilamp-f53b2.appspot.com/o/image%2F3.jpg?alt=media&token=2eb37e6c-9fa9-4c13-a905-1f04f537b80f",
            categorie: "ILUMINACIÓN LED",
            __v: 0,
            id: "60f976bbc936130015c54d09"
        },
        {
            "brand": "BOMBILLO LED 10W MARCA PLATINIUM",
            model: "BOMBILLO LED 10W MARCA PLATINIUM",
            price: 1.3,
            image: "https://firebasestorage.googleapis.com/v0/b/electrilamp-f53b2.appspot.com/o/image%2F3.jpg?alt=media&token=2eb37e6c-9fa9-4c13-a905-1f04f537b80f",
            categorie: "ILUMINACIÓN LED",
            __v: 0,
            id: "60f976d3c936130015c54d0a"
        },
        {
            "brand": "BOMBILLO LED 12W MARCA PLATINIUM",
            model: "BOMBILLO LED 12W MARCA PLATINIUM",
            price: 1.4,
            image: "https://firebasestorage.googleapis.com/v0/b/electrilamp-f53b2.appspot.com/o/image%2F3.jpg?alt=media&token=2eb37e6c-9fa9-4c13-a905-1f04f537b80f",
            categorie: "ILUMINACIÓN LED",
            __v: 0,
            id: "60f976e6c936130015c54d0b"
        },
        {
            "brand": "BOMBILLO LED 15W MARCA PLATINIUM",
            model: "BOMBILLO LED 15W MARCA PLATINIUM",
            price: 1.5,
            image: "https://firebasestorage.googleapis.com/v0/b/mzmenudigital.appspot.com/o/image%2FBOMBILLO%20LED.jpg?alt=media&token=dbd6e054-2a97-449b-a1bd-aed45fd6ef76",
            categorie: "ILUMINACIÓN LED",
            __v: 0,
            id: "60f976f5c936130015c54d0c"
        },
        {
            "brand": "BOMBILLO LED 20W MARCA PLATINIUM",
            model: "BOMBILLO LED 20W MARCA PLATINIUM",
            price: 1.8,
            image: "https://firebasestorage.googleapis.com/v0/b/electrilamp-f53b2.appspot.com/o/image%2F3.jpg?alt=media&token=b9c24f8d-763f-46dc-998b-69b33f9ce994",
            categorie: "ILUMINACIÓN LED",
            __v: 0,
            id: "60f97707c936130015c54d0d"
        },
        {
            "brand": "BOMBILLO LED 28W MARCA PLATINIUM",
            mdel: "BOMBILLO LED 28W MARCA PLATINIUM",
            price: 2.83,
            image: "https://firebasestorage.googleapis.com/v0/b/mzmenudigital.appspot.com/o/image%2FBOMBILLO%20LED.jpg?alt=media&token=dbd6e054-2a97-449b-a1bd-aed45fd6ef76",
            categorie: "ILUMINACIÓN LED",
            "__v": 0,
            id: "60f9771ec936130015c54d0e"
        },
        {
            brand: "PROTECTOR TONAL TR-1 120V ",
            model: "PROTECTOR TONAL TR-1 120V ",
            price: 13,
            image: "https://firebasestorage.googleapis.com/v0/b/electrilamp-f53b2.appspot.com/o/image%2FPROTECTOR%20TONAL%20TR-1.jfif?alt=media&token=dbfe0b77-1bb2-4efe-be24-7f5d1fee8c5a",
            categorie: "PROTECTORES Y REGULADORES",
            __v: 0,
            id: "613f7ef04bd2ab00163c3962"
        },
        {
            brand: "PROTECTOR TONAL TR-2 220V",
            model: "PROTECTOR TONAL TR-2 220V",
            price: 13,
            image: "https://firebasestorage.googleapis.com/v0/b/electrilamp-f53b2.appspot.com/o/image%2FPROTECTOR%20TONAL%20TR-2.jfif?alt=media&token=84688360-e732-4d34-bae9-4808845c7ce3",
            categorie: "PROTECTORES Y REGULADORES",
            __v: 0,
            id: "613f7f494bd2ab00163c3963"
        },
        {
            brand: "PROTECTOR TONAL TE-1 ",
            model: "PROTECTOR TONAL TE-1 ",
            price: 13,
            image: "https://firebasestorage.googleapis.com/v0/b/electrilamp-f53b2.appspot.com/o/image%2FPROTECTOR%20TONAL%20TE-1.jpg?alt=media&token=d3d80250-4c6b-4d48-9573-5004f8fbdaf3",
            categorie: "PROTECTORES Y REGULADORES",
            __v: 0,
            id: "613f7fbb4bd2ab00163c3964"
        },
        {
            brand: "LÁMPARA CIRCULAR  32W COMPLETA",
            model: "LÁMPARA CIRCULAR  32W COMPLETA ",
            price: 5,
            image: "https://firebasestorage.googleapis.com/v0/b/electrilamp-f53b2.appspot.com/o/image%2FLAMPARA%20CIRCULAR%20COMPACTLUX%2032W%20SUNLITE.jpg?alt=media&token=d51aa61b-0f42-4b37-bd5b-cf0b69fc2bff",
            categorie: "LAMPARAS DECORATIVAS",
            __v: 0,
            id: "611e3f69b4678b7e289820be"
        },
        {
            brand: "LÁMPARA CIRCULAR 22W COMPLETA",
            model: "LÁMPARA CIRCULAR 22W COMPLETA",
            price: 3,
            image: "https://firebasestorage.googleapis.com/v0/b/electrilamp-f53b2.appspot.com/o/image%2FLAMP%20CIRCU.jpg?alt=media&token=ae8eed18-8b2d-40a8-80d7-394d6d45756e",
            categorie: "LAMPARAS DECORATIVAS",
            __v: 0,
            id: "6124471f8b14490016b5e777"
        },
        {
            brand: "SOCATE ALEMÁN E14 NEGRO ",
            model: "SOCATE ALEMÁN E14 NEGRO ",
            price: 2.3,
            image: "https://firebasestorage.googleapis.com/v0/b/electrilamp-f53b2.appspot.com/o/image%2FSOCATE%20ALEMAN%20E14%20NEGRO%20MASTER.jpg?alt=media&token=abc9167f-5d64-4521-b2c0-2dedbcf2b5ff",
            categorie: "MISCELANEAS",
            __v: 0,
            id: "611e3f73b4678b7e289824a0"
        },
        {
            brand: "SOCATE E27 BAQUELITA NEGRA ",
            model: "SOCATE E27 BAQUELITA NEGRA",
            price: 3.5,
            image: "https://firebasestorage.googleapis.com/v0/b/electrilamp-f53b2.appspot.com/o/image%2FSCT08.jpg?alt=media&token=b99c334e-ea5b-4499-aeb0-4c780fb8a3c6",
            categorie: "SOCATES",
            __v: 0,
            id: "611e3f73b4678b7e289821d4"
        },
        {
            brand: "SOCATE E27 BRONCE Y  CERÁMICA ",
            model: "SOCATE E27 BRONCE Y  CERÁMICA ",
            price: 3,
            image: "https://firebasestorage.googleapis.com/v0/b/electrilamp-f53b2.appspot.com/o/image%2FSOCATE%20DE%20NIPLE%20E27%20BRONCE%20%20CERAMICA.jpg?alt=media&token=d8eeeddc-cc79-4d23-9aca-e54bbfdcf7a9",
            categorie: "SOCATES",
            __v: 0,
            id: "611e3f69b4678b7e28981f61"
        },
        {
            brand: "SOCATE E27 DE GOMA CON PORCELANA",
            model: "SOCATE E27 DE GOMA CON PORCELANA ",
            price: 0.68,
            image: "https://firebasestorage.googleapis.com/v0/b/electrilamp-f53b2.appspot.com/o/image%2FSOCATE%20E27%20DE%20GOMA%20CON%20PORCELANA.jpg?alt=media&token=222787f1-0e1e-4033-8e7d-7c421f25a60a",
            categorie: "SOCATES",
            __v: 0,
            id: "611e3f69b4678b7e28981ed6"
        },
        {
            brand: "SOCATE E27 INTERRUPTOR CON CADENA CLOSTER",
            model: "SOCATE E27 INTERRUPTOR CON CADENA  CLOSTER",
            price: 2,
            image: "https://firebasestorage.googleapis.com/v0/b/electrilamp-f53b2.appspot.com/o/image%2FSOCATE%20E27%20INTERRUPTOR%20CON%20CADENA%20CLOSTER.jpg?alt=media&token=cd104c4b-f633-427c-a1d5-84eac3384fbc",
            categorie: "SOCATES",
            __v: 0,
            id: "611e3f69b4678b7e28981e0c"
        },
        {
            brand: "TEIPE NEGRO 165 DE USO PROFESIONAL  3M",
            model: "TEIPE NEGRO 165 DE USO PROFESIONAL  3M ",
            price: 3,
            image: "https://firebasestorage.googleapis.com/v0/b/electrilamp-f53b2.appspot.com/o/image%2FTEIPE%20NEGRO%20165%20DE%20USO%20PROFESIONAL%2018%2C3%20MTRS%203M.jpg?alt=media&token=be704a40-68e6-40a9-8cc2-651e4e816fd7",
            categorie: "MISCELANEAS",
            __v: 0,
            id: "611e3f69b4678b7e28982019"
        }, {
            brand: "LAMPARA HERMETICA 2X17 110V CON BOMBILLO ",
            model: "LAMPARA HERMETICA 2X17 110V CON BOMBILLO ",
            price: 12,
            image: "https://firebasestorage.googleapis.com/v0/b/electrilamp-f53b2.appspot.com/o/image%2FLAMPARA%20HERMETICA.jpg?alt=media&token=4f36f495-fc83-4282-9764-0b2d7dceacbe",
            categorie: "LAMPARAS DECORATIVAS",
            __v: 0,
            id: "613fff36d3adde00161fd1a9"
        },
        {
            brand: "LAMPARA HERMETICA 2X17 110V SIN BOMBILLO",
            model: "LAMPARA HERMETICA 2X17 110V SIN BOMBILLO",
            price: 10,
            image: "https://firebasestorage.googleapis.com/v0/b/electrilamp-f53b2.appspot.com/o/image%2FLAMPARA%20HERMETICA.jpg?alt=media&token=4f36f495-fc83-4282-9764-0b2d7dceacbe",
            categorie: "LAMPARAS DECORATIVAS",
            __v: 0,
            id: "613fff18d3adde00161fd1a8"
        },
        {
            brand: "VAPOLETA CON BOMBILLO SPLENDOR",
            model: "VAPOLETA CON BOMBILLO SPLENDOR",
            price: 3,
            image: "https://firebasestorage.googleapis.com/v0/b/electrilamp-f53b2.appspot.com/o/image%2FLAMPARA%20SPLENDOR.jpg?alt=media&token=c22f833e-2e2a-4161-8845-a3f6f74b6e30",
            categorie: "VAPOLETAS",
            __v: 0,
            id: "61400129d3adde00161fd1aa"
        },
        {
            brand: "TUBO FLUORECENTE 17W",
            model: "TUBO FLUORECENTE 17W",
            price: 1.5,
            image: "https://firebasestorage.googleapis.com/v0/b/electrilamp-f53b2.appspot.com/o/image%2Ftubo%20fluorecente.jpg?alt=media&token=e6ff2aea-1ea4-4840-8802-25b5b52e0c2f",
            categorie: "TUBOS",
            __v: 0,
            id: "6140028ed3adde00161fd1ac"
        },
        {
            brand: "TUBO FLUORECENTE 32W",
            model: "TUBO FLUORECENTE 32W",
            price: 1.5,
            image: "https://firebasestorage.googleapis.com/v0/b/electrilamp-f53b2.appspot.com/o/image%2Ftubo%20fluorecente.jpg?alt=media&token=e6ff2aea-1ea4-4840-8802-25b5b52e0c2f",
            categorie: "TUBOS",
            __v: 0,
            id: "61400258d3adde00161fd1ab"
        }
    ]

    const loading = false

    return (
        <Provider store={store}>
            <Layout>
                <div className="App">
                    <ShoppingPage title={'OFERTAS'} articles={articles} loading={loading} />
                </div>
            </Layout>
        </Provider>
    )
}