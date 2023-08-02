export interface courseItemProps {
    schoolDetails: {
        schoolName: string,
        DepartmentName: string,
        schoolLogoSrc: string,
    }
    _id: string,
    name: string,
    degree: string,
    applicationDeadline: string,
    duration: string,
    cost: [
        {
            name: string,
            lowerLimit: number,
            upperLimit: number,
            _id: string
        }
    ],
    createdAt: string,
    updatedAt: string,
    __v: 1,
    university: {
        _id: string,
        name: string
    },
    preRequisites: []
}