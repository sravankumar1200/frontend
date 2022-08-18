import React from 'react'
import { Link } from 'react-router-dom'
import './detailsp.css'
import Tab1 from './Tab1'
import Tab2 from './Tab2'
import Tab3 from './Tab3'

const Detailsp = () => {
    return (
        <div className='outdet'>
        <table>
        <tr>
            <Link to='/User'>
                <button className='back-btn'>Back</button>
            </Link>
        </tr>
        <tr>
            {/* <td style={{padding: '10px'}}><Tab1 /></td>
            <td style={{padding: '10px'}}><Tab2 /></td> */}
            <td style={{padding: '10px'}}><Tab3 /></td>
        </tr>
    </table>
        </div>
    )
}

export default Detailsp
