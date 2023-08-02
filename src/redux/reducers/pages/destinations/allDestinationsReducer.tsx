import types from "../../../types";

const initialState = {
    loading: false,
    data: [],
    error: null,
};
const allDestinationsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case types.ALL_DESTINATIONS_LOADING:
            return {
                ...state,
                loading: true,
            };
        case types.ALL_DESTINATIONS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case types.ALL_DESTINATIONS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};

export default allDestinationsReducer;
