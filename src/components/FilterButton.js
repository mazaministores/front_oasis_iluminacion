import React, { useState } from 'react'
import { connect } from 'react-redux'

function FilterButton(props) {

    const [isClicked, setClicked] = useState(false)
    const handle=()=>{
    console.log(props)
    props.updateFilters(props)
    }
    return (
        <div className={`sizes-button ${isClicked ? "sizes-button-clicked":null}`} onClick={() => { 

            handle()
            setClicked(!isClicked)

        }}>{props.categorie}</div>
    )
}

const mapStateToProps = state =>{

    return {
        fiters: state.filters
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateFilters: (props) => {
            dispatch({type: "UPDATE_FILTER", size: props.categorie})
        }
    }
}

export default connect( mapStateToProps, mapDispatchToProps)(FilterButton)