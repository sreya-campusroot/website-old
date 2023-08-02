import types from "../../../types";

const initialState = {
    loading: false,
    data: [],
    error: null,
};
const userProfileReducer = (state = initialState, action: any) => {
    switch (action.type) {

        case types.USER_PROFILE_LOADING:

            return {
                ...state,
                loading: true,
            };
        case types.USER_PROFILE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case types.USER_PROFILE_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};

export default userProfileReducer;
