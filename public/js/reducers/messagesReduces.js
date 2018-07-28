import actions from '../actions/constatant';
import id from 'shortid';

const messagesState = {
    messages: [],
    surname: "",
    content: ""
}

const messagesReduces = (state = messagesState, action) => {
    switch (action.type) {
        case actions.ADD_MESSAGE: {
            return { 
                ...state,
                messages: [
                     ...state.messages, 
                     {...action.value, id: id()}
                ]
            }
        }
        case actions.REMOVE_MESSAGE: {
            const index = state.messages.findIndex(function(element) {
                return element.id == action.value; 
            });

            let newArray = [...state.messages];
            newArray.splice(index, 1);

            return {
                ...state,
                messages: newArray
            }      
        }
        case actions.CHANGE_SURNAME_MESSAGE: {
            return {
                ...state,
                surname: action.value
            }   
        }
        case actions.CHANGE_CONTENT_MESSAGE: {
            return {
                ...state,
                content: action.value
            }   
        }
    }

    return state;
}

export default messagesReduces;