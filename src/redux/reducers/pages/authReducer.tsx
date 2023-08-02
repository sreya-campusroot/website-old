import types from "../../types";

const initialState = {


    send_otp: {
        loading: false,
        data: null,
        error: null,
    },
    // verify_otp: {
    //     loading: false,
    //     data: null,
    //     error: null,
    // },
    // register: {
    //     loading: false,
    //     data: null,
    //     error: null,
    // }

};
const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case types.SINGLE_UNIVERSITY_LOADING:
            return {
                ...state,
                loading: true,
            };
        case types.SINGLE_UNIVERSITY_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case types.SINGLE_COURCE_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};

export default authReducer;
