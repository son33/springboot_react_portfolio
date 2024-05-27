import { combineReducers, legacy_createStore } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const modalDisplayOn = () => ({ type: 'modalOpen' });
export const modalDisplayOff = () => ({ type: 'modalOff' });
export const loginSuccess = () => ({ type: 'loginSuccess' });
export const logoutSuccess = () => ({ type: 'logoutSuccess' });

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['loginResult'],
};

const initModalState = {
    display: "none",
}

const initLoginState = {
    loginResult: 0,
}

const modalReducer = (state = initModalState, action) => {
    switch (action.type) {
        case 'modalOpen':
            return { display: "flex" };
        case 'modalOff':
            return { display: "none" };
        default:
            return state;
    }
}

const loginReducer = (state = initLoginState, action) => {
    switch (action.type) {
        case 'loginSuccess':
            return { loginResult: 1 };
        case 'logoutSuccess':
            return { loginResult: 0 };
        default:
            return state;
    }
}

const rootRducer = combineReducers({
    modal: modalReducer,
    login: loginReducer,
});

const persistedReducer = persistReducer(persistConfig, rootRducer);

const store = legacy_createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };