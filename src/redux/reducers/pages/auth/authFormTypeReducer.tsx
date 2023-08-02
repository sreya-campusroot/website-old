import types from "../../../types";

const initialState = {

    form_type: types.layout.SEND_OTP_FORM,

};
const authFormTypeReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case types.layout.AUTH_FORM_TYPE:
            return {
                ...state,

                form_type: action.payload

            };


        default:
            return state;
    }
};

export default authFormTypeReducer;
