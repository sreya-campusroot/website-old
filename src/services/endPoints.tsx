//auth

export const sendOTPEndPoint = () => {
    return `/auth/send-otp`;
};

export const verifyOTPEndPoint = () => {
    return `/auth/verify-otp`;
};

export const registerEndPoint = () => {
    return `/auth/student-register`;
};


//private

export const userProfileEndPoint = () => {
    return `/student/profile`;
};
export const editProfileEndPoint = () => {
    return `/student/profile`;
};

export const dashboardEndPoint = () => {
    return `/student/dashboard`;
};

export const addToShortListEndPoint = () => {
    return `/student/add-to-short-list`;
};

export const editShortListEndPoint = (itemId: any) => {
    return `/student/edit-short-list/:${itemId}`;
};

export const addToCartEndPoint = () => {
    return `/student/add-to-cart`;
};

export const editCartEndPoint = (itemId: any) => {
    return `/student/edit-cart/:${itemId}`;
};





//public

export const allDestinationsEndPoint = () => {
    return `/public/all_destinations`;
};

export const topUniveristiesByDestinationEndpoint = (country: string) => {
    return `/public/top_universities/?limit=5&country=${country}`;
};

export const allUniveristiesByDestinationEndpoint = (country: string) => {
    return `/public/all_universities/?limit=100&country=${country}`;
};

// export const allUniversitiesEndpoint = () => {
//     return `/public/all_universities`;
// };

export const singleUniversityEndpoint = (universityId: string) => {
    return `/public/single_university/${universityId}`;
};

export const singleCourceEndpoint = (courceId: string) => {
    return `/public/single_course/${courceId}`;
};

export const counsellorsEndpoint = () => {
    return `/public/counsellors`;
};

export const allCoursesEndpoint = () => {
    return `/public/all_courses`;
};


