import { Select, TextInput } from 'flowbite-react'
import React, { FC, useEffect, useState } from 'react'
import { CustomButton } from '../../../../components/elements/actions'
import { AppState } from '../../../../redux/appState'
import { useDispatch, useSelector } from 'react-redux'
import { editProfile } from '../../../../services'
import types from '../../../../redux/types'
import { editProfileEndPoint } from '../../../../services/endPoints'
import api from '../../../../services/baseUrl'
import { countryItems } from '../../../../staticData/dropsownItems'


interface Props {
    preference: any
}
const CoursePreferrenceForm: FC<Props> = ({ preference }) => {
    const modal = useSelector((state: AppState) => state.modalReducer)
    const { modal_data } = modal
    const [courses, setCourses] = useState<any>(modal_data?.courses)
    const [course, setCourse] = useState('')


    const handleEditCourse = async () => {

        setCourses((prevCourses: any) => [...prevCourses, course]);

        const postJson = {
            preference: {
                ...modal_data.preference,
                courses: [...courses, course],
            },
        }
        await editProfile(postJson)


    }
    return <div className="grid grid-cols-1">
        <p className="text-lg font-semibold">
            Add Course Preference
        </p>
        <div>
            <p className="text-sm py-1">Cource</p>
            <TextInput
                id="email1"
                placeholder="Ex.Computer Science"
                required
                type="text"
                sizing={'lg'}
                onChange={(e) => {
                    setCourse(e.target.value)
                }}

            />
            <div className='m-auto mt-10'>
                <CustomButton handleSubmit={() => {
                    handleEditCourse()
                }}>Save</CustomButton>
            </div>
        </div>
    </div>
}

const CountryPreferrenceForm: FC<Props> = ({ preference }) => {
    const modal = useSelector((state: AppState) => state.modalReducer)
    const { modal_data } = modal
    const [countries, setCountries] = useState<any>(modal_data.countries)
    const [country, setCountry] = useState('')

    const handleEditCourtry = async () => {

        setCountries((prevCountries: any) => [...prevCountries, country]);

        const postJson = {
            preference: {
                ...modal_data.preference,
                country: [...countries, country],
            },
        }
        await editProfile(postJson)


    }
    return <div className="grid grid-cols-1">
        <p className="text-lg font-semibold">
            Add Country Preference
        </p>
        <div>
            <p className="text-sm py-1">Country</p>

            <Select
                id="tests"
                sizing={'lg'}
                required
                onChange={(e) => {
                    setCountry(e.target.value)
                }}
            >
                {countryItems.map((item) => {
                    return <option >
                        {item}
                    </option>
                })}
            </Select>
            <div className='m-auto mt-10'>
                <CustomButton handleSubmit={() => {

                    handleEditCourtry()
                }}>Save</CustomButton>
            </div>
        </div>
    </div>
}

const SkillsForm = () => {
    const modal = useSelector((state: AppState) => state.modalReducer)
    const { modal_data } = modal
    const [skills, setSkills] = useState<any>(modal_data.skills)
    const [skill, setSkill] = useState('')

    const handleEditSkills = async () => {

        setSkills((prevSkills: any) => [...prevSkills, skill]);

        const postJson = {

            skills: [...skills, skill],
        }
        await editProfile(postJson)


    }
    return <div className="grid grid-cols-1">
        <p className="text-lg font-semibold">
            Add Skills
        </p>
        <div>
            <p className="text-sm py-1">Skills</p>
            <TextInput
                id="email1"
                placeholder="Ex.Computer Science"
                required
                type="text"
                sizing={'lg'}
                onChange={(e) => {
                    setSkill(e.target.value)
                }}
            />
            <div className='m-auto mt-10'>
                <CustomButton handleSubmit={() => {
                    handleEditSkills()
                }}>Save</CustomButton>
            </div>
        </div>
    </div>
}


export { CoursePreferrenceForm, CountryPreferrenceForm, SkillsForm }