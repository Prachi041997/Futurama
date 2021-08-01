import React from 'react'
import ReactLoading from "react-loading";
import './Loader.css'
const RenderLoader = ()=> {
    return(
      <div className='loaderDiv'>
        <ReactLoading type='spin' color="#FFAB04" height={45} width={45} />
      </div>
    )
} 

export default RenderLoader