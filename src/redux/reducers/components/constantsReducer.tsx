import types from "../../types";

const initialState = {
    show_ok_btn: false
};
const constantsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case types.SET_CONSTANTS:
            return {
                ...state,
                show_ok_btn: action.payload.show_ok_btn
            };

        default:
            return state;
    }
};

export default constantsReducer;
