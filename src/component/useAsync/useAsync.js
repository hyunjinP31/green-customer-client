import React, { useEffect, useReducer } from 'react';

const initailState = {
    loading: false,
    error: null,
    data: null,
}

const reducer = (state, action)=>{
    switch(action.type){
        case 'LOADING':
            return {
                loading: true,
                error: null,
                data: null,
            };
        case 'SUCCESS' :
            return {
                loading: false,
                error: null,
                data: action.data,
            };
        case 'ERROR' :
            return {
                loading: false,
                error: action.e,
                data: null,
            };
        default :
            return state;
    }
}

const useAsync = (callback, deps) => {
    const [state, dispatch] = useReducer(reducer, initailState);
    const fetchData = async ()=>{
        dispatch({type:'LOADING'});
        try{
            const data = await callback();
            dispatch({type:'SUCCESS', data: data})
        }
        catch(e) {
            console.log(e);
            dispatch({type:'ERROR', error: e})
        }
    }
    useEffect(()=>{
        fetchData();
        // eslint-disable-next-line
    },deps)
    return [state, fetchData];
};

export default useAsync;