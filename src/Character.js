import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from './Components/Header/Header'
import Section1 from './Components/Section1/Section1'
import Section2 from './Components/Section2/Section2'
const Character = () => {
    let {state} = useLocation()
   
    return (
        <React.Fragment>
            <div className='container'>
               <Header/>
                <div className='article'>
                    <Section1 state={state}/>
                    <Section2 state={state}/>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Character