import React from 'react'
import InstagramIcon from '../../icons/Instagram'

export default function InstagramLogo() {



    return (
        <div style={{ marginRight: '20px' }} onClick={() => window.open('https://www.instagram.com/electrilamp2090/')}>
            <div >
                <InstagramIcon />
            </div>
        </div>
    )
}

