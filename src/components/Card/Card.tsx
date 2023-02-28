import React from 'react';
import classes from "./Card.module.css";
import cn from "classnames";
import {CardProps} from "@/components/Card/Card.props";

function Card({color = 'white', children,  className, ...props} :CardProps) :JSX.Element {
    return (
        <div className={cn(classes.card, className, {
            [classes.blue]: color == 'blue'
        })} {...props}>
            {children}
        </div>
    );
}

export default Card;
