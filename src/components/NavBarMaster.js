import React from 'react'
import { useLocation } from 'wouter'
import NavBarButton from './NavBarButton'

export default function NavBarMaster(props) {

    const [, navigate] = useLocation()

    const logout = () => {
        window.localStorage.removeItem('logged')
        navigate('/')
    }

    return (
        <div className="header">
            <div className="header-content" style={{ color: '#fff' }}>
                <span className="header-logo d-sm-none" style={{ color: '#fff' }}>ELECTRILAMPADMIN</span>
                <div className="header-buttons">
                    <div onClick={() => navigate('/master')}>
                        <NavBarButton text="PEDIDOS" {...props} />
                    </div>
                    {/* <div onClick={() => navigate('/master/detail')}>
                        <NavBarButton text="RESUMEN" {...props} />
                    </div> */}
                    <div onClick={() => navigate('/master/articles')}>
                        <NavBarButton text="ARTICULOS" {...props} />
                    </div>
                    <div onClick={() => navigate('/master/others')}>
                        <NavBarButton text="MAS" {...props} />
                    </div>
                    <div onClick={logout}>
                        <NavBarButton text="CERRAR" {...props} />
                    </div>
                </div>
            </div>
        </div>
    )
}