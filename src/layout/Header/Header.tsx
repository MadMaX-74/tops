import React, {useEffect, useState} from 'react';
import {HeaderProps} from "./Header.props";
import classes from "./Header.module.css";
import cn from "classnames";
import LogoIcon from '../logo.svg';
import ButtonIcon from "@/components/ButtonIcon/ButtonIcon";
import { motion } from 'framer-motion';
import Sidebar from "@/layout/Sidebar/Sidebar";
import {useRouter} from "next/router";

function Header({className, ...props} :HeaderProps) :JSX.Element{
    const [isOpen, setIsOpened] = useState<boolean>(false);
    const router = useRouter();
    useEffect(() => {
       setIsOpened(false)
    }, [router]);

    const variants = {
        opened: {opacity: 1, x: 0, transition: {stiffness: 20}},
        closed: {opacity: 0, x:'100%'}
    };
    return (
        <header className={cn(classes.header, className)} {...props}>
            <LogoIcon />
            <ButtonIcon icon={'menu'} appearance={"white"} onClick={() => setIsOpened(true)} />
            <motion.div className={classes.mobileMenu} variants={variants} initial={'closed'} animate={isOpen ? 'opened' : 'closed'}>
                <Sidebar />
                <ButtonIcon icon={'close'} appearance={"white"} className={classes.menuClose} onClick={() => setIsOpened(false)}/>
            </motion.div>
        </header>
    );
}

export default Header;
