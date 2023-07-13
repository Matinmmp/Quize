import React, { useEffect, useReducer, useState } from 'react'

const MainContext = React.createContext();

const initialData = {
    status: 'notActive',
    questions: []
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'status':
            return { ...state, status: action.status }
        case 'setQuestions':
            return { ...state, status: action.status, questions: action.questions }
    }
}

function MainProvider(props) {
    const[state, dispatch] = useReducer(reducer, initialData);
    const {status, questions} = state;
    
    const setData = (input) => {
        if (input.questions)
            dispatch({ type: 'setQuestions', status: input.status, questions: input.questions })
        if (!input.questions && input.status)
            dispatch({ type: 'status', status: input.status})

    }
    return <MainContext.Provider value={{ status, questions, setData }}>{props.children}</MainContext.Provider>
}


export { MainProvider, MainContext };

