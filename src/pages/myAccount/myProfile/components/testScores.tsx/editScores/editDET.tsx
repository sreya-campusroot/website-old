import { TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { CustomButton } from '../../../../../../components/elements/actions'
import { useSelector } from 'react-redux'
import { editProfile, editProfileOkAction } from '../../../../../../services'
import { AppState } from '../../../../../../redux/appState'
import { DualRingLoader } from '../../../../../../components/elements/loaders'

const EditDET = () => {
    const modal = useSelector((state: AppState) => state.modalReducer);
    const editUserProfile = useSelector((state: AppState) => state.editProfileReducer);
    const constants = useSelector((state: AppState) => state.constantsReducer);
    const { loading, data } = editUserProfile
    const { modal_data } = modal;
    const { userProfile } = modal_data;
    const { show_ok_btn } = constants

    const [DET, setDET] = useState({
        literacy: 0,
        conversation: 0,
        comprehension: 0,
        production: 0
    });

    console.log('DET', loading);



    const handleEditScores = async () => {

        const postJson = userProfile.hasOwnProperty("testScores")
            ? {
                testScores: {

                    ...userProfile.testScores,
                    DET: DET,
                },
            }
            : {
                testScores: {


                    DET: DET,
                },
            }
        console.log('DET post Json', postJson);
        await editProfile(postJson);
    };

    return (
        <div className='col-span-12'>
            <p className='text-lg capitalize font-semibold my-4'>DET</p>
            <div className="grid grid-cols-12 gap-4 mt-4">
                <div className="col-span-12 sm:col-span-4 lg:col-span-4">
                    <TextInput
                        id="email1"
                        placeholder="Literacy"
                        required
                        type="number"
                        sizing={'lg'}
                        min={0}
                        max={200}
                        onChange={(e) => {
                            setDET({ ...DET, literacy: parseInt(e.target.value) });
                        }}

                    />
                </div>
                <div className="col-span-12 sm:col-span-4 lg:col-span-4">
                    <TextInput
                        id="email1"
                        placeholder="Conversation"
                        required
                        type="number"
                        sizing={'lg'}
                        min={0}
                        max={200}
                        onChange={(e) => {
                            setDET({ ...DET, conversation: parseInt(e.target.value) });
                        }}
                    />
                </div>
                <div className="col-span-12 sm:col-span-4 lg:col-span-4">
                    <TextInput
                        id="email1"
                        placeholder="Comprehension"
                        required
                        type="number"
                        sizing={'lg'}
                        min={0}
                        max={200}
                        onChange={(e) => {
                            setDET({ ...DET, comprehension: parseInt(e.target.value) });
                        }}
                    />
                </div>
                <div className="col-span-12 sm:col-span-4 lg:col-span-4">
                    <TextInput
                        id="email"
                        placeholder="Production"
                        required
                        type="number"
                        sizing={'lg'}
                        min={0}
                        max={200}
                        onChange={(e) => {
                            setDET({ ...DET, production: parseInt(e.target.value) });
                        }}
                    />
                </div>
                <div className="col-span-12">
                    {loading ? <DualRingLoader /> : <div className='m-auto mt-10'>
                        {show_ok_btn ? <CustomButton handleSubmit={() => {
                            editProfileOkAction()
                        }}>Ok</CustomButton> : <CustomButton handleSubmit={() => {
                            handleEditScores()
                        }}>Save</CustomButton>}
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default EditDET