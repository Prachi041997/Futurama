
import './App.css';
import { useEffect, useState } from 'react';
import Card from './Components/Card/Card';
import Header from './Components/Header/Header';
import RenderLoader from './Components/Loader/Loader';

function App() {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    fetch('https://api.sampleapis.com/futurama/characters')
      .then(response => response.json())
      .then(data => {
        setLoading(false)
        let d = data.slice(0, data.length-2)
        setCharacters(d)
      }).catch(err=> {
        setLoading(false)
      })
  }, [])

  
 
  return (
    <div className='container'>
     <Header/>
     {loading? <RenderLoader/>:
      <div id='main'>
         {characters.map(item=> {
           return <Card key={item.id} item={item}/>
         })}
      </div>
}
    </div>
  );
}

export default App;
