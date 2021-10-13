import classes from './ProfileCard1.module.css'
import {FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";


const ProfileCard1 = (props) => {
    return (

            <div className={classes.containerz}>
                <div className={classes.cardz}>
                    <div className={classes.imgBx}>z
                        <img src={props.image} />
                    </div>
                    <div className={classes.contentz}>
                        <div className={classes.detailz}>
                            <h2>{props.name}<br /><span>{props.post}</span></h2>
                            <ul className={classes.social_iconz}>
                                <li>
                                    <a href={props.twitter} target="_blank"><AiFillTwitterCircle /></a>
                                </li>
                                <li>
                                    <a href={props.linkedin}  target="_blank"><FaLinkedinIn /></a>
                                </li>
                                <li>
                                    <a href={props.insta}  target="_blank"><FaInstagram /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
    )
}

export default ProfileCard1;