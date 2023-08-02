import React, { useRef } from 'react'
import Testimonials from './sections/testimonials'
import WhatYouGet from './sections/whatYouGet'
import Register from './sections/register'
import Banner from './sections/banner'
import EducationLoans from './sections/educationLoans'
import SearchBestUniversities from './sections/searchBestUniversities'

const Home = () => {
    const formRef = useRef()
    return (
        <>
            <Banner formRef={formRef} />
            <WhatYouGet />
            <SearchBestUniversities />
            <EducationLoans />
            <Testimonials />
            <Register formRef={formRef} />
        </>
    )
}

export default Home