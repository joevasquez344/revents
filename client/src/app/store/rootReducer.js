import {combineReducers} from 'redux';
import testReducer from '../../features/sandbox/testReducer';
import eventReducer from '../../features/events/reducer'

const rootReducer = combineReducers({
    test: testReducer,
    event: eventReducer
})

export default rootReducer;