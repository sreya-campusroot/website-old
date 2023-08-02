import { Label, Select } from 'flowbite-react'
import React, { useState } from 'react'

import { useSelector } from 'react-redux'
import { AppState } from '../../../../../redux/appState'

import EditGRE from './editScores/editGRE'
import EditDET from './editScores/editDET'
import EditIELTS from './editScores/editIELTS'
import EditGMAT from './editScores/editGMAT'
import EditTOEFL from './editScores/editTOEFL'


const EditScores = () => {
    const testScores = {
        GRE: {
            verbal: 0,
            quant: 0,
            AWA: 0
        },
        GMAT: {
            verbal: 0,
            quant: 0,
            AWA: 0,
            integratedReasoning: 0
        },
        IELTS: {
            reading: 0,
            writing: 0,
            speaking: 0,
            listening: 0
        },
        DET: {
            literacy: 0,
            conversation: 0,
            comprehension: 0,
            production: 0
        },
        TOEFL: {
            reading: 0,
            writing: 0,
            speaking: 0,
            listening: 0
        },
    }



    const modal = useSelector((state: AppState) => state.modalReducer)
    const { modal_data } = modal
    const [GRE, setGRE] = useState(null)
    const [GMAT, setGMAT] = useState(null)
    const [IELTS, setIELTS] = useState(null)
    const [DET, setDET] = useState(null)
    const [TOEFL, setTOEFL] = useState(null)
    const [examType, setExamType] = useState('GRE')

    // console.log('course preference', modal_data.preference)
    const handleEditCourse = async () => {

        // setCourses((prevCourses: any) => [...prevCourses, course]);

        // const postJson = {
        //     preference: {
        //         ...modal_data.preference,
        //         courses: [...courses, course],
        //     },
        // }
        // await editProfile(postJson)


    }
    function handleEditSkills() {
        throw new Error('Function not implemented.')
    }

    const handleSelectExam = (e: any) => {
        setExamType(e.target.value)
    }

    return (
        <>
            <form className="grid grid-cols-12 gap-4">

                <div className="col-span-12">
                    <p className="text-xl border-b border-b-2 pb-4 w-full md:w-64 mx-auto text-center font-semibold">
                        Test Scores
                    </p>
                </div>

                <div className='col-span-12'>
                    <div
                        className="max-w-md mx-auto"
                        id="select"
                    >
                        <div className="mb-2 block">
                            <Label
                                htmlFor="tests"
                                value="Select your Exam"
                            />
                        </div>
                        <Select
                            id="tests"
                            required
                            onChange={(e) => {
                                handleSelectExam(e)
                            }}
                        >
                            <option>
                                GRE
                            </option>
                            <option>
                                GMAT
                            </option>
                            <option>
                                DET
                            </option>
                            <option>
                                IELTS
                            </option>
                            <option>
                                TOEFL
                            </option>
                        </Select>
                    </div>
                </div>
                {examType === 'GRE' && <EditGRE />}
                {examType === 'GMAT' && <EditGMAT />}
                {examType === 'IELTS' && <EditIELTS />}
                {examType === 'DET' && <EditDET />}
                {examType === 'TOEFL' && <EditTOEFL />}




            </form>
        </>
    )
}

export default EditScores