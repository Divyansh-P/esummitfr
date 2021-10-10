import classes from './ProfileCard2.module.css'
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import imga from './about.jpg'
import imgb from './nith.png'

const ProfileCard2 = () => {
    return (
        <div className={classes.card}>
            <div className={classes.imgBox}>
                <img src="https://image.freepik.com/free-vector/about-us-concept-illustration_114360-669.jpg" className={classes.imga} />
                <img src={imgb} className={classes.imgb} />
            </div>
            <div className={classes.details}>
                <h2 className={classes.hhh}>Innovarium</h2>
                <p className={classes.c}>INNOVARIUM is the very first edition of the virtual entrepreneurial extravaganza E-Summit organized by E-Cell NIT Hamirpur.
                    With the belief that innovation and entrepreneurship go hand in hand, we aim to provide a worldwide experience to young, aspiring entrepreneurs by bringing together various
                    professionals, entrepreneurs, intelligentsia, and innovators on the same platform. </p>
            </div>
        </div>
    )
}

export default ProfileCard2;