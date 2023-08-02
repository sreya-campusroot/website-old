import { TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { CustomButton } from '../../../components/elements/actions'
import api from '../../../services/baseUrl'
import { sendOTPEndPoint } from '../../../services/endPoints'
import types from '../../../redux/types'
import { useDispatch, useSelector } from 'react-redux'
import { openModal } from '../../../services'
import { AppState } from '../../../redux/appState'
import Images from '../../../assets'

const SendOtpForm = () => {
    const dispatch = useDispatch()
    const [postJson, setPostJson] = useState({
        phone: ""
    })
    const sendOtp = useSelector((state: AppState) => state.sendOtpReducer)
    const { loading } = sendOtp

    const handleSendOTP = async () => {

        localStorage.clear()

        dispatch({ type: types.SEND_OTP_LOADING })
        try {
            const { data } = await api.post(sendOTPEndPoint(), postJson)
            console.log('send otp res', data);


            if (data.success) {
                dispatch({ type: types.SEND_OTP_SUCCESS, payload: { data: data, phoneNumber: postJson.phone } })
                openModal(types.layout.OTP_FORM_MODAL)
                dispatch({ type: types.MODAL_OPEN, payload: { modal_type: types.layout.OTP_FORM_MODAL } })
            }

        }
        catch {
            dispatch({ type: types.SEND_OTP_FAILED })
        }
    }

    return (
        <>
            <div className="col-span-12">
                <TextInput
                    id="password1"
                    placeholder='Phone Number'
                    required
                    type="text"
                    sizing={'lg'}
                    onChange={(e) => {
                        setPostJson({ phone: e.target.value })
                    }}
                />

            </div>
            <div className="col-span-12">
                {loading ? <div>
                    <img src={Images.tailDualRing} alt="dual-ring-loader" className='w-10 h-10 m-auto' />
                </div> : <CustomButton handleSubmit={() => {
                    handleSendOTP()
                }}>Send OTP</CustomButton>}
            </div>

        </>
    )
}

export default SendOtpForm