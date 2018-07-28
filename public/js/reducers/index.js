import { combineReducers } from 'redux';

import messagesReduces from './messagesReduces';
import requestReduces from './requestReducer';

const reducer = combineReducers({
    messagesReduces,
    requestReduces
});

export default reducer;