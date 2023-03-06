import React, {useEffect} from 'react';
import classes from "./Up.module.css";
import UpIcon from './up.svg';
import {useScrollY} from "@/hooks/useScrollY";
import {motion, useAnimation} from "framer-motion";
import ButtonIcon from "@/components/ButtonIcon/ButtonIcon";

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
        <motion.div
            className={classes.up}
            animate={controls}
            initial={{opacity: 0}}
        >
            <ButtonIcon icon={"up"} appearance={"primary"} onClick={() => scrollToTop()} />
        </motion.div>
    );
}

export default Up;
