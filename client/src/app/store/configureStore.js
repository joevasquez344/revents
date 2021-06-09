import { createStore } from 'redux';
import testReducer from '../../features/sandbox/testReducer';
import {devToolsEnhancer} from 'redux-devtools-extension';
import rootReducer from './rootReducer';

const configureStore = () => {
    return createStore(rootReducer, devToolsEnhancer({trace: true}))
}

export default configureStore;