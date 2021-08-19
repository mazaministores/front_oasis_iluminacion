import React from 'react'
import { useLocation } from 'wouter'
import styles from './footer.module.scss'

export default function Footer() {

    const [, navigate] = useLocation()

    const categories = [
        'EMPOTRADOS',
        'ILUMINACIÓN LED',
        'BOMBILLO',
        'LAMPARAS',
        'CAJAS METALICAS',
        'TUBOS',
        'CONEXIONES',
        'VARIOS',
        'CABLES',
        'PROTECTORES Y REGULADORES',
        'CANALETAS',
        'TOMAS',
        'INTERRUPTORES',
        'SOCATES',
        'BREAKER',
        'HERRAMIENTAS',
        'BATERIAS',
        'TRANSFORMADORES',
        'CONTACTORES',
        'VAPOLETAS',
        'REFLECTORES'
    ]
    return (
        <footer className={styles.container__Footer}>
            <div>
                <h4>Información Fiscal</h4>
                <p className={styles.text}>
                    Electricamente DCN, C.A.
                    CALLE ARTURO USLAR PIETRI ESQUINA SUCRE EDIF ENSANCHE MOHEDANO PISO PB LOCAL 7
                    J411970158
                </p>
            </div>
            <div>
                <h4>Productos</h4>
                <ul className={styles.list}>
                    {
                        categories.map(item => <li key={item} onClick={() => navigate(`/category/${item}`)}>{item}</li>)
                    }
                </ul>
            </div>
        </footer>
    )
}