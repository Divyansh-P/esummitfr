import classes from './Cube.module.css'


const Cube = () => {
    return (
        <div className={classes.box}>
            <div className={classes.top}></div>
            <div className={classes.innerBox}>
                <span className={classes.innerBoxSpan}></span>
                <span className={classes.innerBoxSpan}></span>
                <span className={classes.innerBoxSpan}></span>
                <span className={classes.innerBoxSpan}></span>
            </div>
        </div>
    )

}

export default Cube;