import React , {  useState, createContext } from 'react';


export const AppContext = createContext();

export const AppProvider = (props) => {


    const [ caseArray , setCaseArray ] = useState([]);
    const [coordsValue , setCoordsValue] = useState('');


    return (
            <AppContext.Provider value={{
                 reportCase: [caseArray , setCaseArray],
                 coordsLocation : [coordsValue , setCoordsValue]
            }} >
                {props.children}
            </AppContext.Provider>
    )
}