//public

import api from "./baseUrl"
import { addToCartEndPoint, allCoursesEndpoint, allDestinationsEndPoint, allUniveristiesByDestinationEndpoint, counsellorsEndpoint, dashboardEndPoint, editCartEndPoint, editProfileEndPoint, editShortListEndPoint, singleCourceEndpoint, singleUniversityEndpoint } from "./endPoints"
import store from "../redux/store"
import types from "../redux/types"
import Images from "../assets"
import { topUniveristiesByDestinationEndpoint } from './endPoints';
import { addToShortListEndPoint } from './endPoints';

const openModal = (modalType: string) => {

    store.dispatch({ type: types.MODAL_OPEN, payload: { modal_type: modalType } })

}

const closeModal = () => {
    console.log('close modal')
    store.dispatch({ type: types.MODAL_CLOSE })
    if (localStorage.getItem('courseId')) {
        localStorage.removeItem('courseId')
    }
}

const getHeaders = () => {
    const token = localStorage.getItem('token')
    const headers = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        }
    }
    return headers
}

const headers = getHeaders()
const getAllDestinations = async () => {

    try {
        const { data } = await api.get(allDestinationsEndPoint())

        if (data.success) {
            store.dispatch({ type: types.ALL_DESTINATIONS_SUCCESS, payload: data.data })
        }

    }
    catch {

    }

}


const getAllUniveristiesByDestination = async (country: string) => {
    try {
        const { data } = await api.get(allUniveristiesByDestinationEndpoint(country))
        console.log('all universities', data);

    }
    catch {

    }

}

const addToShortList = async (universityId: string, courseId: string) => {


    const headers = getHeaders()

    try {
        await api.post(addToShortListEndPoint(), {
            universityId: universityId,
            courseId: courseId
        }, headers)

        store.dispatch({ type: types.layout.OPEN_TOP_TOAST, payload: { success: true, heading: ' Shortlisted ', text: 'you can view your shortlisted courses in dashboard' } })

    }
    catch {
        store.dispatch({ type: types.layout.OPEN_TOP_TOAST, payload: { error: true, heading: ' Already Shortlisted ', text: 'you can view your shortlisted courses in dashboard' } })
    }

}

const addToCart = async (universityId: string, courseId: string) => {


    const headers = getHeaders()

    try {
        await api.post(addToCartEndPoint(), {
            universityId: universityId,
            courseId: courseId
        }, headers)

        store.dispatch({ type: types.layout.OPEN_TOP_TOAST, payload: { success: true, heading: ' Added to Cart ', text: 'you can view your Cart items in your account cart section' } })

    }
    catch {
        store.dispatch({ type: types.layout.OPEN_TOP_TOAST, payload: { error: true, heading: ' Already added to cart ', text: 'you can view your Cart items in your account cart section' } })
    }

}

const editShortList = async (itemId: any) => {
    const headers = getHeaders()
    try {
        const { data } = await api.patch(editShortListEndPoint(itemId), headers)
        console.log('edit short list res', data);
        store.dispatch({ type: types.layout.OPEN_TOP_TOAST, payload: { success: true, heading: 'Deleted! Succesfully' } })
    }
    catch {
        store.dispatch({ type: types.layout.OPEN_TOP_TOAST, payload: { error: true, heading: ' Already deleted ' } })
    }

}

const editCart = async (itemId: any) => {
    const headers = getHeaders()
    try {
        const { data } = await api.patch(editCartEndPoint(itemId), headers)
        console.log('edit cart res', data);
        store.dispatch({ type: types.layout.OPEN_TOP_TOAST, payload: { success: true, heading: 'Deleted succesfully! ' } })
    }
    catch {
        store.dispatch({ type: types.layout.OPEN_TOP_TOAST, payload: { error: true, heading: ' Already adeleted ' } })
    }

}


const getDashboard = async () => {
    try {
        const { data } = await api.get(dashboardEndPoint())
        console.log('dashboard', data);

    }
    catch {

    }

}




const editProfile = async (postJson: any) => {

    const token = localStorage.getItem('token')
    console.log('edit postJson', postJson)
    store.dispatch({ type: types.EDIT_USER_PROFILE_LOADING })
    try {
        const { data } = await api.put(editProfileEndPoint(), postJson, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        })
        console.log('edit profile res', data);

        if (data.success) {
            store.dispatch({ type: types.EDIT_USER_PROFILE_SUCCESS, payload: data.data })
            store.dispatch({ type: types.SET_CONSTANTS, payload: { show_ok_btn: true } })
        }

    }
    catch {
        store.dispatch({ type: types.EDIT_USER_PROFILE_FAILED })
    }

}

const getAllCourses = async (country: string) => {
    try {
        const { data } = await api.get(allCoursesEndpoint())
        console.log('all universities', data);

    }
    catch {

    }

}

const getSingleUniversity = async (universityId: string) => {
    try {
        const { data } = await api.get(singleUniversityEndpoint(universityId))
        // console.log('single University', data);
        store.dispatch({ type: types.SINGLE_UNIVERSITY_SUCCESS, payload: data.data })

    }
    catch {

    }

}

const getSingleCource = async (courceId: string) => {
    try {
        const { data } = await api.get(singleCourceEndpoint(courceId))
        console.log('single cource', data);

    }
    catch {

    }

}

const editProfileOkAction = () => {
    store.dispatch({ type: types.MODAL_CLOSE })
    store.dispatch({ type: types.SET_CONSTANTS, payload: { show_ok_btn: false } })
    window.location.reload()
}

const getCounsellors = async () => {
    try {
        const { data } = await api.get(counsellorsEndpoint())
        // console.log('single cource', data);
        if (data.success) {
            // console.log('success', data.success);

            store.dispatch({ type: types.COUNCELLORS_SUCCESS, payload: data.data })
        }
    }
    catch {

    }

}

const getTopUniversitiesByDestination = async (country: string) => {

    try {

        const { data } = await api.get(topUniveristiesByDestinationEndpoint(country))
        // console.log('top Universities', data);
        store.dispatch({ type: types.TOP_UNIVERSITIES_SUCCESS, payload: data.data })

    }
    catch {

    }

}

const getCountryPicture = (countryName: string) => {
    switch (countryName) {
        case 'United States':

            return Images.UsPicture
        case 'United Kingdom':

            return Images.UkPicture
        case 'Canada':

            return Images.canadaPicture
        case 'Australia':

            return Images.australiaPicture
        case 'Ireland':

            return Images.irelandPicture
        case 'New Zealand':

            return Images.newZealandPicture

        default:
            break;
    }
}


// const slideDetails = (items: any) => {
//     const chunkSize = 3; // Number of items to show in each slide
//     const totalSlides = Math.ceil(items.length / chunkSize);


//     const chunkedItems = Array.from({ length: totalSlides }, (_, index) =>
//         items.slice(index * chunkSize, (index + 1) * chunkSize)
//     );

// }


export {
    getAllDestinations,
    getAllUniveristiesByDestination,
    getSingleUniversity,
    getSingleCource,
    getTopUniversitiesByDestination,
    getCountryPicture,
    getCounsellors,
    openModal,
    headers, getHeaders,
    editProfile, closeModal,
    editProfileOkAction,
    addToShortList, editShortList,
    addToCart,
    editCart,
    getDashboard,
    getAllCourses,
    // slideDetails,


}