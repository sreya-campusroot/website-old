import { authFormTypeState, authState, constantsState, counsellorState, dataState, modalState, objDataState, popUpState, sendOtpResState, sendOtpState, toastState } from "./interfaces";
import popUpReducer from './reducers/components/popUpReducer';









export interface AppState {
    modalReducer: modalState;
    allDestinationsReducer: dataState;
    allUniversitiesReducer: dataState;
    singleCourseReducer: dataState;
    singleUniversityReducer: dataState;
    topUniversitiesReducer: dataState;
    counsellorsReducer: counsellorState;
    sendOtpReducer: sendOtpState;
    verifyOtpReducer: authState;
    registerReducer: authState;
    authFormTypeReducer: authFormTypeState;
    userProfileReducer: dataState;
    editProfileReducer: dataState;
    constantsReducer: constantsState;
    dashboardReducer: objDataState;
    toastReducer: toastState;
    popUpReducer: popUpState
}