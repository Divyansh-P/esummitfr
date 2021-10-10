import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Team.css';


const Team = () => {
   const [teams, setteams] = useState([ ]);
  useEffect(() => {
    axios.get('/team').then((res) => {
      console.log(res.data)
      setteams(res.data);
    })
  }, []) 
console.log(teams)
  return (
    <div className="container789">
    <div className="headingteam">Our Team</div>
    <div className="team_container">

      { teams.map(team => (
        <div className="team_card" >
          <div className="card_img" style={{backgroundImage:`url(${team.Image})`}}>

            <div className="details">
              <div className="solinks">
                <ul>
                  <li><a href={team.LinkL}><i class="fab fa-linkedin"></i></a></li>
                   <li><a href={'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to='+`${team.LinkE}` } target="_blank"><i class="fas fa-envelope"></i></a></li> 
                </ul>
              </div>
            </div>
          </div>
          <div className="names">
          <div className="name1">{team.Name}</div>
          <div className="posi1">{team.Title}</div>
          </div>
        </div>
      )) 
      } 
     
       
    
      
        
 
    </div>
    </div>
  )
}

export default Team;
