import { TextInput, Toast } from 'flowbite-react'
import React, { useState } from 'react'
import { CustomButton } from '../../../components/elements/actions'
import api from '../../../services/baseUrl'
import { registerEndPoint, sendOTPEndPoint } from '../../../services/endPoints'
import types from '../../../redux/types'
import { useDispatch, useSelector } from 'react-redux'
import { openModal } from '../../../services'
import { AppState } from '../../../redux/appState'
import Images from '../../../assets'
import { useNavigate } from 'react-router-dom'
const RegisterForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const signup = useSelector((state: AppState) => state.registerReducer)
    const sendOtp = useSelector((state: AppState) => state.sendOtpReducer)
    const { loading, data, error } = signup
    const [resError, setResError] = useState('')
    const [postJson, setPostJson] = useState({
        phone: sendOtp.phoneNumber,
        email: "",
        name: ""
    })
    console.log('err', error);

    const handleRegister = async () => {
        dispatch({ type: types.REGISTER_LOADING })
        try {
            const { data } = await api.post(registerEndPoint(), postJson)
            console.log('register res', data);


            if (data.success) {
                dispatch({ type: types.REGISTER_SUCCESS, payload: { data: data } })



                localStorage.setItem('token', data.data.token)
                if (localStorage.getItem('token')) {

                    navigate('/my-account/dashboard')
                }


            } else {

                if (
                    data.message === 'User Already Registered'
                ) {
                    localStorage.setItem('token', data.data.token)
                }
                dispatch({ type: types.REGISTER_FAILED, payload: data })
            }

        }
        catch (err) {


            if (err instanceof Error) {

                // Handle the error when the fetch or JSON parsing fails
                console.error('Error:', err.message);
                if (err.message.includes('400')) {
                    const error = 'Email or Name already registed';
                    console.log('jj', error)
                    // Handle the specific case of a 400 error here if needed
                    // For example, display an error message to the user

                    setResError(error)
                    dispatch({ type: types.REGISTER_FAILED, payload: error })
                }
            } else {
                console.error('Unknown error occurred:', err);
                dispatch({ type: types.REGISTER_FAILED, payload: error })
            }
        }

    }

    console.log('resError', resError)
    return (
        <>
            <div className="col-span-12">
                <TextInput
                    id="password1"
                    placeholder='Name'
                    required
                    type="text"
                    sizing={'lg'}
                    onChange={(e) => {
                        setPostJson({ ...postJson, name: e.target.value })
                    }}
                />

            </div>
            <div className="col-span-12">
                <TextInput
                    id="password1"
                    placeholder='Email'
                    required
                    type="text"
                    sizing={'lg'}
                    onChange={(e) => {
                        setPostJson({ ...postJson, email: e.target.value })
                    }}
                />

            </div>
            <div className="col-span-12">
                <TextInput
                    id="password1"
                    placeholder='Phone Number'
                    required
                    type="text"
                    sizing={'lg'}
                    value={sendOtp.phoneNumber}
                    disabled
                />

            </div>

            {data && data?.data?.userEntryFound && <div className='mt-10'>
                <div className="mx-auto flex justify-center"><Toast >

                    <div className="ml-3 text-sm font-normal">
                        <div className="text-sm text-[#59eb54]">Registered Successfully</div>

                    </div>
                    <Toast.Toggle />
                </Toast></div>
            </div>}

            {data && <div className='col-span-12'>
                {data?.data?.userEntryFound ? <div className='my-4'>
                    <div className="mx-auto flex justify-center"><Toast >

                        <div className="ml-3 text-sm font-normal">
                            <div className="text-sm text-[#59eb54]">Registered Successfully</div>

                        </div>
                        <Toast.Toggle />
                    </Toast></div>
                </div> : resError ? <div className='my-4'>
                    <div className="mx-auto flex justify-center"><Toast >

                        <div className="ml-3 text-sm font-normal">
                            <div className="text-sm text-[#54d4eb]">{resError}</div>

                        </div>
                        <Toast.Toggle />
                    </Toast></div>
                </div> : null}
            </div>}
            <div className="col-span-12">
                {loading ? <div>
                    <img src={Images.tailDualRing} alt="dual-ring-loader" className='w-10 h-10 m-auto' />
                </div> : <CustomButton handleSubmit={() => {
                    handleRegister()
                }}>Sign Up</CustomButton>}
            </div>

        </>
    )
}

export default RegisterForm