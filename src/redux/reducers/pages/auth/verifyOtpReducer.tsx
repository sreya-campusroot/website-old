import types from "../../../types";

const initialState = {
    loading: false,
    data: null,
    error: null,
};
const verifyOtpReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case types.VERIFY_OTP_LOADING:
            return {
                ...state,
                loading: true,
            };
        case types.VERIFY_OTP_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case types.VERIFY_OTP_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};

export default verifyOtpReducer;
