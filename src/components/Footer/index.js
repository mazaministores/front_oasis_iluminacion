import React from 'react'
import { useLocation } from 'wouter'
import styles from './footer.module.scss'

export default function Footer() {

    const [, navigate] = useLocation()

    const categories = [
        'EMPOTRADOS',
        'ILUMINACIÓN LED',
        'BOMBILLO',
        'LAMPARAS DECORATIVAS',
        'TUBOS',
        'CONTROL',
        'CONEXIONES',
        'CABLES',
        'CANALETAS',
        'TOMAS',
        'SOCATES',
        'VAPOLETAS',
        'REFLECTORES'
    ]
    return (
        <footer className={styles.container__Footer}>
            <div>
                <h4>Información Fiscal</h4>
                <p className={styles.text}>
                    Oasis Iluminación C.A. J408450445
                    Miranda,Urbanización Chacao,
                    Calle Paez Ed Santa Ana Local J
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
