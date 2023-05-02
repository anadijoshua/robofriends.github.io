import {CREATE_SEARCH_FIELD} from './constant';

export const setSearchField = (text) => ({
    type: CREATE_SEARCH_FIELD,
    payload: text
})