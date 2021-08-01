import React from 'react'
import Saying from '../Saying/Saying'
import './Section2.css'
const Section2 = ({state}) => {
    return (
        <div className='section2'>
            <div className='section2Header'>
                <h1>{state.name.first} {state.name.middle} {state.name.last}</h1>
                <h4>Sayings</h4>
            </div>
            <div className='sayingsContainer'>
                {state.sayings.map((quote, index) => {
                    return <Saying key={index} quote={quote} />
                })}
            </div>
        </div>
    )
}
export default Section2