import React from 'react'
import SVG from '../SVG/Svg'
import nofound from '../../notfound1.png'
import noimage from '../../noimage.png'
import './Section1.css'
const Section1 = ({state})=> {
   return(
    <div className='section1'>
    <SVG width="450.802" height="350.434"/>
    <div className='imageHolder'>
    {state.images?<img src={`${state.images.main.includes('static')? nofound :state.images.main }` }></img>: <img src={noimage}></img>}
    </div>
</div>
   )
}
export default Section1