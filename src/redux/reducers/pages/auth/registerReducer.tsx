import types from "../../../types";

const initialState = {
    loading: false,
    data: null,
    error: null,
};
const registerReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case types.REGISTER_LOADING:
            return {
                ...state,
                loading: true,
            };
        case types.REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case types.REGISTER_FAILED:
            console.log('register faild')
            return {
                ...state,
                loading: false,

                error: action.payload,
            };

        default:
            return state;
    }
};

export default registerReducer;
