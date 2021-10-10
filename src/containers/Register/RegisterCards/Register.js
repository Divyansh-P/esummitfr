import RegisterCards from "../RegisterCards/RegisterCards"
import classes from './Register.module.css';
import FrequentlyAskedQuestions from '../../FrequentlyAskedQuestions/FrequentlyAskedQuestions';
import Footer from '../../Footer/Footer';
const Register = () =>{

    return(
        <div className={classes.mains2}>
        <div className={classes.heads1}>REGISTERATIONS ARE NOW OPEN!</div>
        <div className={classes.Register}>
        
            <RegisterCards name="Student" price="Rs150" content="For individuals who are college students, and want to attend the E-Summit, registerhere." img="https://img.icons8.com/fluent/100/000000/student-center.png"/>
            <RegisterCards name="Contingent" price="Rs500" content="Register under this category if you are a team of 5 students from the same college who wish to attend E-Summit at a discounted rate." img="https://img.icons8.com/ios-filled/100/000000/conference-call.png"/>
            
        </div> 

    
        <FrequentlyAskedQuestions/>
        <Footer/>
        </div>
    )
}


export default Register ; 
