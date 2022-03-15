import {
    USERS_LOAD_START,
    USERS_LOAD_SUCCESS,
    USERS_LOAD_ERROR,

} from './types';


export const load_users = () => async dispatch => { 
    dispatch({
        type:USERS_LOAD_START
    });
    try{
        const res = await fetch('https://randomuser.me/api/?results=50', {
            method: "GET",
            headers: {
                'Accept':'application/json'
            }
        });
        

        const data = await res.json();
        
        if (res.status === 200) {
            dispatch({
                type: USERS_LOAD_SUCCESS,
                payload: data
            });            
        } else {
            dispatch({
                type: USERS_LOAD_ERROR
            });
        }
        if (typeof window !== "undefined") {
            localStorage.setItem("localUsers", JSON.stringify(data.results))
        }
        
    }catch(err){
        dispatch({
            type:USERS_LOAD_ERROR
        });
    }
}

