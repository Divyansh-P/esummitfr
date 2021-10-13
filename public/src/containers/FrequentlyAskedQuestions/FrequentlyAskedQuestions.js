import { useState } from 'react';
import FrequentlyAskedQuestionsIndi from './FrequentlyAskedQuestionIndi';
import classes from './FrequentlyAskedQuestions.module.css'


const FrequentlyAskedQuestions = () => {

    


    return (

        <div className={classes.container}>
            <h2>Frequently Asked Questions</h2>
            <div className={classes.accordion}>
                <FrequentlyAskedQuestionsIndi question="Who is the best player?"/>
                <FrequentlyAskedQuestionsIndi question="Who is the best player?"/>
                <FrequentlyAskedQuestionsIndi question="Who is the best player?"/>
                             
            </div>
        </div>
    )
}


export default FrequentlyAskedQuestions;