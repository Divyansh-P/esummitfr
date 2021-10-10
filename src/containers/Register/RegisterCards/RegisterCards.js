import classes from './RegisterCards.module.css';
import { Link } from 'react-router-dom';

const RegisterCards = (props) => {
    return (
        <div>
            <div className={classes[`form-container`]}>
                <form className={classes.form}>
                    <h3>{props.name}</h3>
                    <div>
                        <img src={props.img} />
                    </div>
                    <div className={classes.price}>{props.price}</div>
                    <div className={classes.text}>{props.content}</div>
                    <Link to="/form"><button className={classes.submit}>Register</button></Link>
                </form>
            </div>
        </div>
    )
}


export default RegisterCards;
