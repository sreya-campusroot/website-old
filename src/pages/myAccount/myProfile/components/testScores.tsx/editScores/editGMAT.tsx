import { TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { CustomButton } from '../../../../../../components/elements/actions'
import { useSelector } from 'react-redux'
import { editProfile } from '../../../../../../services'
import { AppState } from '../../../../../../redux/appState'

const EditGMAT = () => {
    const modal = useSelector((state: AppState) => state.modalReducer);
    const { modal_data } = modal;
    const { userProfile } = modal_data;

    const [GMAT, setGMAT] = useState({
        verbal: 0,
        quant: 0,
        AWA: 0,
        integratedReasoning: 0
    });

    console.log('GMAT', GMAT);



    const handleEditScores = async () => {

        const postJson = userProfile.hasOwnProperty("testScores")
            ? {
                testScores: {

                    ...userProfile.testScores,
                    GMAT: GMAT,
                },
            }
            : {
                testScores: {


                    GMAT: GMAT,
                },
            }
        console.log('GMAT post Json', postJson);
        await editProfile(postJson);
    };


    return (
        <div className='col-span-12'>
            <p className='text-lg capitalize font-semibold my-4'>GMAT</p>
            <div className="grid grid-cols-12 gap-4 mt-4">
                <div className="col-span-12 sm:col-span-4 lg:col-span-4">
                    <TextInput
                        id="email1"
                        placeholder="Verbal"
                        required
                        type="number"
                        sizing={'lg'}
                        min={0}
                        max={200}
                        onChange={(e) => {
                            setGMAT({ ...GMAT, verbal: parseInt(e.target.value) });
                        }}
                    />
                </div>
                <div className="col-span-12 sm:col-span-4 lg:col-span-4">
                    <TextInput
                        id="email1"
                        placeholder="Quant"
                        required
                        type="number"
                        sizing={'lg'}
                        min={0}
                        max={200}
                        onChange={(e) => {
                            setGMAT({ ...GMAT, quant: parseInt(e.target.value) });
                        }}
                    />
                </div>
                <div className="col-span-12 sm:col-span-4 lg:col-span-4">
                    <TextInput
                        id="email1"
                        placeholder="AWA"
                        required
                        type="number"
                        sizing={'lg'}
                        min={0}
                        max={200}
                        onChange={(e) => {
                            setGMAT({ ...GMAT, AWA: parseInt(e.target.value) });
                        }}
                    />
                </div>
                <div className="col-span-12 sm:col-span-4 lg:col-span-4">
                    <TextInput
                        id="email1"
                        placeholder="Integrated Reasoning"
                        required
                        type="number"
                        sizing={'lg'}
                        min={0}
                        max={200}
                        onChange={(e) => {
                            setGMAT({ ...GMAT, integratedReasoning: parseInt(e.target.value) });
                        }}
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

export default EditGMAT