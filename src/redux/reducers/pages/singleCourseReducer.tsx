import types from "../../types";

const initialState = {
    loading: false,
    data: [],
    error: null,
};
const singleCourseReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case types.SINGLE_COURCE_LOADING:
            return {
                ...state,
                loading: true,
            };
        case types.SINGLE_COURCE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case types.SINGLE_COURCE_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};

export default singleCourseReducer;
