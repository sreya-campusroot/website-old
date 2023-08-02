import types from "../../types";

const initialState = {
    open: false,
    modal_type: '',
    modal_data: null,
    handleOk: () => { },
};
const modalReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case types.MODAL_OPEN:
            return {
                ...state,
                open: true,
                modal_type: action.payload.modal_type,
                modal_data: action.payload.modal_data

            };

        case types.MODAL_CLOSE:
            console.log('MODAL_CLOSE')
            return {
                ...state,
                open: false,
            };
        default:
            return state;
    }
};

export default modalReducer;
