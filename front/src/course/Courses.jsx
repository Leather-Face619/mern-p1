import React from 'react'
import { Footer } from '../components/Footer'
import Nav from '../components/Nav'
import Course from '../components/Course'

const Courses = () => {
    return (<>
        <Nav />
        <div className=' w-full min-h-screen'>
            <Course/>
            </div>
        <Footer />
    </>
    )
}

export default Courses