import React from 'react'

export default function NavBarButton(props) {
    return (
        <div className="container-buttons">
            <span className={`header-button ${(props.currentPage === props.text) ? "current-page-border": null}`}>{props.text}</span>
        </div>
    )
}
