import React from 'react'
import Images from '../../../../assets'

const UserProfilePic = () => {
    return (

        <div className='mx-auto'>
            <img src={Images.defaultUserProfilePic} alt="user-dp" className='w-40 h-40 rounded-full' />
        </div>

    )
}

export default UserProfilePic