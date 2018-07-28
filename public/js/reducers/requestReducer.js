import actions from '../actions/constatant';

const messagesState = {
    isLoader: false
}

const requestReduces = (state = messagesState, action) => {
    switch (action.type) {
        case actions.REQUEST_LOADER: {
            return {
                isLoader: action.value
            }
        }
    }

    return state;
}

export default requestReduces;