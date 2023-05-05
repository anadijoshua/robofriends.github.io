import {CHANGE_SEARCHFIELD} from './constant';


export const setSearchField = (text) => ({
    type: CHANGE_SEARCHFIELD,
    payload: text
})