import classes from './UpperSection.module.css'
import ecellLogo from './ecellwhite.png'


const UpperSection = ()=>{
    return(
        <div className={classes.UpperSection}>
            <img  src={ecellLogo}></img>
            <p className={classes.glowText}>Contact Us</p>
        </div>

    )
}

export default UpperSection;