
import Images from '../../../assets'
import CustomModal from '../../../components/elements/modal'

import { useDispatch, useSelector } from 'react-redux'


import types from '../../../redux/types'
import { AppState } from '../../../redux/appState'
import SendOtpForm from '../components/sendOtpForm'
import VerifyOTPForm from '../components/verifyOtpForm'
import RegisterForm from '../components/registerForm'
import { FC } from 'react'
const Register: FC<any> = ({ formRef }) => {



    const authFormType = useSelector((state: AppState) => state.authFormTypeReducer)
    const { form_type } = authFormType
    const modal = useSelector((state: AppState) => state.modalReducer)

    return (
        <div className='register-section my-10 pt-10' ref={formRef}>
            <div className='container mx-auto '>
                <div className="grid grid-cols-12 gap-4">
                    <div className="register-form-container col-span-12 md:col-span-5  gap-4  rounded-t-2xl">

                        <div className="grid grid-cols-12 gap-4 p-10">
                            <div className=' col-span-12  '>
                                <h2 className='text-center text-white text-3xl font-[praise]'>Campus Root</h2>
                                <h2 className='text-center text-black font-semibold text-xl m-3'>Welcome to Campus root !</h2>
                                <p className='text-center  text-lg'>Sign Up</p>
                            </div>

                            <div className=' col-span-12  '>
                                <div className="grid grid-cols-12 gap-4">
                                    {form_type === types.layout.SEND_OTP_FORM ? <SendOtpForm /> : <RegisterForm />}
                                    <div className='col-span-3'>


                                    </div>
                                    <div className="col-span-6">
                                        <div className='grid grid-cols-2 gap-4'>
                                            {/* <div className="col-span-8">
                                                <button type="button" className="w-full text-white bg-[var(--tail-shade-dark)] hover:bg-[var(--tail-shade-medium)] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => {
                                                    openOTPForm()
                                                }}>Sign up</button>
                                            </div> */}
                                            <div className="col-span-8">
                                                <p className='text-center'>Or</p>
                                            </div>

                                            <div className="col-span-8 flex justify-center">
                                                <img src={Images.googleSignUp} alt='google-sign-up' className='w-[60px] h-[60px] rounded-xl mx-4' />
                                                <img src={Images.facebookSignUp} alt='facebook-sign-up' className='w-[60px] h-[60px] rounded-xl mx-4' />

                                            </div>
                                            <div className="col-span-3">


                                            </div>

                                        </div>

                                    </div>
                                    <div className='col-span-3'>


                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>

                    <div className="col-span-12 md:col-span-7">
                        <div className='h-full flex items-center register-bg'>
                            <h1 className='text-8xl text-[var(--tail-shade-dark)] font-[praise]'>Sign up to explore more about Campus root</h1>

                        </div>
                    </div>
                </div>

            </div>
            {
                modal.modal_type === types.layout.OTP_FORM_MODAL &&
                <CustomModal>
                    <VerifyOTPForm />
                </CustomModal>
            }
        </div>
    )
}

export default Register