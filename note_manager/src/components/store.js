import {noteData} from './firebaseConnect';

var redux = require('redux');
const noteInitialState = {
    isEdit: false,
    editItem:{}
}
//reducer quan lu state
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            noteData.push(action.getItem);
            console.log(('Them du lieu' +JSON.stringify(action.getItem) + "thanh cong"));
            return state
        case "CHANGE_EDIT_STATUS":
            return {...state,isEdit:!state.isEdit}
        case "GET_EDIT_DATA ":
            return {...state,editItem: action.editObject}
        default:
            return state
    }
}
var store =redux.createStore(allReducer);
//store quan ly reducer
store.subscribe(function(){
    console.log(JSON.stringify(store.getState()));
})
export default store;