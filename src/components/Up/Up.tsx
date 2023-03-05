import React, {useEffect} from 'react';
import classes from "./Up.module.css";
import UpIcon from './up.svg';
import {useScrollY} from "@/hooks/useScrollY";
import {motion, useAnimation} from "framer-motion";

function Up() :JSX.Element {
    const controls = useAnimation();
    const y = useScrollY();
    useEffect(() => {
        controls.start({opacity: y / document.body.scrollHeight});
    }, [y, controls]);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <motion.button
            className={classes.up}
            onClick={() => scrollToTop()}
            animate={controls}
            initial={{opacity: 0}}
        >
            <UpIcon />
        </motion.button>
    );
}

export default Up;