import React, {useContext, createContext, useReducer} from 'react'

let DataContext = createContext();

export function DataLayerProvider({reducer, initialState, children}) {
    return (
        <DataContext.Provider value= {useReducer(reducer, initialState)}>
            {children}
        </DataContext.Provider>
    )
}

export let useDataLayer = () => useContext(DataContext);