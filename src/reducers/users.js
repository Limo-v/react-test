import {
    USERS_LOAD_START,
    USERS_LOAD_SUCCESS,
    USERS_LOAD_ERROR
} from '../actions/types';


const initialState = {
    isLoading: false,
    users: null,
    errorMessage: null
};

const userReducer = (state = initialState, action) => {
    
    const { type, payload} = action;

    switch (type) {
        case USERS_LOAD_START:
            return{
                ...state,
                isLoading: true,
                users: null,
                errorMessage: null,
            };
            
        case USERS_LOAD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                users: payload
            };

        case USERS_LOAD_ERROR:
            return{
                ...state,
                isLoading: false,
                errorMessage: payload
            };

        default:
            return state        

    }
};

export default userReducer