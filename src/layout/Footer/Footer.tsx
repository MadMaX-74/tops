import React from 'react';
import {FooterProps} from "./Footer.props";
import classes from "./Footer.module.css";
import cn from "classnames";
import {format} from 'date-fns'

function Footer({className, ...props} :FooterProps) :JSX.Element{
    return (
        <footer className={cn(classes.footer, className)} {...props}>
            <div>
                OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены
            </div>
            <a href="src/layout/Footer#" target="_blank">Пользовательское соглашение</a>
            <a href="src/layout/Footer#" target="_blank">Политика конфиденциальности</a>
        </footer>
    );
}

export default Footer;
