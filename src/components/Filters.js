import React, { useEffect } from 'react'
import { connect } from 'react-redux'


function Filters(props) {


    useEffect(() => {

        if (props.search) {
            props.updateFilters({ categorie: props.search, fiters: props.search, updateFilters: props.updateFilters })
        } else {
            props.searchItem({ item: props.searchForm, searchItem: props.searchItem })
        }

    }, [props])





    return (
        <>
        </>
    )
}

const mapStateToProps = state => {
    return {
        fiters: state.filters
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateFilters: (props) => {
            dispatch({ type: "UPDATE_FILTER", size: props.categorie })
        }, searchItem: (props) => {
            dispatch({ type: "SEARCH_ITEM", size: props.item })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters)