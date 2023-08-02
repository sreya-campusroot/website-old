export interface cartItemProps {
    university: {
        location: {
            country: '',
            state: '',
            city: ''
        },
        _id: '',
        name: '',
        code: 0,
        logoSrc: '',
        type: '',
        establishedYear: 0
    },
    course: {
        schoolDetails: {
            schoolName: '',
            DepartmentName: '',
            schoolLogoSrc: ''
        },
        _id: '',
        name: '',
        degree: '',
        duration: ''
    },
    _id: ''
}

export interface decisionItemProps {
    documents: {
        otherDocs: []
    },
    _id: '',
    university: {
        _id: '',
        name: '',
        code: 0
    },
    course: {
        schoolDetails: {
            schoolName: '',
            DepartmentName: '',
            schoolLogoSrc: ''
        },
        _id: '',
        name: ''
    },
    referees: [],
    createdAt: '',
    updatedAt: '',
    __v: 0
}
