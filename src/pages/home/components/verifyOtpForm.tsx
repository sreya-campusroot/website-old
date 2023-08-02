import { TextInput, Toast } from 'flowbite-react'
import React, { useRef, useState } from 'react'
import { CustomButton, CustomLink } from '../../../components/elements/actions'
import api from '../../../services/baseUrl'
import { sendOTPEndPoint, verifyOTPEndPoint } from '../../../services/endPoints'
import types from '../../../redux/types'
import { useDispatch, useSelector } from 'react-redux'
import { closeModal, openModal } from '../../../services'
import { AppState } from '../../../redux/appState'
import { useNavigate } from 'react-router-dom'
import Images from '../../../assets'

const VerifyOTPForm = () => {
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const input1Ref = useRef(null)
    const input2Ref = useRef(null)
    const input3Ref = useRef(null)
    const input4Ref = useRef(null)


    const [number1, setNumber1] = useState("")
    const [number2, setNumber2] = useState("")
    const [number3, setNumber3] = useState("")
    const [number4, setNumber4] = useState("")

    const sendOtp = useSelector((state: AppState) => state.sendOtpReducer)
    const verifyOtp = useSelector((state: AppState) => state.verifyOtpReducer)
    const { loading, data } = verifyOtp
    const phoneNumber = sendOtp.phoneNumber;
    const OTP = number1 + number2 + number3 + number4

    const handleSendOTP = async () => {

        const postJson = {
            phone: phoneNumber,
            otp: OTP
        }

        dispatch({ type: types.VERIFY_OTP_LOADING })

        try {
            const { data } = await api.post(verifyOTPEndPoint(), postJson)




            if (data.success) {
                dispatch({ type: types.VERIFY_OTP_SUCCESS, payload: data })
                if (data.data.userEntryFound) {

                    localStorage.setItem('token', data.data.AccessToken)


                } else {
                    dispatch({ type: types.layout.AUTH_FORM_TYPE, payload: types.layout.REGISTER_FORM })
                }


            }

        }
        catch {
            dispatch({ type: types.VERIFY_OTP_FAILED })
        }

    }




    function getRegisterForm() {
        throw new Error('Function not implemented.')
    }

    return (
        <>
            <div className='col-span-12'>
                <div className="grid grid-cols-1 gap-4">
                    <p className="text-lg font-semibold text-center">Verify OTP</p>
                    <p className="text-sm text-center">Please enter the verification OTP sent to {sendOtp?.phoneNumber.replace(/^(\+91)(.*)(...)$/, (_, prefix, asterisks, lastThree) =>
                        prefix + asterisks.replace(/./g, '*') + lastThree
                    )}  </p>
                    <div className="flex gap-4">
                        <TextInput
                            id="password1"
                            required
                            type="text"
                            name='number1'
                            ref={input1Ref}
                            value={number1}
                            sizing={'lg'}
                            maxLength={1}
                            // onKeyDown={(e) => {
                            //     handleOnKeyDown(e, input1Ref, input2Ref)
                            // }}
                            onChange={(e) => {
                                setNumber1(e.target.value)
                            }}
                        />
                        <TextInput
                            id="password1"
                            ref={input2Ref}
                            name='number2'
                            required
                            type="text"
                            value={number2}
                            maxLength={1}
                            // onKeyDown={(e) => {
                            //     handleOnKeyDown(e, input1Ref, input3Ref)
                            // }}
                            sizing={'lg'}
                            onChange={(e) => {
                                setNumber2(e.target.value)
                            }}
                        />
                        <TextInput
                            id="password1"
                            ref={input3Ref}
                            required
                            type="text"
                            value={number3}
                            name='number3'
                            maxLength={1}
                            // onKeyDown={(e) => {
                            //     handleOnKeyDown(e, input2Ref, input4Ref)
                            // }}
                            sizing={'lg'}
                            onChange={(e) => {
                                setNumber3(e.target.value)
                            }}
                        />
                        <TextInput
                            id="password1"
                            ref={input4Ref}
                            required
                            type="text"
                            maxLength={1}
                            value={number4}
                            // onKeyDown={(e) => {
                            //     handleOnKeyDown(e, input3Ref, input4Ref)
                            // }}
                            name='number4'
                            sizing={'lg'}
                            onChange={(e) => {
                                setNumber4(e.target.value)
                            }}
                        />
                    </div>

                </div>

                {data && <div className='mt-10'>
                    {data?.data?.userEntryFound ? <div className="mx-auto flex justify-center"><Toast >

                        <div className="ml-3 text-sm font-normal">
                            <div className="text-sm">Verified Successfully</div>

                        </div>
                        <Toast.Toggle />
                    </Toast></div> : <div className='mx-auto flex justify-center'><Toast>

                        <div className="ml-3 text-sm font-normal">
                            <div className="text-sm text-[#f76767]">User not found !</div>
                            <p className="text-xs">Please register with name and Email with this number</p>
                        </div>
                        <Toast.Toggle />
                    </Toast></div>}
                </div>}
            </div>
            <div className="col-span-12 mt-10">
                {verifyOtp.data ? <div className='flex gap-4'>
                    <CustomButton handleSubmit={() => {
                        dispatch({ type: types.MODAL_CLOSE })
                        dispatch({ type: types.VERIFY_OTP_SUCCESS, payload: null })

                        if (localStorage.getItem('token')) {
                            navigate('/my-account/dashboard')
                        } else {
                            dispatch({ type: types.MODAL_CLOSE })
                        }
                    }}>OK</CustomButton>
                </div> : <>  {loading ? <div>
                    <img src={Images.tailDualRing} alt="dual-ring-loader" className='w-10 h-10 m-auto' />
                </div> : <CustomButton handleSubmit={() => {
                    handleSendOTP()
                }}>Verify OTP</CustomButton>}</>}


            </div>
        </>
    )
}

export default VerifyOTPForm