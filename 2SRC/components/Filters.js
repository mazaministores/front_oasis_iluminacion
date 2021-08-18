import React from 'react'
// import FilterButton from './FilterButton'
import { connect } from 'react-redux'
import useArticles from '../hooks/useArticles'


function Filters(props) {

    const { articles } = useArticles()

    let categorieSet = new Set()

    articles.map(item => categorieSet.add(item.categorie))

    categorieSet = Array.from(categorieSet) // set to array

    const handleSelectChange = (e) => {
        props.updateFilters({ categorie: e.target.value, fiters: [e.target.value], updateFilters: props.updateFilters })
    }
    const handleInputChange = (e) => {
        props.searchItem({ item: e.target.value.toUpperCase(), searchItem: props.searchItem })
    }

    return (
        <>
            <div className="container-input-search">
                <input className="input search" type="text" onChange={handleInputChange} placeholder="¿Que estas buscando?" />
            </div>
            <div className="filters">

                <div className="container-select-categorie">
                    <select className="select-categorie" onChange={handleSelectChange}>
                        {/* <optgroup> */}
                        <option value={[]}>Categorias</option>
                        {
                            categorieSet.map(categorie =>
                                <option value={categorie}>{categorie}</option>
                            )
                        }
                        {/* </optgroup> */}

                    </select>
                </div>

            </div>
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