import {CREATE_SEARCH_FIELD} from './constant';

const initialState = {
    searchField: '' 
}

export const searchRobots = (state = initialState, action = {}) => {
    switch(action.type){
        case CREATE_SEARCH_FIELD:
        return   Object.assign({}, state, {searchField: action.payload});
    }
    return state
} 