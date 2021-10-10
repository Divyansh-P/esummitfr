import ProfileCard1 from './ProfileCard1';
import classes from './speakers.module.css'
import { useState,useEffect } from 'react';
import axios from 'axios';

const Speakers = () => {
      const [speakers,setspeakers]=useState([ ]);
    useEffect(()=>{
      axios.get('/speakers').then((res)=>{
          console.log(res);
          setspeakers(res.data);
      })
    },[]) 
    console.log(speakers);
    return (
        <div className={classes.speakerz}>
            <h1 className={classes.hz}>Our Speakers</h1>
            <div className={classes.profileHolder}>
            { speakers.map(speaker=>(
                <div className={classes.proCont}>
                  
                    <ProfileCard1 name={speaker.Name} post={speaker.Post} linkedin={speaker.LinkL} twitter={speaker.LinkT} image={speaker.Image} insta={speaker.LinkI} />
                  
                  
                </div> ))
            }
        
            {/* <ProfileCard1  /> */}
            
            
            </div>


        </div>
    )
}

export default Speakers;