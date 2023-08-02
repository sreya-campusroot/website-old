import types from "../../../types";

const initialState = {
    loading: false,
    data: [],
    error: null,
};
const topUniversitiesReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case types.TOP_UNIVERSITIES_LOADING:
            return {
                ...state,
                loading: true,
            };
        case types.TOP_UNIVERSITIES_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case types.TOP_UNIVERSITIES_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};

export default topUniversitiesReducer;
