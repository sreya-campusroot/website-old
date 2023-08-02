import React, { useEffect, useState } from 'react'
import { editProfile } from '../../../../../services'
import { Select, TextInput } from 'flowbite-react'
import { CustomButton } from '../../../../../components/elements/actions'
import { AppState } from '../../../../../redux/appState'
import { useSelector } from 'react-redux'

import "react-datepicker/dist/react-datepicker.css";
import { sectorItems, workTypeItems } from '../../../../../staticData/dropsownItems'
import moment from 'moment'
const EditExperiences = () => {
    const modal = useSelector((state: AppState) => state.modalReducer)
    const { modal_data } = modal
    const { experiences, selectedExperience } = modal_data

    const [experience, setExperience] = useState({
        companyName: "",
        sector: "",
        type: "",
        startDate: "",
        endDate: "",
    })


    const handleEditExperiences = async () => {



        const postJson = {

            workExperience: [...experiences, experience],
        }
        await editProfile(postJson)


    }

    useEffect(() => {
        if (selectedExperience) {
            setExperience(selectedExperience[0])
        }
    }, [selectedExperience])




    return <>

        <div className='grid grid-cols-12 gap-4'>
            <div className="col-span-12">
                <p className="text-lg font-semibold">
                    Add Experience
                </p>
            </div>

            <div className="col-span-12">
                <p className="text-lg-font-medium pb-1">
                    Company Name
                </p>
                <TextInput
                    id="email1"
                    placeholder="Ex. Infosys"
                    required
                    type="text"
                    value={experience.companyName}
                    sizing={'lg'}
                    onChange={(e) => {
                        setExperience({ ...experience, companyName: e.target.value });
                    }}
                />
            </div>
            <div className="col-span-12">
                <p className="text-lg-font-medium pb-1">
                    Sector
                </p>
                <Select id="tests"
                    sizing={'lg'}
                    required
                    value={experience.sector}
                    onChange={(e) => {
                        setExperience({ ...experience, sector: e.target.value });
                    }}>
                    {sectorItems.map((item) => [
                        <option >{item}</option>
                    ])}
                </Select>
            </div>
            <div className="col-span-12">
                <p className="text-lg-font-medium pb-1">
                    Work Type
                </p>
                <Select id="tests"
                    sizing={'lg'}
                    required
                    value={experience.type}
                    onChange={(e) => {
                        setExperience({ ...experience, type: e.target.value });
                    }}>
                    {workTypeItems.map((item) => [
                        <option >{item}</option>
                    ])}
                </Select>
            </div>
            <div className="col-span-6">
                <p className="text-lg-font-medium pb-1">
                    Start Date
                </p>

                <input type='date' value={moment(experience.startDate).format('YYYY/MM/DD').replaceAll('/', '-')} className='date-input' onChange={(e) => {
                    setExperience({ ...experience, startDate: e.target.value });
                }} />
            </div>
            <div className="col-span-6">
                <p className="text-lg-font-medium pb-1">
                    End Date
                </p>
                <input type='date' value={moment(experience.endDate).format('YYYY/MM/DD').replaceAll('/', '-')} className='date-input' onChange={(e) => {
                    setExperience({ ...experience, endDate: e.target.value });
                }} />
            </div>
            <div className="col-span-12">
                <div className='m-auto mt-10'>
                    <CustomButton handleSubmit={() => {
                        handleEditExperiences()
                    }}>Save</CustomButton>
                </div>
            </div>
        </div>
    </>
}

export default EditExperiences