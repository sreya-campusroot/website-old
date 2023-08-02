import { TextInput } from "flowbite-react";
import React, { useState } from "react";
import { CustomButton } from "../../../../../../components/elements/actions";
import { useSelector } from "react-redux";
import { AppState } from "../../../../../../redux/appState";
import { editProfile } from "../../../../../../services";

const EditGRE = () => {
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
                    ...userProfile.testScores,

                    GRE: GRE,
                },
            }
            : {
                testScores: {


                    GRE: GRE,
                },
            }
        console.log('GRE post Json', postJson);
        await editProfile(postJson);
    };


    return (
        <div className="col-span-12">
            <p className="text-lg capitalize font-semibold ">GRE</p>
            <div className="grid grid-cols-12 gap-4 mt-4">
                <div className="col-span-12 sm:col-span-4 ">
                    <TextInput
                        id="email1"
                        placeholder="verbal"
                        required
                        type="number"
                        sizing={"lg"}
                        min={0}
                        max={200}
                        onChange={(e) => {
                            setGRE({ ...GRE, verbal: parseInt(e.target.value) });
                        }}
                    />
                </div>
                <div className="col-span-12 sm:col-span-4 ">
                    <TextInput
                        id="email1"
                        placeholder="Quant"
                        required
                        type="number"
                        sizing={"lg"}
                        min={0}
                        max={200}
                        onChange={(e) => {
                            setGRE({ ...GRE, quant: parseInt(e.target.value) });
                        }}
                    />
                </div>
                <div className="col-span-12 sm:col-span-4 ">
                    <TextInput
                        id="email1"
                        placeholder="AWAI"
                        required
                        type="number"
                        sizing={"lg"}
                        min={0}
                        max={200}
                        onChange={(e) => {
                            setGRE({ ...GRE, AWA: parseInt(e.target.value) });
                        }}
                    />
                </div>
                <div className="col-span-12">
                    <div className="m-auto mt-10">
                        <CustomButton
                            handleSubmit={() => {
                                handleEditScores();
                            }}
                        >
                            Save
                        </CustomButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditGRE;
