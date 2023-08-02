import types from "../../types";

const initialState = {
    loading: false,
    data: [],
    error: null,
};
const counsellorsReducer = (state = initialState, action: any) => {
    switch (action.type) {

        case types.COUNCELLORS_LOADING:

            return {
                ...state,
                loading: true,
            };
        case types.COUNCELLORS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case types.COUNCELLORS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};

export default counsellorsReducer;
