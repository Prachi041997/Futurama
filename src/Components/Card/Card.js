import React from 'react'
import { Link } from 'react-router-dom'
import nofound from'../../notfound1.png'
import noimage from '../../noimage.png'
import './Card.css'
import SVG from '../SVG/Svg'
const Card = ({item})=> {
    return (
        <div className='card'>
          <SVG width='320.802' height='350.434'/>
          <div id='content'>
             <div className='desc'>
                 <h3>{item.name.first} {item.name.middle}</h3>
                 <br></br>
                 <h3>{item.name.last}</h3>
                 <h6>{item.occupation}</h6>
                 <div className='charInfo'>
                 <h6>{item.gender}</h6>
                 <h6>{item.species}</h6>
                 {item.age?
                   <h6>Age- {item.age}</h6>: null
                 }
                 {item.homePlanet? <h6>Home Planet - {item.homePlanet}</h6>: null}
                 </div>
                 {item.sayings? <Link className='link' to={
                   {     
                    pathname: `/character/${item.id}`,
                    state:item
                   }
                 }>Sayings</Link>: null}
             </div>
             <div className='image'>
                 {item.images?<img src={`${item.images.main.includes('static')? nofound :item.images.main }` }></img>: <img src={noimage}></img>}
             </div>

          </div> 
        </div>
    )
}
export default Card