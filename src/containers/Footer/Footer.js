import { useState } from 'react'
import { Link } from 'react-router-dom'
import classes from './Footer.module.css'
import EcellLogo from './ecellwhite.png'
import { FaFacebookSquare as Facebook, } from "react-icons/fa";
import { AiFillInstagram as Instagram } from "react-icons/ai";
import { AiFillYoutube as Youtube } from "react-icons/ai";
import { AiFillLinkedin as LinkedIn } from "react-icons/ai";
import { AiOutlineTwitter as Twitter } from "react-icons/ai";

const Footer = () => {


    return (
        <div className={classes.container7}>
            <div className={classes.card}>
                <div className={classes.Logo} />
                <img src={EcellLogo} alt="#" />
            </div>
            {/* <div className={classes.Information}>
                <h1>ENTREPRENEURSHIP CELL, NIT HAMIRPUR</h1>

                <p>For queries:<span>< Link href="entrepreneurshipcellnith@gmail.com" > entrepreneurshipcellnith@gmail.com</Link></span></p>
            </div> */}

            <div className={classes.Socialmedia}>
                <ul>
                    <li>
                        <a
                            href="https://www.linkedin.com/company/entrepreneurshipcellnith/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <LinkedIn className={`${classes.icons} ${classes.c}`} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/ecell_nith/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Instagram className={`${classes.icons} ${classes.b}`} />
                        </a>
                    </li>
                    <li>
                        <a href="https://youtube.com/channel/UCGOp-u-AUwfGOqKBiEGHWJw"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Youtube className={`${classes.icons} ${classes.e}`} />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://twitter.com/ecellnith" target="blank"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Twitter className={`${classes.icons} ${classes.d}`} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/eclubnith" target="blank"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Facebook className={`${classes.icons} ${classes.a}`} />
                        </a>
                    </li>

                </ul>





            </div>
            <div className={classes.lob}>With ❤️ from Ecell NITH</div>

        </div>
    )
}

export default Footer;

