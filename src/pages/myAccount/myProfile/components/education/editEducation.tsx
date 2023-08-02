import React, { useState } from 'react'
import { editProfile } from '../../../../../services'
import { Select, TextInput } from 'flowbite-react'
import { CustomButton } from '../../../../../components/elements/actions'
import { AppState } from '../../../../../redux/appState'
import { useSelector } from 'react-redux'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { educationStageItems } from '../../../../../staticData/dropsownItems'
const EditEducation = () => {
    const modal = useSelector((state: AppState) => state.modalReducer)
    const { modal_data } = modal
    const { educations } = modal_data

    const [education, setEducation] = useState({
        school: "",
        degree: "",
        course: "",
        endScore: 0,
        maxScore: 0,
        courseDuration: 0,
        startDate: "",
        endDate: "",

    })



    const handleEditEducation = async () => {



        const postJson = {

            education: [...educations, education],
        }
        console.log('education postJson', postJson);

        await editProfile(postJson)


    }

    return <>

        <div className='grid grid-cols-12 gap-4'>
            <div className="col-span-12">
                <p className="text-lg font-semibold">
                    Add Education
                </p>
            </div>

            <div className="col-span-12">
                <p className="text-lg-font-medium pb-1">
                    School
                </p>
                <TextInput
                    id="email1"
                    placeholder="Ex. XXX Institte of Technology"
                    required
                    type="text"
                    sizing={'lg'}
                    onChange={(e) => {
                        setEducation({ ...education, school: e.target.value });
                    }}
                />


            </div>
            <div className="col-span-12">
                <p className="text-lg-font-medium pb-1">
                    Degree
                </p>

                <Select
                    id="tests"
                    sizing={'lg'}
                    required
                    onChange={(e) => {
                        setEducation({ ...education, degree: e.target.value });
                    }}
                >
                    {educationStageItems.map((item) => {
                        return <option >
                            {item}
                        </option>
                    })}
                </Select>
            </div>
            <div className="col-span-12">
                <p className="text-lg-font-medium pb-1">
                    Cource
                </p>
                <TextInput
                    id="email1"
                    placeholder="Ex. Computer Science"
                    required
                    type="text"
                    sizing={'lg'}
                    onChange={(e) => {
                        setEducation({ ...education, course: e.target.value });
                    }}
                />
            </div>

            <div className="col-span-12">
                <p className="text-lg-font-medium pb-1">
                    Cource Duration
                </p>
                <TextInput
                    id="email1"
                    placeholder="Ex. 24 (in Months)"
                    required
                    type="number"
                    sizing={'lg'}
                    onChange={(e) => {
                        setEducation({ ...education, courseDuration: parseInt(e.target.value) });
                    }}
                />
            </div>
            <div className="col-span-6">
                <p className="text-lg-font-medium pb-1">
                    End Score
                </p>
                <TextInput
                    id="email1"
                    placeholder="Ex. 7.4 (marks)"
                    required
                    type="number"
                    sizing={'lg'}
                    onChange={(e) => {
                        setEducation({ ...education, endScore: parseInt(e.target.value) });
                    }}
                />
            </div>
            <div className="col-span-6">
                <p className="text-lg-font-medium pb-1">
                    Max Score
                </p>
                <TextInput
                    id="email1"
                    placeholder="Ex. 10 (out of score)"
                    required
                    type="number"
                    sizing={'lg'}
                    onChange={(e) => {
                        setEducation({ ...education, maxScore: parseInt(e.target.value) });
                    }}
                />
            </div>
            <div className="col-span-6">
                <p className="text-lg-font-medium pb-1">
                    Start Date
                </p>

                <input type='date' className='date-input' onChange={(e) => {
                    setEducation({ ...education, startDate: e.target.value });
                }} />
            </div>
            <div className="col-span-6">
                <p className="text-lg-font-medium pb-1">
                    End Date
                </p>
                <input type='date' className='date-input' onChange={(e) => {
                    setEducation({ ...education, endDate: e.target.value });
                }} />
            </div>
            <div className="col-span-12">
                <div className='m-auto mt-10'>
                    <CustomButton handleSubmit={() => {
                        handleEditEducation()
                    }}>Save</CustomButton>
                </div>
            </div>
        </div>
    </>
}

export default EditEducation