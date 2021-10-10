import classes from './RightSection.module.css'
import { GoLocation } from "react-icons/go";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { GrInstagram } from "react-icons/gr";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";



const RightSection = () => {
    return (
        <div className={classes.RightSection}>

            <div className={classes.individual}>


                <div className={classes.indi}>
                    <GoLocation className={classes.margin} />
                    <span>E-Cell NIT Hamirpur</span>
                </div>
                <div className={classes.indi}>
                    <IoCallSharp className={classes.margin} />
                    <span>+919877954238</span>
                </div>
                <div className={classes.indi}>
                    <MdEmail className={classes.margin} />
                    <span>entrepreneurshipcellnith@gmail.com</span>
                </div>
            </div>
            <div className={classes.socialMedia}>
                <hr />
                <ul className={classes.socialMediaUl}>
                    <li>
                        <a href="https://www.instagram.com/ecell_nith/ "
                         target="_blank"
                         rel="noreferrer">
                                <GrInstagram className={classes.marginb} /></a>
                    </li>
                    <li>
                        <a href="https://twitter.com/ecellnith" 
                         target="_blank"
                         rel="noreferrer">
                                <AiOutlineTwitter className={classes.marginb} /></a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/eclubnith"
                         target="_blank"
                         rel="noreferrer">
                                <FaFacebookSquare className={classes.marginb} /></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/company/entrepreneurshipcellnith/"
                         target="_blank"
                         rel="noreferrer">
                                <FaLinkedin className={classes.marginb} /></a>
                    </li>
                </ul>
                <hr></hr>



            </div>

        </div>
    )
}


export default RightSection;