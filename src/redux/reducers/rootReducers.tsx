import { combineReducers } from "redux";
import modalReducer from './components/modalRedcer';
import { AppState } from "../appState";
import allDestinationsReducer from './pages/destinations/allDestinationsReducer';
import allUniversitiesReducer from './pages/destinations/allUniversitiesReducer';
import topUniversitiesReducer from './pages/destinations/topUniversitiesReducer';
import singleUniversityReducer from './pages/singleUniversityReducer';
import singleCourseReducer from './pages/singleCourseReducer';
import counsellorsReducer from './pages/counsellorsReducer';

import sendOtpReducer from "./pages/auth/sendOtpReducer";
import verifyOtpReducer from "./pages/auth/verifyOtpReducer";
import registerReducer from "./pages/auth/registerReducer";
import authFormTypeReducer from './pages/auth/authFormTypeReducer';
import userProfileReducer from "./pages/userProfile/userProfileReducer";
import editProfileReducer from "./pages/userProfile/editProfileReducer";
import constantsReducer from './components/constantsReducer';
import dashboardReducer from './pages/myAccount/dashboardReducer';
import toastReducer from "./components/toastReducer";
import popUpReducer from './components/popUpReducer';


const rootReducers = combineReducers<AppState>({
    modalReducer: modalReducer,
    allDestinationsReducer: allDestinationsReducer,
    allUniversitiesReducer: allUniversitiesReducer,
    topUniversitiesReducer: topUniversitiesReducer,
    singleUniversityReducer: singleUniversityReducer,
    singleCourseReducer: singleCourseReducer,
    counsellorsReducer: counsellorsReducer,
    sendOtpReducer: sendOtpReducer,
    verifyOtpReducer: verifyOtpReducer,
    registerReducer: registerReducer,
    authFormTypeReducer: authFormTypeReducer,
    userProfileReducer: userProfileReducer,
    editProfileReducer: editProfileReducer,
    constantsReducer: constantsReducer,
    dashboardReducer: dashboardReducer,
    toastReducer: toastReducer,
    popUpReducer: popUpReducer

});

export default rootReducers;
