import types from "../../../types";

const initialState = {
    loading: false,
    data: null,
    error: null,
};
const dashboardReducer = (state = initialState, action: any) => {
    switch (action.type) {

        case types.DASHBOARD_LOADING:

            return {
                ...state,
                loading: true,
            };
        case types.DASHBOARD_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case types.DASHBOARD_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};

export default dashboardReducer;
