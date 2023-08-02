import types from "../../../types";

const initialState = {
    loading: false,
    data: null,
    phoneNumber: "",
    error: null,
};
const sendOtpReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case types.SEND_OTP_LOADING:
            return {
                ...state,
                loading: true,
            };
        case types.SEND_OTP_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload.data,
                phoneNumber: action.payload.phoneNumber
            };
        case types.SEND_OTP_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};

export default sendOtpReducer;
