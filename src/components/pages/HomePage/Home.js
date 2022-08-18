import React from 'react'
import Test from '../../Test'
import {objone} from './Data'

const Home = () => {
    console.log("bruh");
    return (
        <div>
            <Test {...objone} />
        </div>
    )
}

export default Home
