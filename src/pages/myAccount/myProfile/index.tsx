import { useEffect } from 'react'
import { SectionHeading } from '../../../assets/texts'

import UserDetails from './components/userInfo'
import ListComp from './components/listComp'
import Scores from './components/testScores.tsx/scores'

import { userProfileEndPoint } from '../../../services/endPoints'
import api from '../../../services/baseUrl'
import types from '../../../redux/types'
import { useDispatch, useSelector } from 'react-redux'

import { AppState } from '../../../redux/appState'

import Experiences from './components/workExperience.tsx/experiences'
import Education from './components/education/educations'
import UserProfilePic from './components/userProfilePic'


const MyProfile = () => {
    const dispatch = useDispatch()
    const userProfile = useSelector((state: AppState) =>
        state.userProfileReducer
    )
    const { data } = userProfile



    // console.log('userProfile', userProfile)
    const getUserProfile = async () => {
        const token = localStorage.getItem('token')
        // const headers = getHeaders()
        dispatch({ type: types.USER_PROFILE_LOADING })
        try {
            const { data } = await api.get(userProfileEndPoint(), {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            })
            // console.log('user profile res', data);

            if (data.success) {
                dispatch({ type: types.USER_PROFILE_SUCCESS, payload: data.data })
            }

        }
        catch {
            dispatch({ type: types.USER_PROFILE_FAILED })
        }

    }
    useEffect(() => {
        getUserProfile()
    }, [])


    const userInfo = {
        name: data?.name,
        email: data?.email
    }


    return (
        <div>
            <SectionHeading>Complete You Profile</SectionHeading>
            {
                data && <> <div className="grid grid-cols-12 gap-10">

                    <div className="col-span-12 xl:col-span-4">
                        <div className="grid grid-cols-1">

                            <UserProfilePic />
                            <UserDetails info={userInfo} />

                            <ListComp label='Courses Preffered (Upto 3)' items={data?.preference?.courses} preference={data?.preference} />
                            <ListComp label='Countries Preffered (Upto 3)' items={data.preference?.country} preference={data?.preference} />
                            <ListComp label='Skills (Upto 3)' items={data?.skills} />
                        </div>
                    </div>
                    <div className="col-span-12 xl:col-span-8">
                        <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-12">
                                <Scores userProfile={data} />
                            </div>
                            <div className="col-span-12 xl:col-span-6">
                                <Education items={data?.education} />
                            </div>
                            <div className='col-span-12 xl:col-span-6'>
                                <Experiences items={data?.workExperience} />
                            </div>
                        </div>
                    </div>

                </div>

                </>
            }
        </div>
    )
}

export default MyProfile