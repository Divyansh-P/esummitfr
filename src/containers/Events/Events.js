import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './Events.css';
import Modal from './Modal/Modal';

const Events = () => {
    const[show,setshow]=useState(false);
     const [events,setevents]=useState([ ]);
    useEffect(()=>{
      axios.get('/events').then((res)=>{
          setevents(res.data);
      })
    },[]) 
    const [detail,setdetail]=useState({});
     const showhandler=(e)=>{
       
       setshow(prev=>!prev);
       events.map(event=>{
         if(e===event._id){
           setdetail({...event})
         }
       })
       
    }
    return (
      <React.Fragment>
       <div className="headingev"><h1>Events</h1></div>
         <div className="container45">
          {
               events.map((event) =>
                  <div className='solo1' key={event._id}  >
                    <img src={event.Image} className="img123"  alt="imageb" />
                     <div className="etitle">{event.Title}</div>
                     <div className="btn123" onClick={()=>showhandler(event._id)}><div className="r-btn1">View</div></div>
                  </div>
               )
          }
        </div>  
        {show&&<Modal  name={detail.Title} desc={detail.Description} link={detail.RLink}  close={setshow} />}
        </React.Fragment>
      
       
      );
}
 
export default Events;