import types from "../../types";

const initialState = {
    open: false,
    data: null,

};
const toastReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case types.layout.OPEN_TOP_TOAST:
            return {
                ...state,
                open: true,

                data: action.payload

            };

        case types.layout.CLOSE_TOP_TOAST:
            return {
                ...state,
                open: false,
                data: null
            };
        default:
            return state;
    }
};

export default toastReducer;
