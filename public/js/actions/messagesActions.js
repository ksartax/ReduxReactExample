import actions from './constatant';

export function addAction(data) {

    return (dispatch) => {
        dispatch({
            type: actions.REQUEST_LOADER,
            value: true
        })

        setTimeout(() => {
            dispatch({
                type: actions.ADD_MESSAGE,
                value: data
            });

            dispatch({
                type: actions.REQUEST_LOADER,
                value: false
            });
          }, 1000);
    };
}

export function removeAction(id) {

    return (dispatch) => {
        dispatch({
            type: actions.REQUEST_LOADER,
            value: true
        })

        setTimeout(() => {
            dispatch({
                type: actions.REMOVE_MESSAGE,
                value: id
            });

            dispatch({
                type: actions.REQUEST_LOADER,
                value: false
            });
          }, 1000);
    }
}

export function changeSurnameMessageAction(value) {
    return {
        type: actions.CHANGE_SURNAME_MESSAGE,
        value
    }
}

export function changeContentMessageAction(value) {
    return {
        type: actions.CHANGE_CONTENT_MESSAGE,
        value
    }
}