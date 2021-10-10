import ContactUsFake from "./ContactUsFake";
import RightSection from "./RightSection.js";
import classes from './Contact.module.css'
import UpperSection from "./UpperSection";


const Contact = () => {
    return (
        <div className={classes.ContactBody}>

            
            <UpperSection />
            <div className={classes.C}>
                <ContactUsFake />
                <RightSection />
            </div>
        </div>
    )
}

export default Contact;