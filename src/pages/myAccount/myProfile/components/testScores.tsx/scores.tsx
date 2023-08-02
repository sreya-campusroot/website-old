import React, { FC, ReactNode } from 'react'
import { SectionHeading } from '../../../../../assets/texts'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../../../../redux/appState'
import types from '../../../../../redux/types'
import CustomModal from '../../../../../components/elements/modal'
import EditScores from './editScores'
import { AddIcon, EditIcon } from '../../../../../assets/svgIcons'
import NoData from '../../../../../components/layouts/noData'


interface TestScoreWrapperProps {
    label: string,
    value: string
}

const TestScoreWrapper: FC<TestScoreWrapperProps> = ({ label, value }) => {
    return <div className="col-span-3">

        <p className="text-lg text-center font-semibold">
            {label}
        </p>
        <p className="text-sm text-center">{value}</p>

    </div>
}



interface TestCardProps {
    testName: string,
    children: ReactNode
    totalScore: number
}
const TestCard: FC<TestCardProps> = ({ testName, children, totalScore }) => {

    return <div className="col-span-12">
        <div className="p-4 pt-5 mt-10 border-2 rounded-lg relative">
            <p className="text-white text-xl p-2 font-semibold text-center mx-auto absolute -top-6 left-4 w-20 bg-[var(--tail-shade-dark)] rounded-sm">{testName}</p>

            <div className="grid grid-cols-12 gap-4">

                <div className="col-span-12 lg:col-span-9 my-auto">
                    <div className="grid grid-cols-12">
                        {children}

                    </div>

                </div>

                <div className="col-span-12 lg:col-span-3">
                    <div className='flex items-center justify-between'>
                        <p className="text-lg text-center font-semibold me-4">
                            Total Score
                        </p>
                        <div className="w-20 h-20 shadow-sm bg-[var(--grey-shade-medium)] flex  justify-center items-center rounded-full border border-2">

                            <p className="text-md text-center m-auto">{totalScore}</p>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    </div>
}
interface ScoresProps {
    userProfile: any
}
const Scores: FC<ScoresProps> = ({ userProfile }) => {
    const dispatch = useDispatch()
    const modal = useSelector((state: AppState) => state.modalReducer)
    const { modal_type } = modal
    const openEditScoresModal = (data: any) => {
        console.log('hi scores', userProfile)
        dispatch({ type: types.MODAL_OPEN, payload: { modal_type: types.layout.EDIT_SCORES_FORM_MODAL, modal_data: { userProfile: data } } })

    }

    return (

        <div className='grid grid-cols-1'>
            <div className="flex justify-between items-center">
                <SectionHeading>Test Scores</SectionHeading>
                <button onClick={() => {
                    openEditScoresModal(userProfile)
                }}>
                    <AddIcon />
                </button>
            </div>
            {userProfile.hasOwnProperty('testScores') ? <>   {userProfile?.testScores?.GRE && <TestCard testName='GRE' totalScore={20}>
                <TestScoreWrapper label='Verbal' value={userProfile?.testScores?.GRE?.verbal} />
                <TestScoreWrapper label='Quant' value={userProfile?.testScores?.GRE?.quant} />
                <TestScoreWrapper label='AWA' value={userProfile?.testScores?.GRE?.AWA} />
            </TestCard>}
                {userProfile?.testScores?.DET && <TestCard testName='DET' totalScore={20}>
                    <TestScoreWrapper label='Literacy' value={userProfile?.testScores?.DET?.literacy} />
                    <TestScoreWrapper label='Conversation' value={userProfile?.testScores?.DET?.conversation} />
                    <TestScoreWrapper label='Comprehension' value={userProfile?.testScores?.DET?.comprehension} />
                    <TestScoreWrapper label='Production' value={userProfile?.testScores?.DET?.production} />
                </TestCard>}
                {userProfile?.testScores?.IELTS && <TestCard testName='IELTS' totalScore={20}>
                    <TestScoreWrapper label='Reading' value={userProfile?.testScores?.IELTS?.reading} />
                    <TestScoreWrapper label='Writing' value={userProfile?.testScores?.IELTS?.writing} />
                    <TestScoreWrapper label='Speaking' value={userProfile?.testScores?.IELTS?.speaking} />
                    <TestScoreWrapper label='Listening' value={userProfile?.testScores?.IELTS?.listening} />
                </TestCard>}
                {userProfile?.testScores?.GMAT && <TestCard testName='GMAT' totalScore={20}>
                    <TestScoreWrapper label='Verbal' value={userProfile?.testScores?.GMAT?.verbal} />
                    <TestScoreWrapper label='Quant' value={userProfile?.testScores?.GMAT?.quant} />
                    <TestScoreWrapper label='AWA' value={userProfile?.testScores?.GMAT?.AWA} />
                    <TestScoreWrapper label='Integrated Reasoning' value={userProfile?.testScores?.GMAT?.integratedReasoning} />
                </TestCard>}
                {userProfile?.testScores?.TOEFL && <TestCard testName='TOEFL' totalScore={20}>
                    <TestScoreWrapper label='Reading' value={userProfile?.testScores?.TOEFL?.reading} />
                    <TestScoreWrapper label='Writing' value={userProfile?.testScores?.TOEFL?.writing} />
                    <TestScoreWrapper label='Speaking' value={userProfile?.testScores?.TOEFL?.speaking} />
                    <TestScoreWrapper label='Listening' value={userProfile?.testScores?.TOEFL?.listening} />
                </TestCard>}</> : <div>
                <NoData heading='There is nothing to show here' text={`Add your test scores to get more benefits`} />
            </div>}
            {

                modal_type === types.layout.EDIT_SCORES_FORM_MODAL && <CustomModal> <EditScores /> </CustomModal>


            }
        </div>


    )
}

export default Scores