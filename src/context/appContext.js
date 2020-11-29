import {createContext, useReducer} from 'react';

export const AppContext = createContext();

const initialState = {
    isLogin: false,
    payment: false,
    player:false,
    musics:"",
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
                player:false,
                payment:false,
                musics:"",
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
        case "PLAYER_ON":
            return {
                ...state,
                 player: true,
                 musics: action.payload,
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