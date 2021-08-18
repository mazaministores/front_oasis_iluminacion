

const initState = {
    inCard: [],
    isCartMenuActivated: false,
    filters: [],
    isAddArticleActivated: false,
    isUpdateArticleActivated: false,
    article: {},
    modal: false,
}

const rootReducer = (state = initState, action) => {

    if (state.inCard.length === 0) {
        const cardInStorage = localStorage.getItem('card')
        if (JSON.parse(cardInStorage)) {
            if (JSON.parse(cardInStorage).length !== 0) {
                return { ...state, inCard: JSON.parse(cardInStorage) }
            }
        }
    }

    if (action.type === "ADD_LIST") {
        localStorage.setItem('card', JSON.stringify([...state.inCard, action.item]))
        return {
            ...state,
            inCard: [...state.inCard, action.item],
            modal: action.item
        }
    }

    else if (action.type === "INCREMENT_ITEM_PIECE") {
        state.inCard.find(x => x.id === action.item.id).piece++
        localStorage.setItem('card', JSON.stringify([...state.inCard]))
        return {
            ...state,
            inCard: [...state.inCard],
        }
    }

    else if (action.type === "DECREMENT_ITEM_PIECE") {
        if (action.item.piece !== 1)
            state.inCard.find(x => x.id === action.item.id).piece--
        else if (action.item.piece === 1) {
            let index = state.inCard.findIndex(x => x.id === action.item.id)
            state.inCard.splice(index, 1)
        }
        localStorage.setItem('card', JSON.stringify([...state.inCard]))
        return {
            ...state,
            inCard: [...state.inCard]
        }
    }
    else if (action.type === "CLEAR_CART") {

        localStorage.setItem('card', JSON.stringify([]))
        return {
            ...state,
            inCard: []
        }
    }

    else if (action.type === "CART_MENU_ACTIVE") {
        return {
            ...state,
            isCartMenuActivated: action.status
        }
    } else if (action.type === "ADD_ARTICLE_ACTIVE") {
        return {
            ...state,
            isAddArticleActivated: action.status
        }
    } else if (action.type === "UPDATE_ARTICLE_ACTIVE") {
        return {
            ...state,
            isUpdateArticleActivated: action.status,
            article: action.article,
        }
    } else if (action.type === "UPDATE_FILTER") {
        console.log(action.size)
        // (state.filters.findIndex(x => x === action.size)) === -1 ? state.filters.push(action.size) : state.filters.splice((state.filters.findIndex(x => x === action.size)), 1)
        return {
            ...state,
            search: false,
            filters: action.size ? [action.size] : []
        }
    } else if (action.type === "SEARCH_ITEM") {
        // (state.filters.findIndex(x => x === action.size)) === -1 ? state.filters.push(action.size) : state.filters.splice((state.filters.findIndex(x => x === action.size)), 1)
        return {
            ...state,
            search: true,
            filters: action.size ? [action.size] : []
        }
    } else if (action.type === "ACTIVE_MODAL") {
        return {
            ...state,
            modal: action.item
        }
    } else if (action.type === "DESACTIVE_MODAL") {
        return {
            ...state,
            modal: false
        }
    }
    else {
        return state
    }
}

export default rootReducer;