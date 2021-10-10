import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './Sponsers.css';
const Sponsers = () => {
      const [sponsers,setsponsers]=useState([ ]);
    useEffect(()=>{
      axios.get('/sponsers').then((res)=>{
          setsponsers(res.data);
      })
    },[])
    console.log(sponsers);
    return ( 
        <React.Fragment>
        <h1 className="spon">Sponsors</h1>
    <div className="container61">
    {sponsers.map(sponser=>(
    <div className='solo2'>
    <div className="sponser">
    <div className="simg"><a href={sponser.Link} target="_blank"><img className="sponimg" src={sponser.Image} alt="sponsors" /></a></div>
    <div className="sponname">{sponser.Title}</div>
    </div>
    </div>
    ))}
    </div>
    </React.Fragment>
     );
    }
 
export default Sponsers;