import { TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { CustomButton } from '../../../../../../components/elements/actions'
import { useSelector } from 'react-redux'
import { AppState } from '../../../../../../redux/appState'
import { editProfile } from '../../../../../../services'

const EditTOEFL = () => {
    const modal = useSelector((state: AppState) => state.modalReducer);
    const { modal_data } = modal;
    const { userProfile } = modal_data;

    const [GRE, setGRE] = useState({
        verbal: 0,
        quant: 0,
        AWA: 0,
    });

    console.log('GRE', GRE);



    const handleEditScores = async () => {

        const postJson = userProfile.hasOwnProperty("testScores")
            ? {
                testScores: {


                    GRE: GRE,
                },
            }
            : {
                testScores: {
                    ...userProfile.testScores,

                    GRE: GRE,
                },
            }
        console.log('GRE post Json', postJson);
        await editProfile(postJson);
    };

    return (
        <div className='col-span-12'>
            <p className='text-lg capitalize font-semibold my-4'>TOEFL</p>
            <div className="grid grid-cols-12 gap-4 mt-4">
                <div className="col-span-12 sm:col-span-4 lg:col-span-4">
                    <TextInput
                        id="email1"
                        placeholder="Reading"
                        required
                        type="number"
                        sizing={'lg'}
                        min={0}
                        max={200}
                    />
                </div>
                <div className="col-span-12 sm:col-span-4 lg:col-span-4">
                    <TextInput
                        id="email1"
                        placeholder="Writing"
                        required
                        type="number"
                        sizing={'lg'}
                        min={0}
                        max={200}
                    />
                </div>
                <div className="col-span-12 sm:col-span-4 lg:col-span-4">
                    <TextInput
                        id="email1"
                        placeholder="Speaking"
                        required
                        type="number"
                        sizing={'lg'}
                        min={0}
                        max={200}
                    />
                </div>
                <div className="col-span-12 sm:col-span-4 lg:col-span-4">
                    <TextInput
                        id="email1"
                        placeholder="Listening"
                        required
                        type="number"
                        sizing={'lg'}
                        min={0}
                        max={200}
                    />
                </div>
                <div className="col-span-12">
                    <div className='m-auto mt-10'>
                        <CustomButton handleSubmit={() => {
                            handleEditScores()
                        }}>Save</CustomButton>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default EditTOEFL