import types from "../../types";

const initialState = {
    open: false,
    itemId: '',
    handleOk: () => { },
};
const popUpReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case types.OPEN_POPUP:
            return {
                ...state,
                open: true,
                itemId: action.payload.itemId,
                handleOk: action.payload.handleOk,

            };

        case types.CLOSE_POPUP:
            return {
                ...state,
                open: false,
            };
        default:
            return state;
    }
};

export default popUpReducer;
