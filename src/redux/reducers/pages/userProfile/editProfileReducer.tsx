import types from "../../../types";

const initialState = {
    loading: false,
    data: [],
    error: null,
};
const editProfileReducer = (state = initialState, action: any) => {
    switch (action.type) {

        case types.EDIT_USER_PROFILE_LOADING:

            return {
                ...state,
                loading: true,
            };
        case types.EDIT_USER_PROFILE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case types.EDIT_USER_PROFILE_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};

export default editProfileReducer;
