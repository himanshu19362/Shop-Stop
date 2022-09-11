import { useContext , createContext , useReducer } from "react";

export const StateContext = createContext()

export const StateProvider = ({initialState , reducer , children}) => {
    return (
        <StateContext.Provider value={useReducer(reducer , initialState)} key={'provider'}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateValue = () => useContext(StateContext)