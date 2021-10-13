import { useState } from 'react';
import classes from './FrequentlyAskedQuestionIndi.module.css'

const FrequentlyAskedQuestionIndi = (props) => {

    const [active, setActive ] = useState(false);


    const  toggleAccordion = () =>{
        setActive(!active);
      }

      const customClass = active ? `${classes.active}`:"";
      const customClassa = active ? `${classes.activea}`:"";


    return (
        <div className={classes['accordion-item']}>
            <a className={classes.a} onClick={toggleAccordion} className={customClass}>{props.question}</a>
            <div className={`${classes.content} ${customClassa}`} >
                <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra suspendisse potenti.</p>
            </div>
        </div>

    )

}

export default FrequentlyAskedQuestionIndi;