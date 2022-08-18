import React from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import './test.css'

const Test = ({lbg, topline, ltext, ldesc, headline, desc, buttonlabel, img, alt, imgstart}) => {
    return (
        <div className={lbg ? 'home_test' : 'home_test dbg'}>
        <div className='container'>
          <div className='row home_test-row' style={{ display: 'flex', flexDirection: imgstart === 'start' ? 'row-reverse' : 'row' }}>
            <div className='col'>
              <div className='home_test-text-wrapper'>
                <div className='top-line'>{topline}</div>
                <h1 className={ltext ? 'heading' : 'heading dark'}>
                  {headline}
                </h1>
                <p className={ ldesc  ? 'home_test-subtitle'  : 'home_test-subtitle dark' }>
                  {desc}
                </p>
                <Link to='/User'>
                  <Button buttonSize='btn--wide' buttonColor='blue'>
                    {buttonlabel}
                  </Button>
                </Link>
              </div>
            </div>
            <div className='col'>
              <div className='home_test-img-wrapper'>
                <img src={img} alt={alt} className='home_test-img' />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Test
