import {createContext, useReducer} from 'react';

export const AppContext = createContext();

const initialState = {
    isLogin: false,
    payment: false,
};

const reducer = (state, action) => {
    switch (action.type){
        case "LOGIN":
            return{
                ...state,
                isLogin:true,
            };
        case "LOGOUT":
            return {
                ...state,
                isLogin: false,
            };
        case "PAYMENT":
            return {
                ...state,
                payment: true,
            };
        case "PAYOUT":
            return {
                ...state,
                payment: false,
            };
        default:
            throw new Error();
    }
};

export const AppContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return(
        <AppContext.Provider value={[state, dispatch]}>
            {props.children}
        </AppContext.Provider>
    );
};